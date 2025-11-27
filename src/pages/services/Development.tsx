import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Code, Smartphone, Zap, Shield, CheckCircle2 } from "lucide-react";

const Development = () => {
  const benefits = [
    "موقع سريع وآمن يعزز ثقة عملائك",
    "تصميم متجاوب يعمل بسلاسة على جميع الأجهزة",
    "تحسين محركات البحث مدمج من البداية",
    "لوحة تحكم سهلة لإدارة المحتوى",
    "دعم فني مستمر بعد التسليم",
    "تكامل مع أنظمة الدفع ووسائل التواصل",
  ];

  const services = [
    {
      icon: Code,
      title: "تطوير المواقع المخصصة",
      description: "نصمم ونطور مواقع إلكترونية مخصصة تماماً لاحتياجات عملك وتتميز عن منافسيك",
    },
    {
      icon: Smartphone,
      title: "تطبيقات الويب التفاعلية",
      description: "نبني تطبيقات ويب متقدمة توفر تجربة استخدام سلسة وسريعة لعملائك",
    },
    {
      icon: Zap,
      title: "تحسين الأداء",
      description: "نحسن سرعة وأداء موقعك لضمان تجربة مستخدم ممتازة ونتائج أفضل في SEO",
    },
    {
      icon: Shield,
      title: "الأمان والحماية",
      description: "نطبق أعلى معايير الأمان لحماية موقعك وبيانات عملائك",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto text-center">
            <Code className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              برمجة المواقع الإلكترونية
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نحول أفكارك إلى مواقع إلكترونية احترافية تساعدك على النمو والتميز
            </p>
          </div>
        </div>
      </section>

      {/* What is Development Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              لماذا تحتاج موقعاً إلكترونياً احترافياً؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                موقعك الإلكتروني هو واجهتك الرقمية الأولى. إنه المكان الذي يتعرف فيه عملاؤك المحتملون على خدماتك ومنتجاتك، 
                ويقررون ما إذا كانوا سيثقون بك أم لا. موقع احترافي سريع وآمن وجذاب يمكن أن يكون الفرق بين كسب عميل جديد أو خسارته.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نبني مواقع إلكترونية لا تبدو جميلة فقط، بل تعمل بكفاءة عالية وتحقق أهدافك التجارية. 
                نستخدم أحدث التقنيات والأطر البرمجية لضمان أن موقعك سريع، آمن، ومتوافق مع جميع الأجهزة والمتصفحات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              مميزات مواقعنا الإلكترونية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              خدمات برمجة المواقع
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              خبرتنا في برمجة المواقع
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                طورنا مئات المواقع الإلكترونية للشركات السعودية من جميع الأحجام والقطاعات. نفهم احتياجات السوق المحلي 
                ونعرف كيف نصمم تجربة مستخدم تناسب الجمهور السعودي والعربي.
              </p>
              <p className="leading-relaxed mb-4">
                فريقنا من المطورين المحترفين يستخدم أحدث التقنيات مثل React و Next.js و Node.js لبناء مواقع سريعة 
                وقابلة للتوسع. نعمل معك من مرحلة التخطيط حتى الإطلاق والدعم الفني، ونضمن لك موقعاً يحقق أهدافك ويتجاوز توقعاتك.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Development;
