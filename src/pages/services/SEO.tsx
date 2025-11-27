import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Search, TrendingUp, Target, BarChart3, Award, CheckCircle2 } from "lucide-react";

const SEO = () => {
  const benefits = [
    "زيادة ظهور موقعك في نتائج البحث الأولى",
    "جذب زوار مستهدفين ومهتمين بخدماتك",
    "تحسين سرعة وأداء موقعك الإلكتروني",
    "بناء سمعة قوية لعلامتك التجارية",
    "زيادة معدلات التحويل والمبيعات",
    "تحليل دقيق للمنافسين واستراتيجياتهم",
  ];

  const services = [
    {
      icon: Target,
      title: "تحليل الكلمات المفتاحية",
      description: "نحدد الكلمات المفتاحية الأكثر بحثاً في مجالك ونستهدفها بدقة",
    },
    {
      icon: TrendingUp,
      title: "تحسين المحتوى",
      description: "نكتب ونحسن محتوى موقعك ليتصدر نتائج البحث ويجذب الزوار",
    },
    {
      icon: BarChart3,
      title: "تحليل الأداء",
      description: "نراقب ونحلل أداء موقعك باستمرار ونقدم تقارير دورية مفصلة",
    },
    {
      icon: Award,
      title: "بناء الروابط",
      description: "نبني روابط قوية وموثوقة لموقعك لتعزيز مصداقيته في محركات البحث",
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
            <Search className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تحسين محركات البحث SEO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              احتل المرتبة الأولى في نتائج البحث وزد من ظهور علامتك التجارية أمام عملائك المستهدفين
            </p>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              ما هو تحسين محركات البحث؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                تحسين محركات البحث (SEO) هو عملية تحسين موقعك الإلكتروني ليظهر في المراتب الأولى في نتائج محركات البحث مثل جوجل. 
                عندما يبحث عملاؤك المحتملون عن خدماتك أو منتجاتك، نضمن أن يجدوا موقعك أولاً.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نمتلك خبرة واسعة في مجال SEO ونستخدم أحدث التقنيات والاستراتيجيات المعتمدة لتحقيق نتائج ملموسة. 
                فريقنا من الخبراء يعمل على تحليل موقعك وتحسينه بشكل شامل، من المحتوى إلى البنية التقنية.
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
              لماذا تحتاج إلى تحسين محركات البحث؟
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
              خدماتنا في تحسين محركات البحث
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
              لماذا تختار بوابة الغربية؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                نحن لا نقدم مجرد خدمات SEO عادية. نحن نبني استراتيجية شاملة ومخصصة لعملك تضمن لك نتائج حقيقية وقابلة للقياس. 
                فريقنا من الخبراء السعوديين يفهم السوق المحلي بعمق ويعرف كيف يتحدث إلى جمهورك بلغتهم.
              </p>
              <p className="leading-relaxed mb-4">
                عملنا مع مئات الشركات السعودية وساعدناهم على تحقيق نمو استثنائي في حركة الزوار والمبيعات. 
                نستخدم أدوات تحليل متقدمة ونقدم تقارير شفافة تُظهر لك بالضبط ما تم إنجازه وما هي النتائج.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default SEO;
