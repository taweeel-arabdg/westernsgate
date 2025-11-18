import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Sparkles, Target, Rocket, Award } from "lucide-react";

const Index = () => {
  const services = [
    { title: "تحسين محركات البحث SEO", icon: Target, link: "/services/seo" },
    { title: "التصوير الإبداعي", icon: Sparkles, link: "/services/photography" },
    { title: "برمجة المواقع الإلكترونية", icon: Rocket, link: "/services/development" },
    { title: "حملات إعلانية احترافية", icon: Award, link: "/services/ads" },
    { title: "تصاميم احترافية", icon: Sparkles, link: "/services/design" },
    { title: "إدارة منصات التواصل الاجتماعي", icon: Target, link: "/services/social-media" },
    { title: "حلول الذكاء الاصطناعي AI", icon: Rocket, link: "/services/ai" },
  ];

  const workSteps = [
    { step: "1", title: "طلب الخدمة", description: "تواصل معنا وحدد احتياجاتك" },
    { step: "2", title: "المناقشة والتخطيط", description: "نضع خطة عمل مخصصة لك" },
    { step: "3", title: "التنفيذ", description: "نبدأ العمل بأعلى جودة" },
    { step: "4", title: "التسليم", description: "نسلمك مشروعك بنجاح" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative" dir="rtl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              شريكك الموثوق في التسويق الرقمي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              نحول أفكارك إلى واقع رقمي ناجح ونساعدك على تحقيق أهدافك التسويقية بحلول مبتكرة واحترافية
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                ابدأ مشروعك الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                تعرف على خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">من نحن</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              بوابة الغربية هي وكالة تسويق رقمي رائدة في المملكة العربية السعودية. نفخر بخبرتنا الواسعة في تقديم حلول تسويقية متكاملة ساعدت مئات الشركات على تحقيق نمو استثنائي في مبيعاتها وتعزيز حضورها الرقمي.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">مشروع ناجح</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-muted-foreground">رضا العملاء</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">سنوات خبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  نقدم لك أفضل الحلول في {service.title} لتحقيق أهدافك التسويقية
                </p>
                <a href={service.link} className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                  اعرف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">كيف نعمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Partners Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">شركاء النجاح</h2>
          <div className="flex items-center gap-12 animate-[scroll_20s_linear_infinite]">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">شريك {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-lg mb-2">اتصل بنا</h3>
              <p>+966557346167</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
              <p>info@westerngate.sa</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">العنوان</h3>
              <p>المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
