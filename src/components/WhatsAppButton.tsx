import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966557346167"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] p-4 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="تواصل عبر واتساب"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
