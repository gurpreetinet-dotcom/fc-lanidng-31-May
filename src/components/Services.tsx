import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Male Hair Transplant",
    image: "/male-hair-transplant.jpg"
  },
  {
    title: "Female Hair Transplantation",
    image: "/female-hair-transplant.jpg"
  },
  {
    title: "Receding Hairline Reconstruction",
    image: "/receding-hairline-reconstruction.jpg"
  },
  {
    title: "Beard Hair Transplant",
    image: "/beard-transplant.jpg"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-white" id="our-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              At First Choice, we provide advanced hair restoration and hair transplant services, where we aim to redefine your confidence by restoring not just your hair but your youthful vitality.
            </p>
          </div>
          <div className="shrink-0 mb-2 lg:mb-0">
            <a href="#book" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg shadow-emerald-600/20 transform hover:-translate-y-0.5">
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col p-3 sm:p-4 pb-6">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 relative bg-emerald-50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center px-2 leading-tight group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
