import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Generated dummy images
import patient1 from "../assets/images/patient_1_before_after_1780228824722.png";
import patient2 from "../assets/images/patient_2_before_after_1780228840289.png";
import patient3 from "../assets/images/patient_3_before_after_1780228855541.png";

const slides = [
  {
    id: 1,
    image: patient1,
    alt: "Patient 1 Before and After"
  },
  {
    id: 2,
    image: patient2,
    alt: "Patient 2 Before and After"
  },
  {
    id: 3,
    image: patient3,
    alt: "Patient 3 Before and After"
  }
];

export function BeforeAfterSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-white" id="results">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Real Transformations
          </h2>
          <p className="text-gray-600 text-lg">
            See the dramatic before and after results from our patients. 
            (Images formatted perfectly for both mobile and desktop screens).
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-2 bg-gray-50 border border-gray-100">
           <div className="relative w-full aspect-square md:aspect-video bg-gray-100 rounded-2xl overflow-hidden">
             {slides.map((slide, index) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    index === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
             ))}
           </div>
           
           <button 
              onClick={prev} 
              className="absolute left-6 p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl transition-all z-10 backdrop-blur-sm border border-gray-100"
              aria-label="Previous slide"
            >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <button 
              onClick={next} 
              className="absolute right-6 p-3 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-xl transition-all z-10 backdrop-blur-sm border border-gray-100"
              aria-label="Next slide"
           >
             <ChevronRight className="w-6 h-6" />
           </button>
           
           <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
             {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-md ${
                    idx === current ? "bg-emerald-600 w-10" : "bg-white/80 w-3 hover:bg-white"
                  }`}
                />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
