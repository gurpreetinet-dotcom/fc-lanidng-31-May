import { Stethoscope, Users, IndianRupee, Sparkles, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "10+ Years Experience",
    description: "Operated by a highly qualified MBBS, MS Surgeon specializing in advanced hair restoration procedures."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "1000+ Happy Patients",
    description: "A proven track record of successful procedures with natural-looking dense results."
  },
  {
    icon: <IndianRupee className="w-8 h-8 text-blue-600" />,
    title: "Affordable Transparency",
    description: "Premium hair transplant starting at just ₹29,999 with simple, easy EMI options."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: "Advanced Technology",
    description: "Utilizing the latest FUE & FUT methods for maximum graft survival and zero scarring."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Fast Recovery",
    description: "Minimally invasive techniques ensuring you can return to normal routine quickly."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Assured Results",
    description: "Dedicated post-operative care and detailed guidance for 100% natural growth."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose First Choice?
          </h2>
          <p className="text-gray-600 text-lg">
            We combine medical excellence with artistic precision to give you the perfect hairline and natural density.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
