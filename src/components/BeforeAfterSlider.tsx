import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "../assets/images/before-after1.jpg";
import beforeAfter2 from "../assets/images/before-after2.jpg";
import beforeAfter3 from "../assets/images/before-after3.jpg";

const slides = [
  {
    id: 1,
    image: beforeAfter1,
    alt: "Hair Transplant Before and After Ludhiana"
  },
  {
    id: 2,
    image: beforeAfter2,
    alt: "FUE Hair Transplant Results"
  },
  {
    id: 3,
    image: beforeAfter3,
    alt: "Best Hair Transplant Doctor Results"
  }
];

export function BeforeAfterSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-white" id="results">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Life-Changing Hair Transformations
          </h2>
          <p className="text-gray-600 text-lg">
            See real before-and-after results from patients. ⭐⭐⭐⭐⭐
          </p>
        </div>
        
        <div 
          className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-2 bg-gray-50 border border-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
