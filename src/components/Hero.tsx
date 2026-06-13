import React, { useState, useEffect } from 'react';
import { Check, Star, IndianRupee, Loader2 } from "lucide-react";

export function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const titles = [
    "Restore Your Confidence",
    "Rediscover Yourself",
    "Get A Natural Hairline",
    "Painless & Safe Method"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[titleIndex];
      
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('city', formData.city);

      let hasError = false;

      try {
        await fetch('https://script.google.com/macros/s/AKfycbwNh_-Rwxqi7r2qrJpuVkxxwLpJ8iAJBMxXCSZdk37dCmA3MkcgplmJcKP7_GJioTwlSg/exec?gid=0', {
          method: 'POST',
          body: data,
          mode: 'no-cors'
        });
      } catch (error) {
        console.error('Google Sheets submission error:', error);
        hasError = true;
      }

      try {
        await fetch('https://formsubmit.co/ajax/gurpreet.inet@gmail.com', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: "New Free Consultation Booking",
            Name: formData.name,
            Phone: formData.phone,
            City: formData.city || "Not provided"
          })
        });
      } catch (error) {
        console.error('FormSubmit email error:', error);
      }

      if (hasError) {
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', city: '' });
      }
    } catch (error) {
      console.error('General submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
              #1 Hair Transplant Clinic in Ludhiana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 tracking-tight min-h-[100px] md:min-h-[144px]">
              Regain Your Hair, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                {displayedText}
              </span>
              <span className="animate-pulse border-r-4 border-emerald-600 ml-1 inline-block h-[0.8em]"></span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed">
              Experience world-class hair restoration with advanced FUE and IHT technology.
            </p>
            
            <div className="mb-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-100 shadow-sm border border-yellow-300 transform hover:-translate-y-0.5 transition-transform">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-full p-1 border border-yellow-200 shadow-inner">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-amber-900 tracking-tight uppercase text-sm">10+ Years Experience</span>
            </div>

            {/* Before / After Polaroids */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-8 lg:block lg:absolute lg:left-[70%] xl:left-[80%] lg:-top-6 xl:-top-10 mb-10 lg:mb-0 z-20 pointer-events-none lg:w-[320px] xl:w-[450px] lg:h-[380px] xl:h-[480px] w-full px-2">
              {/* Before Polaroid */}
              <div className="bg-white p-2 pb-6 sm:p-3 sm:pb-9 rounded shadow-[0_8px_20px_rgba(0,0,0,0.08)] transform -rotate-2 lg:-rotate-6 border border-gray-100 w-[47%] max-w-[220px] sm:w-64 lg:w-32 xl:w-44 xl:p-3 xl:pb-10 relative z-10 lg:absolute lg:top-0 lg:left-[50px] xl:left-[30px] pointer-events-auto transition-transform hover:rotate-0 hover:z-30 lg:origin-bottom-right">
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                  <img src="/hero-before.jpg" alt="Before" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute bottom-1.5 xl:bottom-2 left-0 right-0 text-center font-medium italic text-gray-500 text-xs sm:text-[13px] xl:text-[15px]">Before</div>
              </div>

              {/* Desktop Arrow */}
              <div className="hidden lg:block w-32 xl:w-40 z-20 opacity-80 lg:absolute lg:top-[160px] lg:-left-[10px] xl:top-[190px] xl:left-[0px]">
                <style>
                  {`
                    @keyframes drawDash {
                      to {
                        stroke-dashoffset: -20;
                      }
                    }
                    .animate-curved-dash {
                      animation: drawDash 1s linear infinite;
                    }
                  `}
                </style>
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-auto text-emerald-500 drop-shadow-sm overflow-visible">
                  <path d="M90,20 C90,60 50,85 20,85" className="animate-curved-dash" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5,5" fill="none" strokeLinecap="round" />
                  <path d="M30,75 L20,85 L30,95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* After Polaroid */}
              <div className="bg-white p-2 pb-6 sm:p-3 sm:pb-9 rounded shadow-[0_12px_25px_rgba(0,0,0,0.12)] transform rotate-2 lg:rotate-6 border border-gray-100 w-[47%] max-w-[220px] sm:w-64 lg:w-32 xl:w-44 xl:p-3 xl:pb-10 relative z-10 pointer-events-auto transition-transform hover:rotate-0 hover:z-30 lg:absolute lg:top-[250px] lg:-left-[20px] xl:top-[290px] xl:left-[20px] lg:origin-top-left">
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                  <img src="/hero-after.jpg" alt="After" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute bottom-1.5 xl:bottom-2 left-0 right-0 text-center font-bold italic text-emerald-600 text-xs sm:text-[13px] xl:text-[15px]">After</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-800 text-sm font-semibold shadow-sm">
                  <div className="flex gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  </div>
                  <span>4.8/5 Rated</span>
                </div>
                
                <div className="flex items-center gap-2 pl-1.5 pr-4 py-1 rounded-full border border-gray-200 bg-white text-gray-800 text-sm font-semibold shadow-sm overflow-hidden">
                  <div className="flex -space-x-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="Patient" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Patient" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="Patient" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Patient" />
                  </div>
                  <span>2000+ Transplants Done</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                  <span>Painless Surgery</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                  <span>Natural Hairline</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                  <span>Easy EMI</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-xl shadow-emerald-900/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">Special Limited Offer</p>
                  <div className="flex items-baseline gap-1">
                    <IndianRupee className="w-6 h-6 text-gray-900" />
                    <span className="text-3xl font-extrabold text-gray-900">34,999/-</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 font-medium">* Easy EMI Available</p>
                </div>
                <a href="#book" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                  Claim Offer Now
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto scroll-mt-28" id="book">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Consultation</h3>
                <p className="text-sm text-gray-500">Our hair expert will contact you shortly</p>
              </div>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {submitStatus === 'success' ? (
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100 text-sm text-center">
                    Thank you! We have received your details. Our team will contact you shortly.
                  </div>
                ) : null}
                {submitStatus === 'error' ? (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 text-sm text-center">
                    Something went wrong. Please try again or call us directly.
                  </div>
                ) : null}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter mobile number" 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="E.g. Ludhiana" 
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg transition-colors shadow-md flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Request Consultation'
                  )}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                  By submitting this form, you agree to our terms and conditions. 100% confidential. No spam. We respect your privacy.
                </p>
              </form>
            </div>
            
            {/* Decorative elements behind form */}
            <div className="absolute top-10 -right-10 w-full h-full bg-emerald-100/50 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-indigo-50/80 rounded-3xl -z-10 transform -rotate-3"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
