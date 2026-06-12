import { useState } from "react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      desc: "Meet with our specialist to assess your hair loss pattern, donor density, and discuss your goals. We create a personalized treatment plan."
    },
    {
      num: "02",
      title: "Medical Checkup",
      desc: "Comprehensive blood tests and scalp analysis to ensure your health and suitability for the process and answer all your questions."
    },
    {
      num: "03",
      title: "Surgery Day",
      desc: "Performed under local anesthesia on an outpatient basis. Painless extraction of follicles and precise implantation matching your natural hair direction and density."
    },
    {
      num: "04",
      title: "Recovery & Healing",
      desc: "Most patients return to work within a few days. We provide a complete aftercare kit and 24/7 support during your healing journey."
    },
    {
      num: "05",
      title: "Final Results",
      desc: "New hair growth begins at 3-4 months, with full, permanent results visible at 12-18 months. The transformation is complete."
    }
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            A simple, transparent, and pain-free journey to restoring your hair.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-2 md:px-0">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-6 md:gap-10 pb-16 last:pb-0 group">
              {idx !== steps.length - 1 && (
                <div className="absolute top-16 left-8 md:left-8 w-[1px] h-full bg-amber-100 flex-shrink-0 z-0"></div>
              )}
              <div className="shrink-0 w-16 h-16 rounded-full border-2 border-amber-300 bg-white flex items-center justify-center text-lg font-bold text-amber-600 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-white group-hover:border-amber-400 shadow-sm z-10 cursor-default">
                {step.num}
              </div>
              <div className="pt-2 pb-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
