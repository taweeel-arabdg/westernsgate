import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Camera, Image, Video, Sparkles, Award, CheckCircle2 } from "lucide-react";

const Photography = () => {
  const benefits = [
    "صور احترافية تعكس جودة منتجاتك وخدماتك",
    "زيادة التفاعل مع محتواك على وسائل التواصل",
    "بناء هوية بصرية قوية لعلامتك التجارية",
    "تحسين انطباع العملاء عن علامتك التجارية",
    "محتوى بصري جذاب يزيد من المبيعات",
    "تصوير احترافي لجميع الفعاليات والمناسبات",
  ];

  const services = [
    {
      icon: Camera,
      title: "تصوير المنتجات",
      description: "نصور منتجاتك بطريقة احترافية تبرز مميزاتها وتجذب العملاء للشراء",
    },
    {
      icon: Image,
      title: "تصوير فوتوغرافي",
      description: "تصوير احترافي للفعاليات والمناسبات والبورتريهات بأعلى جودة",
    },
    {
      icon: Video,
      title: "إنتاج الفيديو",
      description: "نصنع محتوى فيديو إبداعي يحكي قصة علامتك التجارية بطريقة مميزة",
    },
    {
      icon: Sparkles,
      title: "المعالجة والتحرير",
      description: "معالجة احترافية للصور والفيديوهات لإخراج نهائي مذهل",
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
            <Camera className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              التصوير الإبداعي
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نلتقط لحظات تحكي قصة علامتك التجارية وتجعلها لا تُنسى
            </p>
          </div>
        </div>
      </section>

      {/* What is Photography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              لماذا التصوير الاحترافي مهم لعملك؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                في عالم التسويق الرقمي، الصورة تساوي ألف كلمة. المحتوى البصري الاحترافي هو أول ما يلفت انتباه عملائك 
                ويترك انطباعاً دائماً عن علامتك التجارية. سواء كنت تبيع منتجات أو تقدم خدمات، التصوير الاحترافي 
                يزيد من مصداقيتك ويجعل عملك يبدو أكثر احترافية.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نمتلك فريقاً من المصورين المحترفين والمبدعين الذين يفهمون كيف تُترجَم رؤيتك إلى صور 
                تحكي قصتك. نستخدم أحدث المعدات والتقنيات لضمان الحصول على نتائج استثنائية تفوق توقعاتك.
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
              فوائد التصوير الاحترافي
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
              خدمات التصوير الإبداعي
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
              خبرتنا في التصوير الاحترافي
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                عملنا مع مئات العلامات التجارية السعودية وصورنا آلاف المنتجات والفعاليات. نفهم احتياجات السوق المحلي 
                ونعرف كيف نلتقط الصور التي تتحدث إلى جمهورك السعودي بشكل مباشر.
              </p>
              <p className="leading-relaxed mb-4">
                نستخدم أحدث كاميرات ومعدات الإضاءة والتحرير، ونعمل معك خطوة بخطوة من التخطيط إلى التصوير إلى المعالجة النهائية. 
                هدفنا أن نقدم لك محتوى بصري يرفع من قيمة علامتك التجارية ويساعدك على التميز في السوق.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Photography;
