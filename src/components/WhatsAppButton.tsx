import whatsappIcon from "@/assets/whatsapp-icon-white.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966557346167"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none group"
      aria-label="تواصل عبر واتساب"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" 
      />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
