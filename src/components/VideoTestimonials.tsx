import { Play } from "lucide-react";

export function VideoTestimonials() {
  const videos = [
    {
      id: 1,
      title: "Hair Transplant Testimonial 1",
      youtubeId: "-5VBjKmPQrA",
    },
    {
      id: 2,
      title: "Hair Transplant Testimonial 2",
      youtubeId: "1K_pa_s5-mg",
    },
    {
      id: 3,
      title: "Hair Transplant Testimonial 3",
      youtubeId: "GNEtG2FFdkA",
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
              <div className="aspect-video relative bg-gray-200 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@firstchoicehairtransplantc2918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all"
          >
            Watch More Stories
          </a>
        </div>
      </div>
    </section>
  );
}

