import { Phone, Calendar } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
              FC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">First Choice</span>
              <span className="text-xs text-blue-600 font-semibold tracking-wider uppercase">Hair Transplant & Cosmetics</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#calculator" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Graft Calculator</a>
            <a href="#success-stories" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Results</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:7087020202" 
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              7087 02 02 02
            </a>
            <a href="#book" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
              <Calendar className="w-4 h-4" />
              Book Free Consult
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
