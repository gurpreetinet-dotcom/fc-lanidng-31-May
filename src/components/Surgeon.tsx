import React from 'react';

export function Surgeon() {
  return (
    <section className="py-16 md:py-24 bg-white" id="surgeon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-[2rem] overflow-hidden shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/12 flex justify-center p-8 md:p-12">
             <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-white flex-shrink-0">
               <img 
                 src="/dr-jatin-goyal.png" 
                 alt="Dr. Jatin - Hair Transplant Surgeon" 
                 className="w-full h-full object-cover" 
                 onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.png')) {
                      target.src = '/dr-jatin.jpg';
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = '/dr-jatin.jpeg';
                    } else {
                      target.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400";
                    }
                 }}
               />
             </div>
          </div>
          <div className="w-full md:w-7/12 p-8 md:p-12 md:pl-0 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 font-semibold rounded-full text-sm tracking-wide uppercase mb-4">
              Meet The Expert
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Hair Transplant Surgeon</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-600 mb-6">Dr. Jatin <span className="text-lg text-gray-500 font-medium">(MBBS, MS, FMAS)</span></h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Our experienced Hair Transplant Surgeon Dr. Jatin (MBBS, MS, FMAS) works with a skilled and trained team with Trichologists who are experts in the field of Cosmetology and Trichology. With their proven experience, you can be confident your hair loss or baldness is in the best hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
