import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="بوابة الغربية" className="h-12 md:h-16" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8" dir="rtl">
            <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
              الرئيسية
            </Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
              من نحن
            </Link>
            <Link to="/services" className="text-foreground hover:text-accent transition-colors font-medium">
              خدماتنا
            </Link>
            <Link to="/blog" className="text-foreground hover:text-accent transition-colors font-medium">
              المدونة
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
              تواصل معنا
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
