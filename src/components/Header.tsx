import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

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
            <Link to="/portfolio" className="text-foreground hover:text-accent transition-colors font-medium">
              معرض الأعمال
            </Link>
            <Link to="/blog" className="text-foreground hover:text-accent transition-colors font-medium">
              المدونة
            </Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
              تواصل معنا
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-4 mt-8" dir="rtl">
                <Link 
                  to="/" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  الرئيسية
                </Link>
                <Link 
                  to="/about" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  من نحن
                </Link>
                <Link 
                  to="/services" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  خدماتنا
                </Link>
                <Link 
                  to="/portfolio" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  معرض الأعمال
                </Link>
                <Link 
                  to="/blog" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  المدونة
                </Link>
                <Link 
                  to="/contact" 
                  className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  تواصل معنا
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
