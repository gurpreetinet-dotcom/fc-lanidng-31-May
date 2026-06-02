import { Check, Star, IndianRupee, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
              #1 Hair Transplant Clinic in Ludhiana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Regain Your Hair, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                Restore Your Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class hair restoration with advanced FUE and IHT technology. <span className="font-bold text-gray-900 bg-yellow-100 rounded px-1">10+ Years Experience</span>
            </p>

            {/* Before / After Polaroids */}
            <div className="flex lg:absolute lg:right-[-60px] xl:right-[-140px] lg:top-4 xl:top-0 items-center justify-start lg:justify-center mb-10 lg:mb-0 z-20 pointer-events-none">
              {/* Before Polaroid */}
              <div className="bg-white p-2 pb-7 rounded shadow-[0_8px_20px_rgba(0,0,0,0.08)] transform -rotate-6 border border-gray-100 w-28 sm:w-32 xl:w-36 relative z-10 pointer-events-auto transition-transform hover:rotate-0 hover:z-30">
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                  <img src="/before.jpg" alt="Before" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute bottom-1.5 left-0 right-0 text-center font-medium italic text-gray-500 text-[13px]">Before</div>
              </div>
              
              {/* Dotted Curved Arrow SVG */}
              <div className="w-16 sm:w-20 xl:w-24 -mx-3 z-20 mt-6 lg:mt-12 opacity-80">
                <svg viewBox="0 0 100 50" fill="none" className="w-full h-auto text-emerald-500 drop-shadow-sm overflow-visible">
                  <path d="M10,40 Q50,-15 90,30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5,5" fill="none" strokeLinecap="round" />
                  <path d="M78,18 L94,32 L78,42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* After Polaroid */}
              <div className="bg-white p-2 pb-7 rounded shadow-[0_12px_25px_rgba(0,0,0,0.12)] transform rotate-6 border border-gray-100 w-28 sm:w-32 xl:w-36 relative z-10 mt-6 xl:mt-12 pointer-events-auto transition-transform hover:rotate-0 hover:z-30">
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                  <img src="/result.jpg" alt="After" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute bottom-1.5 left-0 right-0 text-center font-bold italic text-emerald-600 text-[13px]">After</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-800 text-sm font-semibold shadow-sm">
                <div className="flex gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                </div>
                <span>4.9/5 Rated</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm">
                <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                <span>100% Doctor-Led</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium shadow-sm">
                <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                <span>1000+ Transplants Done</span>
              </div>
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
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="Enter mobile number" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" id="city" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="E.g. Ludhiana" />
                </div>
                <button type="button" className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg transition-colors shadow-md">
                  Request Consultation
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
