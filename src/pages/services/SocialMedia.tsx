import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Share2, Users, MessageCircle, TrendingUp, CheckCircle2 } from "lucide-react";

const SocialMedia = () => {
  const benefits = [
    "بناء مجتمع نشط ومتفاعل حول علامتك التجارية",
    "زيادة الوعي بعلامتك التجارية ومنتجاتك",
    "تفاعل مباشر مع عملائك وبناء علاقات قوية",
    "محتوى إبداعي يجذب المتابعين ويزيد التفاعل",
    "تحليل مستمر للأداء وتحسين الاستراتيجية",
    "تحويل المتابعين إلى عملاء حقيقيين",
  ];

  const services = [
    {
      icon: Share2,
      title: "إدارة الحسابات",
      description: "إدارة شاملة لحساباتك على جميع منصات التواصل الاجتماعي",
    },
    {
      icon: MessageCircle,
      title: "إنشاء المحتوى",
      description: "نصنع محتوى إبداعي وجذاب يعبر عن علامتك التجارية ويتفاعل معه جمهورك",
    },
    {
      icon: Users,
      title: "بناء المجتمع",
      description: "نبني مجتمعاً نشطاً ومخلصاً حول علامتك التجارية",
    },
    {
      icon: TrendingUp,
      title: "التحليل والتقارير",
      description: "تقارير دورية مفصلة عن الأداء والنمو والتفاعل",
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
            <Share2 className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              إدارة منصات التواصل الاجتماعي
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نبني حضوراً قوياً لعلامتك التجارية على وسائل التواصل الاجتماعي
            </p>
          </div>
        </div>
      </section>

      {/* What is Social Media Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              لماذا إدارة السوشيال ميديا مهمة؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                وسائل التواصل الاجتماعي هي المكان الذي يقضي فيه عملاؤك معظم وقتهم على الإنترنت. الحضور القوي والفعال 
                على هذه المنصات يعني أنك دائماً في ذهن عملائك، وتبني معهم علاقة ثقة تتحول إلى مبيعات وولاء للعلامة التجارية.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نعرف بالضبط كيف ننشئ محتوى يجذب الانتباه ويحفز التفاعل. نفهم خصوصية كل منصة - من 
                إنستجرام إلى تيك توك إلى تويتر - ونصنع محتوى مخصصاً يناسب كل جمهور. لا نكتفي بالنشر، بل نبني مجتمعاً 
                نشطاً حول علامتك التجارية.
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
              فوائد إدارة السوشيال ميديا
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
              خدمات إدارة السوشيال ميديا
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
              خبرتنا في إدارة السوشيال ميديا
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                أدرنا حسابات السوشيال ميديا لمئات العلامات التجارية السعودية وبنينا لهم جمهوراً نشطاً ومتفاعلاً. 
                نفهم الثقافة المحلية والترندات السعودية، ونعرف بالضبط ما ينجح مع الجمهور السعودي.
              </p>
              <p className="leading-relaxed mb-4">
                فريقنا من صناع المحتوى والمصممين يعمل معك لإنشاء محتوى إبداعي ومميز. نتابع التريندات، نرد على التعليقات، 
                نحلل الأداء، ونحسن الاستراتيجية باستمرار. هدفنا أن نبني لك حضوراً قوياً ومؤثراً على وسائل التواصل الاجتماعي.
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
              جاهز لبناء حضور قوي على السوشيال ميديا؟
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              تواصل معنا الآن واحصل على استشارة مجانية واستراتيجية سوشيال ميديا
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
