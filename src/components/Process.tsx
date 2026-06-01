export function Process() {
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      desc: "Our expert assesses your scalp, baldness level, and determines graft requirements."
    },
    {
      num: "02",
      title: "Extraction Phase",
      desc: "Healthy hair follicles are carefully extracted from the donor area (usually back of head)."
    },
    {
      num: "03",
      title: "Implantation Phase",
      desc: "Follicles are implanted with precise angle and depth to mimic natural hair growth."
    },
    {
      num: "04",
      title: "Growth & Follow-up",
      desc: "Regrowth begins. Final natural results are fully visible in 7-8 months."
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            A simple, transparent, and pain-free journey to restoring your hair.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gray-800 -z-10 translate-x-1/2"></div>
              )}
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-emerald-600/20 mx-auto md:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
