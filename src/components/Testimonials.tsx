import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sahil (Rampura Phul)",
      grafts: "6000",
      quote: "A Hair Transplant doesn't give immediate results. Hairs have to be taken and implanted, and roots take some time. After 7-8 months of immense patience, the results are simply mind-blowing!",
      rating: 5
    },
    {
      name: "Gurpreet",
      grafts: "3500",
      quote: "A very good & supporting staff. I was assisted by their consultant SHIVANI. She was really helpful in giving me proper knowledge & guidance about the hair transplant process and cost. Highly recommended.",
      rating: 5
    },
    {
      name: "Suhail",
      grafts: "4200",
      quote: "First Choice Clinic has changed my life for good. I now go out and have a fulfilling social life. The surgeon is really experienced and the best in the business. Will refer all friends to you.",
      rating: 5
    },
    {
      name: "Narinder",
      grafts: "2800",
      quote: "Excellent experience with the Doctors, the team is very warm & do an excellent job making you feel comfortable. Anyone looking at their services, need not look ahead.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white" id="success-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Patient Success Stories & Testimonials
          </h2>
          <p className="text-gray-600 text-lg">
            We love sharing our patients' success stories after they have gone through a transformational hair transplant journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100">
              <Quote className="w-10 h-10 text-blue-100 absolute top-8 left-8 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium text-lg italic mb-6">
                  "{test.quote}"
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="font-bold text-gray-900">{test.name}</h4>
                    <p className="text-sm font-medium text-blue-600">{test.grafts ? `${test.grafts} Grafts Implanted` : "Patient"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Placeholder Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Watch Patient Video Testimonials</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              See actual timeline progression from baldness to full natural hair growth directly from our happy patients.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((v) => (
                <div key={v} className="aspect-video bg-gray-800 rounded-xl relative group cursor-pointer overflow-hidden border border-gray-700">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 transition-transform">
                      <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
