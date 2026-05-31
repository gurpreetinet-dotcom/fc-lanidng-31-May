import { useState } from "react";
import { Calculator as CalcIcon } from "lucide-react";

export function Calculator() {
  const [level, setLevel] = useState<number>(3);
  
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

  return (
    <section className="py-24 bg-blue-50" id="calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-blue-600 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
              <CalcIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Calculate Your Graft Requirement</h2>
            <p className="text-blue-100 max-w-lg mx-auto">
              Select your current baldness level according to the Norwood Scale to get an estimated graft count.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Step 1 - Select your baldness level</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[1, 2, 3, 4, 5, 6, 7].map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setLevel(stage)}
                    className={`w-14 h-14 rounded-full font-bold text-lg flex items-center justify-center transition-all ${
                      level === stage 
                      ? "bg-blue-600 text-white shadow-md scale-110" 
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 mb-10">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Estimated Requirement</p>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600">
                {graftEstimates[level]}
              </div>
              <p className="text-xs text-gray-400 mt-4 max-w-sm mx-auto">
                * This is a rough estimation. Exact requirement can only be determined during a proper physical clinical consultation.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2 - Get Exact Quote & Expert Advice</h3>
              <a href="#book" className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors shadow-md">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
