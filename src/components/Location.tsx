import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 bg-gray-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 text-lg">
            Conveniently located to serve you with world-class hair restoration facilities.
          </p>
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
