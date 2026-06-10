import { Phone, Calendar } from "lucide-react";
import logoPng from "../assets/images/logo.png";

export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <img src={logoPng} alt="First Choice" className="h-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">First Choice</span>
                <span className="text-xs text-emerald-600 font-semibold tracking-wider uppercase">Hair Transplant & Cosmetics</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#calculator" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Graft Calculator</a>
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
              <a href="#book" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Book Free Consult</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
