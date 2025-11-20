import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import certificationBadge from "@/assets/certifications/certification-badge.png";
import saudiBusinessCenter from "@/assets/certifications/saudi-business-center.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Certifications Section */}
        <div className="mb-12 text-center" dir="rtl">
          <h3 className="font-bold text-lg mb-6">شركاؤنا ومبادراتنا</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center justify-center h-20 md:h-24">
              <div className="text-2xl md:text-3xl font-bold mb-1">رؤية المملكة</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">2030</div>
            </div>
            <img 
              src={certificationBadge} 
              alt="شهادة معتمدة" 
              className="h-20 md:h-24 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <img 
              src={saudiBusinessCenter} 
              alt="المركز السعودي للأعمال" 
              className="h-20 md:h-24 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8" dir="rtl">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="بوابة الغربية" className="h-12 md:h-16 mb-4 brightness-0 invert" />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">الروابط</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">من نحن</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">خدماتنا</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">المدونة</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><Link to="/services/seo" className="hover:text-accent transition-colors">تحسين محركات البحث</Link></li>
              <li><Link to="/services/ads" className="hover:text-accent transition-colors">حملات إعلانية</Link></li>
              <li><Link to="/services/photography" className="hover:text-accent transition-colors">تصوير إبداعي</Link></li>
              <li><Link to="/services/design" className="hover:text-accent transition-colors">تصاميم احترافية</Link></li>
              <li><Link to="/services/development" className="hover:text-accent transition-colors">برمجة المواقع</Link></li>
              <li><Link to="/services/social-media" className="hover:text-accent transition-colors">إدارة منصات التواصل</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <p className="mb-2 text-sm">المملكة العربية السعودية - جدة - حي الصفا - شارع التحلية</p>
            <div className="space-y-2 mt-4">
              <p className="text-sm">واتساب:</p>
              <a 
                href="https://wa.me/966557346167" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-colors text-center"
                dir="ltr"
              >
                +966 55 734 6167
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p>&copy; 2024 بوابة الغربية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
