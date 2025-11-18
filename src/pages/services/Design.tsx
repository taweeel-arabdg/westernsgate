import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Palette, Sparkles, Eye, Layers, CheckCircle2 } from "lucide-react";

const Design = () => {
  const benefits = [
    "هوية بصرية قوية ومميزة لعلامتك التجارية",
    "تصاميم احترافية تعكس قيم علامتك التجارية",
    "زيادة التفاعل والانطباع الإيجابي لدى العملاء",
    "تصاميم متوافقة مع جميع المنصات والاستخدامات",
    "محتوى بصري جذاب يزيد من المبيعات",
    "تمييز علامتك التجارية عن المنافسين",
  ];

  const services = [
    {
      icon: Palette,
      title: "تصميم الهوية البصرية",
      description: "نصمم هوية بصرية كاملة تشمل الشعار والألوان والخطوط والعناصر البصرية",
    },
    {
      icon: Sparkles,
      title: "تصميم المطبوعات",
      description: "تصميم احترافي للكروت والبروشورات والمطبوعات الدعائية",
    },
    {
      icon: Eye,
      title: "تصميم السوشيال ميديا",
      description: "تصاميم جذابة ومميزة لمنشوراتك على وسائل التواصل الاجتماعي",
    },
    {
      icon: Layers,
      title: "تصميم المواد التسويقية",
      description: "تصاميم إعلانية احترافية للحملات الرقمية والمطبوعة",
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
            <Palette className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تصاميم احترافية
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نصمم هوية بصرية قوية تعبر عن علامتك التجارية وتجذب عملائك
            </p>
          </div>
        </div>
      </section>

      {/* What is Design Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              لماذا التصميم الاحترافي مهم؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                التصميم الاحترافي ليس مجرد شكل جمالي، بل هو لغة بصرية تتحدث عن علامتك التجارية وتنقل قيمها ورسالتها 
                للعملاء. التصميم الجيد يبني الثقة، يجذب الانتباه، ويترك انطباعاً دائماً في أذهان العملاء.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نمتلك فريقاً من المصممين المبدعين الذين يفهمون كيف يحولون رؤيتك إلى تصاميم مذهلة. 
                نعمل معك لفهم علامتك التجارية، جمهورك، وأهدافك، ثم نصمم لك هوية بصرية فريدة تميزك عن منافسيك.
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
              فوائد التصميم الاحترافي
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
              خدمات التصميم الجرافيكي
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
              خبرتنا في التصميم الجرافيكي
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                صممنا هويات بصرية لمئات العلامات التجارية السعودية من مختلف القطاعات. نفهم الذوق المحلي ونعرف كيف 
                نصمم تصاميم تتحدث إلى الجمهور السعودي والعربي بشكل فعال.
              </p>
              <p className="leading-relaxed mb-4">
                نستخدم أحدث برامج التصميم ونتبع أفضل الممارسات العالمية في التصميم. نقدم لك تصاميم احترافية عالية الجودة 
                قابلة للاستخدام في جميع وسائل الإعلام - من الطباعة إلى الرقمي. هدفنا أن نصمم لك هوية بصرية تدوم وتنمو مع علامتك التجارية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              جاهز لتصميم هوية بصرية قوية؟
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              تواصل معنا الآن واحصل على استشارة مجانية حول هويتك البصرية
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Design;
