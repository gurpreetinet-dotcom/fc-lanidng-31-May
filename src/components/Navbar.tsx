import { Phone, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import logoPng from "../assets/images/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src={logoPng} alt="First Choice Hair Transplant Ludhiana Logo" className="h-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">First Choice</span>
                <span className="text-xs text-emerald-600 font-semibold tracking-wider uppercase">Hair Transplant & Cosmetics</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#our-services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#video-testimonials" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Success Stories</a>
              <a href="#results" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Results</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="tel:7087020202" 
                className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors mr-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                7087 02 02 02
              </a>
              <a href="#book" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
                <Calendar className="w-4 h-4" />
                <span>Book Free Consult</span>
              </a>
              
              <button 
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'} bg-white border-b border-gray-100 shadow-md absolute w-full left-0 right-0 top-20`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#home" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Home</a>
            <a href="#results" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Patient Gallery</a>
            <a href="#services" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Why Choose Us</a>
            <a href="#video-testimonials" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Video Testimonials</a>
            <a href="#how-it-works" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">How It Works</a>
            <a href="#our-services" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Treatments & Services</a>
            <a href="#instagram-reels" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Youtube Shots</a>
            <a href="#reviews" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Patient Reviews</a>
            <a href="#faq" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">FAQ</a>
            <a href="#location" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-600">Clinic Location</a>
            <a href="#book" onClick={closeMenu} className="block px-3 py-2 mt-4 text-center rounded-xl bg-emerald-600 text-white font-bold shadow-md">Book an Appointment</a>
            <a href="tel:+917087020202" onClick={closeMenu} className="block px-3 py-2 mt-3 text-center rounded-xl border border-emerald-600 text-emerald-600 font-bold shadow-sm">Call Now: +91 7087 02 02 02</a>
          </div>
        </div>
      </nav>
    </>
  );
}
