import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex-shrink-0 flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                FC
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">First Choice</span>
                <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase">Hair & Cosmetics</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Dedicated to giving you a head full of hair and a renewed sense of confidence. Combining artistry with medical precision.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">ig</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">yt</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Treatments & Services</a></li>
              <li><a href="#calculator" className="text-gray-400 hover:text-white transition-colors">Graft Needs Calculator</a></li>
              <li><a href="#success-stories" className="text-gray-400 hover:text-white transition-colors">Patient Gallery</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-white transition-colors">Book an Appointment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  #7, First Floor, Phase 1 Road, Main Market,<br/>
                  Urban Estate Dugri, Ludhiana, Punjab 141003
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <a href="tel:7087020202" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                  7087 02 02 02
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <a href="mailto:care@fchtc.in" className="text-gray-400 hover:text-white transition-colors">
                  care@fchtc.in
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} First Choice Hair Transplant & Cosmetics. All rights reserved.</p>
          <p>
            Made with dedication for our patients.
          </p>
        </div>
      </div>
    </footer>
  );
}
