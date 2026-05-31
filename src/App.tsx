/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Calculator />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="#book" 
          className="flex justify-center items-center w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg"
        >
          Book Consultation Now
        </a>
      </div>
    </div>
  );
}
