import { useState, useEffect, useCallback } from "react";
import { Star, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../assets/images/smiling_man_clinic_bg_1780230010689.png";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const googleReviewsData = [
  {
    name: "nagesh boyina",
    date: "6 months ago",
    images: ["/before.jpg", "/result.jpg"],
    content: "I came from Andra Pradesh, our many friends already undergone of hair transplantation from First choice Hair Transplant Ludhiana and they got very good results. We are fully satisfied with all the team of clinic."
  },
  {
    name: "Monu Kumar",
    date: "8 months ago",
    content: "It's the best hair transplant clinic in Ludhiana, price and services are it's best. Even they follow you till you got results. I am satisfied with the services of First choice"
  },
  {
    name: "Dushyant Kumar",
    date: "5 months ago",
    content: "I came from haryana for my transplant and im so happy i chose first choice clinic. Excellent experience, very professional staff. The clinic was very hygienic. Highly recommend"
  },
  {
    name: "Vikram Verma",
    date: "3 months ago",
    content: "I got my transplant done here and it completely changed my look. Very professional team, hygienic environment, and excellent post-surgery care. Thank you First Choice!"
  },
  {
    name: "Jaspreet Singh",
    date: "1 month ago",
    content: "Affordable and transparent pricing. Started seeing great results after 6 months. Best hair transplant clinic in Ludhiana right now. Highly recommended for anyone looking for lasting results."
  }
];

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const padding = window.innerWidth >= 1024 ? 64 : window.innerWidth >= 640 ? 48 : 32;
      const containerWidth = Math.min(window.innerWidth - padding, 1280);
      const visible = Math.max(1, Math.floor(containerWidth / 400));
      setCardsToShow(visible);
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = googleReviewsData.length + 1; // +1 for AI Summary Box

  const next = useCallback(() => {
    if (totalCards <= cardsToShow) return;
    setCurrentIndex((prev) => (prev + 1 >= totalCards - cardsToShow + 1 ? 0 : prev + 1));
  }, [totalCards, cardsToShow]);

  const prev = () => {
    if (totalCards <= cardsToShow) return;
    setCurrentIndex((prev) => (prev === 0 ? totalCards - cardsToShow : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 overflow-hidden" id="reviews">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Loved by Patients Worldwide
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Thousands of successful hair transplants and continuous 5-star reviews prove why First Choice is the leading clinic for your hair restoration journey.
          </p>

          {/* Ratings row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <GoogleLogo />
                <span className="text-white font-bold text-lg">Excellent on Google</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.8</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs">P</div>
                <span className="text-white font-bold text-lg">Excellent on Practo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">JD</div>
                <span className="text-white font-bold text-lg">Justdial Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.7</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative z-20 w-full max-w-full">
          <div className="overflow-hidden py-6 -my-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 400}px)` }}
            >
              {/* AI Summary Box */}
              <div className="w-[400px] px-3 flex flex-col flex-shrink-0">
                <div className="bg-white rounded-3xl p-6 md:p-7 shadow-2xl flex flex-col h-full border border-gray-100 relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl rounded-tl-full rounded-tr-full rounded-bl-full bg-indigo-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-500 text-base leading-tight">AI-Generated Summary</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Based on 1,055 reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <div className="w-5 h-5 overflow-hidden relative">
                      <Star className="w-5 h-5 text-gray-300 absolute" />
                      <div className="absolute left-0 top-0 overflow-hidden w-[60%]">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-4 flex-grow text-[15px] leading-snug text-gray-800">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span>Consistently high success rate and completely natural-looking hair transplants.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span>Outstanding customer support is consistently praised for responsiveness.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gray-900 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span>Hygienic clinic environment with honest, transparent, and affordable pricing.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Reviews */}
              {googleReviewsData.map((review, idx) => (
                <div key={idx} className="w-[400px] px-3 flex flex-col flex-shrink-0">
                  <div className="bg-white rounded-3xl p-6 md:p-7 shadow-2xl flex flex-col h-full border border-gray-100">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 border border-gray-100 rounded-full p-2 bg-gray-50/50">
                        <GoogleLogo />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-tight text-[15px]">{review.name}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[15px] text-gray-700 leading-snug flex-grow">
                      {review.content}
                    </p>
                    {review.images && review.images.length > 0 && (
                      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                        {review.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="rounded-xl overflow-hidden relative border border-gray-100 bg-gray-50 h-24 w-24 flex-shrink-0">
                            <img 
                              src={img} 
                              alt={`Review photo by ${review.name}`} 
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white text-gray-800 transition-colors z-20 border border-gray-100"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white text-gray-800 transition-colors z-20 border border-gray-100"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
