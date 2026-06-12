/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { GoogleReviews } from './components/GoogleReviews';
import { VideoTestimonials } from './components/VideoTestimonials';
import { InstagramReels } from './components/InstagramReels';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { PromoPopup } from './components/PromoPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth selection:bg-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BeforeAfterSlider />
        <Features />
        <VideoTestimonials />
        <Process />
        <Services />
        <InstagramReels />
        <GoogleReviews />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingContact />
      <PromoPopup />
      
      {/* Floating CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="#book" 
          className="flex justify-center items-center w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold shadow-lg"
        >
          Book Consultation Now
        </a>
      </div>
    </div>
  );
}
