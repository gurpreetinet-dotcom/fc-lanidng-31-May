export function Stats() {
  return (
    <section className="py-12 bg-white relative z-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-emerald-100/50 transition-transform hover:scale-105 duration-300">
            <span className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">5000+</span>
            <span className="text-sm md:text-base text-gray-600 font-medium">Happy Patients</span>
          </div>
          
          <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-emerald-100/50 transition-transform hover:scale-105 duration-300">
            <span className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">2000+</span>
            <span className="text-sm md:text-base text-gray-600 font-medium">Hair Transplants Done</span>
          </div>
          
          <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-emerald-100/50 transition-transform hover:scale-105 duration-300">
            <span className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">96%+</span>
            <span className="text-sm md:text-base text-gray-600 font-medium">Graft Survival Rate</span>
          </div>
          
          <div className="bg-emerald-50/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-emerald-100/50 transition-transform hover:scale-105 duration-300">
            <span className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">10+</span>
            <span className="text-sm md:text-base text-gray-600 font-medium">Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
