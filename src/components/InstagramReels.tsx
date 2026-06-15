import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { getAssetUrl } from '../lib/assets';

function ShortsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M18.12 8.56L16.42 7.6C15.42 7 14.02 7.37 13.41 8.41L12.5 10L11.58 9.48C9.9 8.5 7.74 9.11 6.76 10.82L5.8 12.5C4.83 14.18 5.44 16.34 7.15 17.32L8.85 18.29C9.85 18.89 11.25 18.52 11.86 17.48L12.77 15.93L13.72 16.47C15.4 17.45 17.56 16.84 18.54 15.13L19.5 13.43C20.47 11.72 19.86 9.56 18.12 8.56ZM10.5 14.5V9.5L14.75 12L10.5 14.5Z" 
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramReels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [playingId, setPlayingId] = useState<number | null>(null);

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
    if (isHovered || playingId !== null) return; // Pause auto-scrolling when hovered or when a video is playing
    
    const interval = setInterval(() => {
      scroll('right');
    }, 10000); // Slowed auto slide to every 10 seconds
    return () => clearInterval(interval);
  }, [isHovered, playingId]);

  const reels = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/D2oCVg1o1d8/hqdefault.jpg",
      url: "https://youtube.com/shorts/D2oCVg1o1d8?si=_QHBLkYx36bjfyhC",
      videoUrl: "",
      isYouTube: true,
      youtubeId: "D2oCVg1o1d8",
      title: "Amazing 6-Month Hair Transplant Results",
      views: "148K",
      likes: "12.4K"
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/lCDY0pnvlvA/hqdefault.jpg",
      url: "https://youtube.com/shorts/lCDY0pnvlvA?si=lNCZYVe_vbOxC3_5",
      videoUrl: "",
      isYouTube: true,
      youtubeId: "lCDY0pnvlvA",
      title: "Full Hair Restoration Transformation Journey",
      views: "95K",
      likes: "8.1K"
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/lcdwrlwSuwc/hqdefault.jpg",
      url: "https://youtube.com/shorts/lcdwrlwSuwc?si=VHNthvXhJxwmUWX0",
      videoUrl: "",
      isYouTube: true,
      youtubeId: "lcdwrlwSuwc",
      title: "Designing the Perfect Natural Hairline",
      views: "162K",
      likes: "11.7K"
    },
    {
      id: 4,
      thumbnail: "https://img.youtube.com/vi/ohN-4E8q5kk/hqdefault.jpg",
      url: "https://youtube.com/shorts/ohN-4E8q5kk?si=slOMsGYt-3Dx72NS",
      videoUrl: "",
      isYouTube: true,
      youtubeId: "ohN-4E8q5kk",
      title: "Dense Pack Hair Graft Placement Success",
      views: "118K",
      likes: "9.3K"
    },
    {
      id: 5,
      thumbnail: "https://img.youtube.com/vi/xJ530fDAJMk/hqdefault.jpg",
      url: "https://youtube.com/shorts/xJ530fDAJMk?si=44jkc-j1osiF4ahC",
      videoUrl: "",
      isYouTube: true,
      youtubeId: "xJ530fDAJMk",
      title: "Patient Review: Honest Feedback After Surgery",
      views: "18.3K",
      likes: "1.9K"
    }
  ];

  const handlePlayToggle = (reelId: number) => {
    const video = document.getElementById(`inline-reel-video-${reelId}`) as HTMLVideoElement;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => console.error("Error playing video:", err));
      setPlayingId(reelId);
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  const handleVideoPlay = (id: number) => {
    setPlayingId(id);
    // Pause other videos
    const videos = document.querySelectorAll("video");
    videos.forEach((vid) => {
      if (vid.getAttribute("id") !== `inline-reel-video-${id}`) {
        vid.pause();
      }
    });
  };

  const handleVideoPause = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="instagram-reels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Latest Patient Success Stories & Highlights
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Watch real-time result transformations, live clinic procedures, and hair restoration insights from our surgeons in our collection of quick informational videos.
          </p>
        </div>

        <div 
          className="relative -mx-4 sm:mx-0 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 px-4 sm:px-0 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => {
              const isPlaying = playingId === reel.id;
              return (
                <div 
                  key={reel.id}
                  className="relative flex-none w-[260px] sm:w-[300px] lg:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden snap-center bg-gray-900 shadow-lg border-4 border-white transition-all duration-300 hover:shadow-xl group"
                >
                  {isPlaying ? (
                    <div className="absolute inset-0 w-full h-full bg-black">
                      {reel.isYouTube ? (
                        <iframe
                          id={`inline-reel-yt-${reel.id}`}
                          src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=0&rel=0&playsinline=1&controls=1&modestbranding=1`}
                          title="YouTube Shorts player"
                          className="w-full h-full border-none"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <video 
                          id={`inline-reel-video-${reel.id}`}
                          src={getAssetUrl(reel.videoUrl)}
                          autoPlay
                          playsInline
                          loop
                          controls
                          className="w-full h-full object-cover"
                          style={{ outline: "none" }}
                          preload="auto"
                        />
                      )}
                      
                      {/* Quiet collapse close button overlay on top-right */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingId(null);
                        }}
                        className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all shadow-md border border-white/20 hover:scale-105"
                        title="Close player"
                        aria-label="Close player"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div 
                      onClick={() => setPlayingId(reel.id)}
                      className="absolute inset-0 w-full h-full cursor-pointer bg-gray-950"
                    >
                      {/* Explicitly rendered img tag guarantees thumbnail is 100% visible prior to playing */}
                      <img 
                        src={getAssetUrl(reel.thumbnail)} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt={reel.title} 
                        loading="lazy"
                      />
                      
                      {/* Beautiful Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85 opacity-90 transition-opacity pointer-events-none" />
                      
                      {/* Play Icon - Center */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 border border-white/30 shadow-2xl">
                          <svg className="w-6 h-6 text-white ml-0.5 fill-white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Header Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full text-white pointer-events-none text-[11px] font-bold border border-white/10 shadow-sm">
                        <ShortsIcon className="w-3.5 h-3.5 text-red-500" />
                        <span>Shorts</span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-12 flex flex-col gap-2 pointer-events-none">
                        <h4 className="text-white font-bold text-sm sm:text-base line-clamp-2 leading-snug drop-shadow text-left">
                          {reel.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/15">
                          <div className="flex items-center gap-1.5 text-gray-200">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                               <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="font-semibold text-xs">{reel.views} views</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-200">
                            <svg className="w-3.5 h-3.5 text-red-500 fill-red-500" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span className="font-semibold text-xs drop-shadow-md">{reel.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
