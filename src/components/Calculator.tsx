import { useState } from "react";
import { Calculator as CalcIcon, Loader2 } from "lucide-react";

const NorwoodFace = ({ level, active }: { level: number; active: boolean }) => {
  const getHairPath = (l: number) => {
    // Outer boundary of hair (matches top of the head)
    const outer = "M 11 35 C 10 5, 54 5, 53 35";
    
    // Top of the outer curve naturally sits around Y=12.5 at X=32.
    switch (l) {
      case 1:
        return `${outer} Q 42 22, 32 22 Q 22 22, 11 35 Z`;
      case 2:
        return `${outer} C 48 18, 42 18, 32 20 C 22 18, 16 18, 11 35 Z`;
      case 3:
        return `${outer} C 50 13, 40 14, 32 18 C 24 14, 14 13, 11 35 Z`;
      case 4:
        return `${outer} C 50 12, 42 10, 32 15 C 22 10, 14 12, 11 35 Z`;
      case 5:
        return `${outer} C 52 14, 45 13, 32 13 C 19 13, 12 14, 11 35 Z`;
      case 6:
        // Left and right side hair patches
        return `M 11 35 C 10 18, 20 18, 18 35 Z M 53 35 C 54 18, 44 18, 46 35 Z`;
      case 7:
        // Smaller side hair patches
        return `M 11 35 C 10 25, 16 25, 15 35 Z M 53 35 C 54 25, 48 25, 49 35 Z`;
      default:
        return "";
    }
  };

  const skinFill = active ? "#fef3c7" : "#f8fafc";
  const strokeColor = active ? "#064e3b" : "#475569";
  const hairColor = active ? "#059669" : "#64748b";

  return (
    <div className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 cursor-pointer ${active ? 'bg-emerald-50 ring-2 ring-emerald-500 shadow-md scale-105' : 'bg-white border border-gray-100 hover:bg-gray-50'}`}>
      <svg viewBox="0 0 64 64" className="w-16 h-16 sm:w-20 sm:h-20" fill="none" stroke={strokeColor}>
        {/* Ears */}
        <path d="M 12 30 C 8 30, 8 40, 12 40 M 52 30 C 56 30, 56 40, 52 40" fill={skinFill} strokeWidth="1.5" />
        
        {/* Face/Head Outline */}
        <path d="M 12 30 C 12 10, 52 10, 52 30 C 52 50, 42 60, 32 60 C 22 60, 12 50, 12 30 Z" fill={skinFill} strokeWidth="1.5" />
        
        {/* Eyes */}
        <circle cx="24" cy="35" r="1.5" fill={strokeColor} stroke="none" />
        <circle cx="40" cy="35" r="1.5" fill={strokeColor} stroke="none" />
        
        {/* Nose */}
        <path d="M 32 35 L 32 42" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Mouth */}
        <path d="M 28 48 Q 32 50 36 48" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Hair */}
        <path d={getHairPath(level)} fill={hairColor} stroke="none" />
      </svg>
      <span className={`mt-2 font-bold text-sm sm:text-base ${active ? 'text-emerald-700' : 'text-gray-500'}`}>
        Level {level}
      </span>
    </div>
  );
};

export function Calculator() {
  const [level, setLevel] = useState<number>(3);
  const [calcName, setCalcName] = useState('');
  const [calcPhone, setCalcPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Approximate graft counts based on Norwood scales
  const graftEstimates: Record<number, string> = {
    1: "No Transplant Required",
    2: "800 - 1,500 Grafts",
    3: "1,500 - 2,500 Grafts",
    4: "2,500 - 3,500 Grafts",
    5: "3,500 - 4,500 Grafts",
    6: "4,500 - 6,000 Grafts",
    7: "5,000+ Grafts / Body Hair Transplant"
  };

  const handleCalcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcName || !calcPhone) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const data = new FormData();
      data.append('name', calcName);
      data.append('phone', calcPhone);
      data.append('city', `Norwood Level ${level} (${graftEstimates[level]})`);

      let hasError = false;

      // 1. Submit to Google Sheets (Webhook)
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

      // 2. Submit to Email via FormSubmit
      try {
        await fetch('https://formsubmit.co/ajax/gurpreet.inet@gmail.com', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: "New Graft Calculator Submission",
            Name: calcName,
            Phone: calcPhone,
            NorwoodLevel: `Level ${level}`,
            EstimatedGrafts: graftEstimates[level]
          })
        });
      } catch (error) {
        console.error('FormSubmit email error:', error);
      }

      if (hasError) {
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setCalcName('');
        setCalcPhone('');
      }
    } catch (error) {
      console.error('General Calculator submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-emerald-50" id="calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-emerald-600 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
              <CalcIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Calculate Your Graft Requirement</h2>
            <p className="text-emerald-100 max-w-lg mx-auto">
              Select your current baldness level according to the Norwood Scale to get an estimated graft count.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Step 1 - Select your baldness level</h3>
              
              {/* Responsive grid for the Norwood faces */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((stage) => (
                  <div key={stage} onClick={() => setLevel(stage)}>
                    <NorwoodFace level={stage} active={level === stage} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 mb-10 w-full max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Estimated Requirement</p>
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">
                {graftEstimates[level]}
              </div>
              <p className="text-xs text-gray-400 mt-4 max-w-sm mx-auto">
                * This is a rough estimation. Exact requirement can only be determined during a proper physical clinical consultation.
              </p>
            </div>

            <div className="max-w-md mx-auto text-left bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Step 2 - Submit Details for Quote</h3>
              <form className="space-y-4" onSubmit={handleCalcSubmit}>
                {submitStatus === 'success' ? (
                  <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100 text-sm text-center">
                    Estimate Ready & Booked! We have received your details. Our team will contact you shortly with your free clinical consultation options.
                  </div>
                ) : null}
                {submitStatus === 'error' ? (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 text-sm text-center">
                    Something went wrong. Please try again or message us directly.
                  </div>
                ) : null}
                <div>
                  <label htmlFor="calc-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="calc-name" 
                    value={calcName}
                    onChange={(e) => setCalcName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label htmlFor="calc-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="calc-phone" 
                    value={calcPhone}
                    onChange={(e) => setCalcPhone(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:bg-gray-50" 
                    placeholder="Enter mobile number" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Estimating...
                    </>
                  ) : (
                    "Get Estimate & Book Free Consultation"
                  )}
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
