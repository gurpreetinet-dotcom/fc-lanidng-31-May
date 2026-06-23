import React, { useState, useEffect } from "react";
import { X, Sparkles, Check, Flame, Clock, Loader2, Phone, User, MapPin } from "lucide-react";
import { getAssetUrl } from '../lib/assets';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10 minute ticking countdown inside the popup

  // Trigger popup after exactly 10 seconds of page load
  useEffect(() => {
    // Check if user has already dismissed or successfully filled the form in this session
    const completedOrDismissed = sessionStorage.getItem("promo_popup_interacted");
    if (completedOrDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // 20,000 ms = 20 seconds

    return () => clearTimeout(timer);
  }, []);

  // Popup interior ticking timer for artificial urgency
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promo_popup_interacted", "dismissed");
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(remainingSecs).padStart(2, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("city", formData.city || "Website Promo Visitor");

      let hasError = false;

      // 1. Submit to Google Sheets (Webhook)
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwNh_-Rwxqi7r2qrJpuVkxxwLpJ8iAJBMxXCSZdk37dCmA3MkcgplmJcKP7_GJioTwlSg/exec?gid=0",
          {
            method: "POST",
            body: data,
            mode: "no-cors",
          }
        );
      } catch (error) {
        console.error("Google Sheets submission error:", error);
        hasError = true;
      }

      // 2. Submit to Email via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/gurpreet.inet@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "PROMO POPUP: ₹34,999 Hair Transplant Claim",
            _cc: "mails2gagan.bagga@gmail.com",
            Name: formData.name,
            Phone: formData.phone,
            City: formData.city || "Not Provided",
            Offer: "₹34,999 Special FUE Deal (up to 2500 Grafts)",
          }),
        });
      } catch (error) {
        console.error("FormSubmit email error:", error);
      }

      if (hasError) {
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", city: "" });
        sessionStorage.setItem("promo_popup_interacted", "claimed");
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="promo-popup-overlay"
      className="fixed inset-0 bg-gray-950/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="promo-popup-card"
        className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-emerald-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] my-auto animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Dismiss Button */}
        <button
          id="promo-popup-close-btn"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full z-10"
          aria-label="Close promotion"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-12">
          {/* Left Side: Image & Highlight banner */}
          <div className="md:col-span-5 relative bg-gray-900 min-h-[350px] md:min-h-full flex flex-col justify-end p-6 md:p-8 overflow-hidden">
            {/* Promo Image */}
            <img 
              src={getAssetUrl("/pop-up.jpg")} 
              alt="Hair Transplant Offer" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if the user hasn't uploaded popup-promo.jpg yet
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1620330101683-1994645065a7?auto=format&fit=crop&q=80&w=600";
              }}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-transparent"></div>
            
            <div className="relative z-10 mt-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white font-extrabold text-[10px] uppercase tracking-wider mb-4 shadow-lg shadow-rose-500/30 animate-pulse">
                <Sparkles className="w-3 h-3 text-white" />
                Limited Time Offer
              </div>

              <div className="bg-gradient-to-br from-amber-300 to-yellow-500 text-gray-900 rounded-2xl p-5 mb-5 shadow-2xl transform -rotate-2 relative overflow-hidden ring-4 ring-yellow-500/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/4"></div>
                
                <span className="block text-xs font-black uppercase tracking-widest text-amber-900/80 mb-1">Flat Rate</span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none drop-shadow-sm flex items-start">
                  <span className="text-2xl mt-1 mr-1 font-bold">₹</span>34,999
                </h3>
              </div>
              
              <div className="space-y-2.5 text-sm font-medium text-white/90">
                <div className="flex items-center gap-2 drop-shadow">
                  <div className="bg-emerald-500/20 p-1.5 rounded-full"><Check className="w-3 h-3 text-emerald-400 stroke-[3]" /></div>
                  <span>Up to <strong>2,500 FUE Grafts</strong></span>
                </div>
                <div className="flex items-center gap-2 drop-shadow">
                  <div className="bg-emerald-500/20 p-1.5 rounded-full"><Check className="w-3 h-3 text-emerald-400 stroke-[3]" /></div>
                  <span><strong>2 Free PRP</strong> Sessions Included</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wide">
                  <Flame className="w-4 h-4 fill-current animate-bounce" />
                  <span>Reserved for next 15 patients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Lead submission form */}
          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                Anniversary Special
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
                Claim Your Offer Now
              </h2>
              <p className="text-sm text-gray-500">
                Save ₹20,001 on your hair transplant today.
              </p>
            </div>


            {submitStatus === "success" ? (
              <div className="py-8 text-center space-y-3" id="promo-success-msg">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 scale-110">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Offer Locked Successfully!</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Our clinical consultant will call you shortly on your provided number to schedule your free diagnostic assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="promo-popup-form">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1" htmlFor="promo-name">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      required
                      type="text"
                      id="promo-name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1" htmlFor="promo-phone">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      required
                      type="tel"
                      id="promo-phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1" htmlFor="promo-city">
                    Your City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      id="promo-city"
                      placeholder="e.g. Ludhiana, Jalandhar"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-inner"
                    />
                  </div>
                </div>

                {submitStatus === "error" && (
                  <p className="text-[11px] text-rose-500 font-bold" id="promo-error-msg">
                    Something went wrong. Please check your network and try again.
                  </p>
                )}

                <div className="pt-2">
                  <button
                    id="promo-submit-btn"
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/70 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/20 active:translate-y-[1px] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Securing Promo Slot...
                      </>
                    ) : (
                      <>
                        Claim Special ₹34,999 Offer
                      </>
                    )}
                  </button>
                </div>

                {/* Micro-timer for urgency */}
                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-amber-600 bg-amber-50 rounded-lg py-2 border border-amber-100">
                  <Clock className="w-3.5 h-3.5 animate-pulse text-amber-500" />
                  <span>Promo cart expires in {formatTimer(secondsRemaining)} mins</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
