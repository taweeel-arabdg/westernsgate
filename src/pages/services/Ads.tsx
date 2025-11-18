import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Megaphone, TrendingUp, Target, BarChart3, CheckCircle2 } from "lucide-react";

const Ads = () => {
  const benefits = [
    "وصول سريع ومباشر لجمهورك المستهدف",
    "زيادة المبيعات والعملاء المحتملين",
    "تحكم كامل في ميزانيتك الإعلانية",
    "تقارير دقيقة وشفافة عن أداء حملاتك",
    "استهداف دقيق بناءً على الموقع والاهتمامات",
    "عائد استثمار قابل للقياس والتحسين المستمر",
  ];

  const services = [
    {
      icon: Target,
      title: "إعلانات جوجل",
      description: "حملات إعلانية على محرك البحث جوجل لجذب عملاء يبحثون عن خدماتك بالفعل",
    },
    {
      icon: Megaphone,
      title: "إعلانات السوشيال ميديا",
      description: "حملات احترافية على فيسبوك، إنستجرام، سناب شات، وتيك توك",
    },
    {
      icon: BarChart3,
      title: "تحليل الأداء",
      description: "متابعة دقيقة لأداء حملاتك وتحسين مستمر لزيادة العائد",
    },
    {
      icon: TrendingUp,
      title: "إعادة الاستهداف",
      description: "نستهدف من زار موقعك ولم يتخذ إجراء لتحويلهم إلى عملاء",
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
            <Megaphone className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              حملات إعلانية احترافية
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نصل بعلامتك التجارية إلى عملائك المستهدفين بدقة وفعالية
            </p>
          </div>
        </div>
      </section>

      {/* What is Advertising Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              لماذا الحملات الإعلانية؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                الحملات الإعلانية الرقمية هي أسرع طريقة للوصول إلى عملاء جدد وزيادة مبيعاتك. بدلاً من انتظار أن يجدك العملاء، 
                أنت تذهب إليهم مباشرة أينما كانوا - سواء على محركات البحث أو وسائل التواصل الاجتماعي.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نمتلك خبرة واسعة في إدارة الحملات الإعلانية على جميع المنصات. نحلل جمهورك، نحدد أفضل 
                القنوات للوصول إليهم، ونصمم إعلانات جذابة تحقق أعلى معدلات تحويل بأقل تكلفة ممكنة.
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
              فوائد الحملات الإعلانية
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
              خدمات الحملات الإعلانية
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
              خبرتنا في الحملات الإعلانية
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                أدرنا آلاف الحملات الإعلانية الناجحة للشركات السعودية وساعدناهم على تحقيق ملايين الريالات من المبيعات. 
                نفهم السوق السعودي بعمق ونعرف بالضبط كيف نتواصل مع الجمهور المحلي.
              </p>
              <p className="leading-relaxed mb-4">
                نعمل كشركاء حقيقيين لك، ليس مجرد وكالة إعلانات. هدفنا أن نحقق لك أفضل عائد على استثمارك الإعلاني. 
                نقدم تقارير شفافة ومفصلة، ونحسن حملاتك باستمرار بناءً على البيانات والنتائج الفعلية.
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
              جاهز لبدء حملتك الإعلانية؟
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              تواصل معنا الآن واحصل على استشارة مجانية وخطة إعلانية مخصصة
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ads;
