import { MapPin, Phone, Clock, ShieldCheck, Sparkles, Award } from "lucide-react";
import lobbyImg from "../assets/images/clinic_lobby_1781472160359.jpg";
import treatmentImg from "../assets/images/clinic_treatment_1781472177370.jpg";
import consultationImg from "../assets/images/clinic_consultation_1781472193235.jpg";

export function Location() {
  const facilityPics = [
    {
      img: lobbyImg,
      title: "Luxury Reception & Lounge",
      desc: "A warm, premium welcoming space designed for complete comfort and peace of mind.",
      tag: "5-Star Comfort",
      icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
    },
    {
      img: consultationImg,
      title: "Private Consultation Suites",
      desc: "Confidential and professional diagnostic spaces equipped with state-of-the-art hair scanners.",
      tag: "Private & Digital",
      icon: <Award className="w-4 h-4 text-emerald-500" />,
    },
    {
      img: treatmentImg,
      title: "Advanced Sterile Procedure Rooms",
      desc: "Fully equipped with international standard surgical equipment and micro-grafting modules.",
      tag: "100% Sterile",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 text-lg">
            Experience premium care at our state-of-the-art hair restoration facilities.
          </p>
        </div>

        {/* Collage Gallery Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Featured Image - Lobby Reception */}
            <div className="col-span-1 md:col-span-7 h-[350px] md:h-[500px] group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative">
              <div className="absolute inset-0">
                <img 
                  src={facilityPics[0].img} 
                  alt={facilityPics[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              </div>

              {/* Tag overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md z-10">
                {facilityPics[0].icon}
                <span className="text-xs font-bold text-gray-900">{facilityPics[0].tag}</span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white">
                <h3 className="font-extrabold text-2xl md:text-3xl mb-2 text-white leading-tight">
                  {facilityPics[0].title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed">
                  {facilityPics[0].desc}
                </p>
              </div>
            </div>

            {/* Side Stacked Images */}
            <div className="col-span-1 md:col-span-5 flex flex-col gap-6 h-auto md:h-[500px]">
              {facilityPics.slice(1).map((pic, idx) => (
                <div 
                  key={idx} 
                  id={`clinic-facility-side-${idx}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex-1 flex flex-col relative min-h-[220px]"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={pic.img} 
                      alt={pic.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                  </div>

                  {/* Tag overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md z-10">
                    {pic.icon}
                    <span className="text-xs font-bold text-gray-900">{pic.tag}</span>
                  </div>

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                    <h3 className="font-extrabold text-lg md:text-xl mb-1 text-white leading-tight">
                      {pic.title}
                    </h3>
                    <p className="text-gray-200 text-xs md:text-sm max-w-md leading-relaxed opacity-90">
                      {pic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px] md:h-[500px] relative z-10">
            <iframe 
              src="https://maps.google.com/maps?q=First+Choice+Hair+Transplant+Clinic+Ludhiana&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="First Choice Hair Transplant Location"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-8 h-full">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinic Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      #7, First Floor, Phase 1 Market,<br />
                      Urban Estate Dugri, Ludhiana, Punjab 141003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600 leading-relaxed text-sm mb-2">
                      Call us for a free consultation
                    </p>
                    <a href="tel:+917087020202" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">
                      +91 70870 20202
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Mon - Sunday: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-8 border-t border-gray-100">
              <a href="#book" className="block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold rounded-xl transition-colors shadow-md shadow-emerald-600/20">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
