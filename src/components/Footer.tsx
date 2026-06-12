import { MapPin, Phone, Mail } from "lucide-react";
import logoPng from "../assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex-shrink-0 flex items-center gap-2 mb-6">
              <img src={logoPng} alt="First Choice" className="h-10 object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">First Choice</span>
                <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">Hair Transplant & Cosmetics</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Dedicated to giving you a head full of hair and a renewed sense of confidence. Combining artistry with medical precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              <a href="#results" className="text-gray-400 hover:text-white transition-colors text-sm">Patient Gallery</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Why Choose Us</a>
              <a href="#video-testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Video Testimonials</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
              <a href="#our-services" className="text-gray-400 hover:text-white transition-colors text-sm">Treatments & Services</a>
              <a href="#instagram-reels" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram Reels</a>
              <a href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm">Patient Reviews</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
              <a href="#location" className="text-gray-400 hover:text-white transition-colors text-sm">Clinic Location</a>
              <a href="#book" className="text-gray-400 hover:text-white transition-colors text-sm">Book an Appointment</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  #7, First Floor, Phase 1 Market,<br/>
                  Urban Estate Dugri, Ludhiana, Punjab 141003
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <a href="tel:7087020202" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                  7087 02 02 02
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <a href="mailto:care@fchtc.in" className="text-gray-400 hover:text-white transition-colors">
                  care@fchtc.in
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} First Choice Hair Transplant & Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
