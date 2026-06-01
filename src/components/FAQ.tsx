import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "Is the hair transplant procedure painful?",
      a: "The procedure is performed under local anesthesia, meaning you won't feel pain during the surgical extraction and implantation. Most patients watch TV, listen to music, or even nap during the process. Mild discomfort during the initial anesthesia injections is normal but very brief."
    },
    {
      q: "How long does it take to see the final results?",
      a: "Hair growth is a gradual process. The transplanted hairs typically shed within the first 3-4 weeks (shock loss). New hair growth begins around month 3 or 4. By month 6-7, you will see about 60-70% growth, and the final, mature results are visible generally around 12 to 14 months."
    },
    {
      q: "Are the results permanent?",
      a: "Yes. The hair follicles extracted from the donor area (usually the back of the head) are genetically resistant to DHT, the hormone responsible for male pattern baldness. Once implanted, these hairs continue to grow for a lifetime."
    },
    {
      q: "Will there be any visible scarring?",
      a: "With advanced FUE (Follicular Unit Extraction) techniques, we extract follicles individually using a micro-punch. This leaves tiny dot-like scars that are virtually undetectable once your hair grows out, even if you wear your hair very short."
    },
    {
      q: "Can I avail EMI options for the ₹34,999/- offer?",
      a: "Absolutely! We offer flexible and easy EMI options to make your hair restoration journey perfectly affordable. You can discuss the payment plans during your free consultation."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common concerns about hair transplant procedures.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
              >
                <span className="font-bold text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 text-gray-600 ${
                  openIdx === idx ? "max-h-64 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
