import { Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-8 z-50 flex flex-col gap-4">
      <a 
        href="tel:7087020202" 
        className="w-14 h-14 bg-emerald-600 rounded-full shadow-lg shadow-emerald-500/50 flex justify-center items-center hover:bg-emerald-700 hover:scale-110 transition-all duration-300 group border border-emerald-500"
        title="Call Us"
      >
        <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </a>
      <a 
        href="https://wa.me/917087020202"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/50 flex justify-center items-center hover:bg-[#20b858] hover:scale-110 transition-all duration-300 group border border-[#25D366]"
        title="WhatsApp Us"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current group-hover:scale-110 transition-transform">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.551 4.148 1.558 5.96L.182 24l6.166-1.547a11.97 11.97 0 0 0 5.683 1.428h.004c6.645 0 12.03-5.386 12.03-12.03 0-3.218-1.253-6.244-3.53-8.528A11.968 11.968 0 0 0 12.031 0zm0 21.847h-.002a9.943 9.943 0 0 1-5.074-1.385l-.364-.216-3.771.946.963-3.666-.237-.377a9.953 9.953 0 0 1-1.52-5.303c0-5.513 4.485-9.998 9.998-9.998 2.673 0 5.185 1.042 7.073 2.932 1.89 1.89 2.93 4.4 2.93 7.074 0 5.51-4.483 9.993-9.994 9.993zm5.485-7.487c-.3-.15-1.782-.876-2.059-.977-.276-.1-.476-.15-.677.15-.2.301-.778.977-.954 1.178-.175.2-.35.226-.65.076-1.218-.609-2.3-1.272-3.262-2.316-.745-.812-1.246-1.815-1.396-2.066-.15-.251-.016-.387.135-.536.134-.135.301-.351.45-.527.151-.176.202-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.927-2.23-.243-.585-.49-.505-.677-.514-.175-.008-.376-.008-.576-.008-.2 0-.527.075-.802.376-.275.3-1.053 1.028-1.053 2.507 0 1.48 1.077 2.91 1.228 3.111.15.201 2.122 3.238 5.143 4.542 1.83 1.077 2.164.887 2.56.887.65 0 2.1-.85 2.39-1.666.29-.816.29-1.516.202-1.666-.089-.15-.315-.226-.615-.376z"/>
        </svg>
      </a>
    </div>
  );
}
