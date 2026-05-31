import { CheckCircle2, IndianRupee, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              #1 Hair Transplant Clinic in Ludhiana
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Regain Your Hair, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Restore Your Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class hair restoration with advanced FUE technology by our experienced MBBS, MS surgeons with over 10 years of expertise.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-800">1000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-800">10+ Years Experience</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xl shadow-blue-900/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">Special Limited Offer</p>
                  <div className="flex items-baseline gap-1">
                    <IndianRupee className="w-6 h-6 text-gray-900" />
                    <span className="text-3xl font-extrabold text-gray-900">29,999/-</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 font-medium">* Easy EMI Available</p>
                </div>
                <a href="#book" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Claim Offer Now
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto" id="book">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Call Back</h3>
                <p className="text-sm text-gray-500">Our hair expert will contact you shortly</p>
              </div>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enter mobile number" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" id="city" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="E.g. Ludhiana" />
                </div>
                <button type="button" className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg transition-colors shadow-md">
                  Request Consultation
                </button>
                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                  By submitting this form, you agree to our terms and conditions. Your data is secure with us.
                </p>
              </form>
            </div>
            
            {/* Decorative elements behind form */}
            <div className="absolute top-10 -right-10 w-full h-full bg-blue-100/50 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-indigo-50/80 rounded-3xl -z-10 transform -rotate-3"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
