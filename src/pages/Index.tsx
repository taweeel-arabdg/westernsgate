import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Sparkles, Target, Rocket, Award } from "lucide-react";
import furhomeLogo from "@/assets/partners/furhome.svg";
import biscotiLogo from "@/assets/partners/biscoti.webp";
import mamonaLogo from "@/assets/partners/mamona.png";
import byotatLogo from "@/assets/partners/byotat.webp";
import logo1 from "@/assets/partners/logo-1.svg";
import logoMini from "@/assets/partners/logo-mini.svg";
import partner6 from "@/assets/partners/partner-6.avif";
import sanyLogo from "@/assets/partners/sany.png";
import smzLogo from "@/assets/partners/smz.jpg";
import copperLogo from "@/assets/partners/copper.jpg";
import shurfahLogo from "@/assets/partners/shurfah.jpg";
import partner7 from "@/assets/partners/partner-7.avif";
import partner8 from "@/assets/partners/partner-8.png";
import partner9 from "@/assets/partners/partner-9.avif";

const Index = () => {
  const partnerLogos = [biscotiLogo, mamonaLogo, byotatLogo, logo1, logoMini, furhomeLogo, partner6, sanyLogo, smzLogo, copperLogo, shurfahLogo, partner7, partner8, partner9];
  
  // Split logos into two rows
  const firstRowLogos = partnerLogos.slice(0, 7);
  const secondRowLogos = partnerLogos.slice(7);
  
  const services = [
    { title: "تحسين محركات البحث SEO", icon: Target, link: "/services/seo", description: "نحلل موقعك ونحسّن ظهوره في نتائج البحث لجذب المزيد من العملاء المحتملين" },
    { title: "التصوير الإبداعي", icon: Sparkles, link: "/services/photography", description: "التقط لحظاتك بلمسة احترافية تعكس هوية علامتك التجارية" },
    { title: "برمجة المواقع الإلكترونية", icon: Rocket, link: "/services/development", description: "نبني مواقع سريعة وآمنة تحول الزوار إلى عملاء فعليين" },
    { title: "حملات إعلانية احترافية", icon: Award, link: "/services/ads", description: "حملات مدروسة تستهدف جمهورك بدقة وتحقق عائد استثمار مرتفع" },
    { title: "تصاميم احترافية", icon: Sparkles, link: "/services/design", description: "تصاميم جذابة تميز علامتك التجارية وتترك انطباعاً لا يُنسى" },
    { title: "إدارة منصات التواصل الاجتماعي", icon: Target, link: "/services/social-media", description: "نبني حضورك الرقمي ونتفاعل مع جمهورك بطريقة تزيد الولاء والمبيعات" },
    { title: "حلول الذكاء الاصطناعي AI", icon: Rocket, link: "/services/ai", description: "استفد من تقنيات الذكاء الاصطناعي لأتمتة عملياتك وتحسين كفاءة أعمالك" },
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
              نشتغل على نتائجك. نحلل سوقك، ونبني حملات تمشي مع طريقة تفكير عميلك، ونضبط مسار المبيعات من أول نقرة إلى إقفال الصفقة
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a href="https://wa.me/966557346167?text=مرحباً، أرغب في الاستفسار عن خدماتكم" target="_blank" rel="noopener noreferrer">
                  تواصل معنا الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
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
                  {service.description}
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
          
          {/* First Row - Right to Left */}
          <div className="flex items-center gap-6 mb-8 animate-[scroll-rtl_5s_linear_infinite]">
            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 w-40 h-20 bg-background border border-border rounded-lg flex items-center justify-center p-4">
                <img src={logo} alt={`شريك ${index + 1}`} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Second Row - Left to Right */}
          <div className="flex items-center gap-6 animate-[scroll-ltr_5s_linear_infinite]">
            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 w-40 h-20 bg-background border border-border rounded-lg flex items-center justify-center p-4">
                <img src={logo} alt={`شريك ${index + 1}`} className="max-w-full max-h-full object-contain" />
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
              <p>3946, Jeddah, Saudi Arabia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
