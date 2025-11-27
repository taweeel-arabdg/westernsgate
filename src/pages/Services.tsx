import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Camera, Code, Megaphone, Palette, Share2, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "تحسين محركات البحث SEO",
      description: "نساعدك على الظهور في الصفحة الأولى من نتائج البحث وزيادة الزيارات العضوية لموقعك",
      link: "/services/seo",
    },
    {
      icon: Camera,
      title: "التصوير الإبداعي",
      description: "تصوير احترافي لمنتجاتك وفعالياتك يعكس هوية علامتك التجارية بشكل مميز",
      link: "/services/photography",
    },
    {
      icon: Code,
      title: "برمجة المواقع الإلكترونية",
      description: "تصميم وتطوير مواقع إلكترونية احترافية سريعة وآمنة ومتجاوبة مع جميع الأجهزة",
      link: "/services/development",
    },
    {
      icon: Megaphone,
      title: "حملات إعلانية احترافية",
      description: "إدارة حملات إعلانية فعالة على جميع المنصات لزيادة مبيعاتك وتحقيق أهدافك",
      link: "/services/ads",
    },
    {
      icon: Palette,
      title: "تصاميم احترافية",
      description: "تصاميم جرافيك مبتكرة للهوية البصرية والمطبوعات والمواد التسويقية",
      link: "/services/design",
    },
    {
      icon: Share2,
      title: "إدارة منصات التواصل الاجتماعي",
      description: "إدارة شاملة لحساباتك على وسائل التواصل الاجتماعي وبناء تفاعل حقيقي مع جمهورك",
      link: "/services/social-media",
    },
    {
      icon: Brain,
      title: "حلول الذكاء الاصطناعي AI",
      description: "تطبيق أحدث تقنيات الذكاء الاصطناعي لتحسين عملياتك التسويقية وزيادة كفاءتك",
      link: "/services/ai",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات التسويقية الرقمية لمساعدتك على النجاح والنمو
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <service.icon className="h-14 w-14 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
