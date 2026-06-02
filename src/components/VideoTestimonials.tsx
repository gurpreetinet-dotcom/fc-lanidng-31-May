import { Play } from "lucide-react";

export function VideoTestimonials() {
  const videos = [
    {
      id: 1,
      title: "My Hair Transplant Journey at First Choice",
      thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
      patient: "John D.",
      treatment: "FUE Transplant - 3500 Grafts",
    },
    {
      id: 2,
      title: "Life-changing Results After 6 Months",
      thumbnail: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
      patient: "Michael S.",
      treatment: "FUE Transplant - 4000 Grafts",
    },
    {
      id: 3,
      title: "Why I Chose First Choice Clinics",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      patient: "David R.",
      treatment: "PRP Therapy & FUE - 2500 Grafts",
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100" id="video-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Patient Stories</span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real Videos, Real Results
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear directly from our patients about their life-changing hair restoration journeys with First Choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/5] relative bg-gray-200 overflow-hidden cursor-pointer">
                {/* Thumbnail Image */}
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Component */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent pointer-events-none" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/40">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-emerald-600 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                  <h3 className="font-bold text-lg leading-tight mb-1">{video.title}</h3>
                  <div className="flex flex-col gap-1 text-sm text-gray-200">
                    <span className="font-medium text-emerald-300">{video.patient}</span>
                    <span className="text-xs opacity-80">{video.treatment}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all">
            Watch More Stories
          </button>
        </div>
      </div>
    </section>
  );
}
