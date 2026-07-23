import maleHairTransplant from "../assets/images/male-hair-transplant.jpg";
import femaleHairTransplant from "../assets/images/female-hair-transplant.jpg";
import recedingHairlineReconstruction from "../assets/images/receding-hairline-reconstruction.jpg";
import beardTransplant from "../assets/images/beard-transplant.jpg";

const services = [
  {
    title: "Male Hair Transplant",
    image: maleHairTransplant
  },
  {
    title: "Female Hair Transplantation",
    image: femaleHairTransplant
  },
  {
    title: "Receding Hairline Reconstruction",
    image: recedingHairlineReconstruction
  },
  {
    title: "Beard Hair Transplant",
    image: beardTransplant
  }
];

export function Services() {
  return (
    <section className="py-24 bg-emerald-50" id="our-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Hair Transplant Services
          </h2>
          <p className="text-gray-600 text-lg">
            At First Choice, we provide advanced hair restoration and hair transplant services, where we aim to redefine your confidence by restoring not just your hair but your youthful vitality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col p-2 sm:p-4 pb-4 sm:pb-6">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 sm:mb-5 relative bg-emerald-50">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Hair Transplant in Ludhiana`} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 text-center px-1 sm:px-2 leading-tight group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
