import { Instagram, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import reel1 from "../assets/images/reel1.mp4";
import reel2 from "../assets/images/reel2.mp4";
import reel3 from "../assets/images/reel3.mp4";
import reel4 from "../assets/images/reel4.mp4";
import reel5 from "../assets/images/reel5.mp4";

export function InstagramReels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeReelId, setActiveReelId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollAmount = window.innerWidth > 768 ? 600 : (clientWidth * 0.8);
      
      let targetScrollLeft = scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      // Loop back if reaching the end
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
        targetScrollLeft = 0;
      } else if (direction === 'left' && scrollLeft <= 0) {
        targetScrollLeft = scrollWidth - clientWidth;
      }

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (activeReelId || isHovered) return; // Pause auto-scrolling when a reel is open or hovered
    
    const interval = setInterval(() => {
      scroll('right');
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [activeReelId, isHovered]);

  const reels = [
    {
      id: 1,
      thumbnail: "/reel1-thumb.png",
      url: "https://www.instagram.com/reel/DEHrjt2yGtL/",
      videoUrl: reel1,
      views: "12.5K",
      likes: "1.2K"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=711",
      url: "https://www.instagram.com/fchtc.in",
      videoUrl: reel2,
      views: "8.3K",
      likes: "856"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=711",
      url: "https://www.instagram.com/fchtc.in",
      videoUrl: reel3,
      views: "24.1K",
      likes: "3.4K"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=711",
      url: "https://www.instagram.com/fchtc.in",
      videoUrl: reel4,
      views: "15.7K",
      likes: "2.1K"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=711",
      url: "https://www.instagram.com/reel/DPLvaufEvAE/",
      videoUrl: reel5,
      views: "45.2K",
      likes: "5.8K"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="instagram-reels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 text-pink-600 rounded-full text-sm font-bold tracking-wider mb-4 border border-pink-100 shadow-sm">
              <Instagram className="w-4 h-4" />
              <span>@fchtc.in</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Our Journey on Instagram
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Watch real transformation stories, behind-the-scenes clinic footage, and expert advice from our doctors on our Instagram reels.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://www.instagram.com/fchtc.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us
            </a>
          </div>
        </div>

        <div 
          className="relative -mx-4 sm:mx-0 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 transition-colors bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-0 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <div 
                key={reel.id}
                onClick={() => {
                  if (!activeReelId) {
                    setActiveReelId(reel.id);
                  }
                }}
                className={`relative flex-none w-[260px] sm:w-[300px] lg:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden group snap-center bg-gray-100 shadow-lg border-4 border-white transition-all duration-300 ${activeReelId !== reel.id ? 'hover:-translate-y-2 hover:shadow-2xl hover:border-pink-50 cursor-pointer' : ''} text-left`}
              >
               {activeReelId === reel.id ? (
                  <div className="absolute inset-0 w-full h-full bg-black z-20 flex flex-col">
                     <div className="flex justify-end p-2 absolute top-0 right-0 z-30">
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           setActiveReelId(null);
                         }}
                         className="w-8 h-8 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                       >
                         <X className="w-5 h-5" />
                       </button>
                     </div>
                     {reel.videoUrl ? (
                         <video 
                           src={reel.videoUrl}
                           type="video/mp4"
                           autoPlay 
                           controls
                           playsInline
                           className="w-full h-full object-contain bg-black"
                           onClick={(e) => e.stopPropagation()}
                         >
                           Your browser does not support the video tag.
                         </video>
                     ) : (
                         <div className="relative w-full h-full bg-black overflow-hidden pointer-events-auto">
                           <iframe 
                              src={`${reel.url}embed`} 
                              frameBorder="0" 
                              scrolling="no" 
                              allowTransparency={true}
                              allow="encrypted-media"
                              className="absolute z-10 w-[110%] h-[125%] max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.1]"
                            ></iframe>
                         </div>
                     )}
                  </div>
                ) : null}

                {(reel.id === 5 || reel.id === 1) && reel.videoUrl ? (
                  <video 
                    src={reel.videoUrl} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={reel.thumbnail} 
                    alt="Instagram Reel" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Play Icon - Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 border border-white/40 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Play className="w-3.5 h-3.5" />
                      <span className="font-semibold text-sm">{reel.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-pink-500 fill-pink-500" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="font-semibold text-sm shadow-sm">{reel.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
