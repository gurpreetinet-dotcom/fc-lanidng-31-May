import { MapPin, Phone, Clock, ShieldCheck, Sparkles, Award, Heart, Cpu, Eye, Microscope, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export function Location() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const facilityPics = [
    {
      img: "/clinic1.jpg",
      title: "Clinical Lobby & Lounge",
      desc: "Premium, modern welcoming lounge designed for complete client comfort.",
      tag: "5-Star Lounge",
      icon: <Sparkles className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic2.jpg",
      title: "VIP Consultation Suite",
      desc: "Private consultation spaces for customized diagnostic evaluation.",
      tag: "100% Private",
      icon: <Award className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic3.jpg",
      title: "Sterile Procedure Room",
      desc: "Fully equipped sterile rooms for advanced micro-grafting.",
      tag: "Medical Safety",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic4.jpg",
      title: "Digital Follicle Diagnostics",
      desc: "Advanced scalp analysis and precise assessment scanners.",
      tag: "Advanced Tech",
      icon: <Cpu className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic5.jpg",
      title: "Luxury Recovery Suite",
      desc: "Comfortable recovery spaces configured with peaceful lounges.",
      tag: "Rest & Recover",
      icon: <Heart className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic6.jpg",
      title: "Microscopic Prep Hub",
      desc: "Digital stereomicroscopes for ultra-precise graft dissection.",
      tag: "Graft Precision",
      icon: <Microscope className="w-4 h-4 text-emerald-600" />,
    },
    {
      img: "/clinic7.jpg",
      title: "Premium Gallery Corridor",
      desc: "Immaculate architectural detailing representing clinical excellence.",
      tag: "World Class Stand",
      icon: <Eye className="w-4 h-4 text-emerald-600" />,
    },
  ];

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % facilityPics.length : null));
  };
  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + facilityPics.length) % facilityPics.length : null));
  };

  return (
    <section className="py-24 bg-gray-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            State-of-the-Art Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            Experience premium care at our advanced clinic environment.
          </p>
        </div>

        {/* 2-Column Collage Layout inspired by user reference */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-1.5 sm:p-2 md:p-3 shadow-lg border border-gray-200">
            <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 h-[380px] sm:h-[500px] md:h-[650px] w-full">
              
              {/* Left Column (3 images) */}
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 flex-[1]">
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(0)}
                >
                  <img src={facilityPics[0].img} alt={facilityPics[0].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(1)}
                >
                  <img src={facilityPics[1].img} alt={facilityPics[1].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(2)}
                >
                  <img src={facilityPics[2].img} alt={facilityPics[2].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

              {/* Right Column (4 images) */}
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 flex-[1]">
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(3)}
                >
                  <img src={facilityPics[3].img} alt={facilityPics[3].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(4)}
                >
                  <img src={facilityPics[4].img} alt={facilityPics[4].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(5)}
                >
                  <img src={facilityPics[5].img} alt={facilityPics[5].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div 
                  className="flex-[1] overflow-hidden rounded-sm cursor-pointer group relative"
                  onClick={() => openLightbox(6)}
                >
                  <img src={facilityPics[6].img} alt={facilityPics[6].title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all focus:outline-none"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <X className="w-6 h-6" />
          </button>

          <button 
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all focus:outline-none z-10"
            onClick={prevLightbox}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center pointer-events-none"
          >
            <img 
              key={lightboxIndex}
              src={facilityPics[lightboxIndex].img} 
              alt={facilityPics[lightboxIndex].title} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl pointer-events-auto select-none"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button 
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all focus:outline-none z-10"
            onClick={nextLightbox}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
