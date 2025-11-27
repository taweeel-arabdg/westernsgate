import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Brain, Zap, Target, Sparkles, CheckCircle2 } from "lucide-react";

const AI = () => {
  const benefits = [
    "أتمتة المهام المتكررة وتوفير الوقت والجهد",
    "تحليل ذكي للبيانات واتخاذ قرارات أفضل",
    "تحسين تجربة العملاء بالتفاعل الذكي",
    "زيادة الكفاءة وتقليل التكاليف التشغيلية",
    "توقع احتياجات العملاء وتقديم توصيات دقيقة",
    "التميز عن المنافسين بتقنيات متقدمة",
  ];

  const services = [
    {
      icon: Brain,
      title: "روبوتات المحادثة الذكية",
      description: "نبني روبوتات محادثة تجيب على أسئلة عملائك وتخدمهم على مدار الساعة",
    },
    {
      icon: Target,
      title: "تحليل البيانات بالذكاء الاصطناعي",
      description: "نحلل بيانات عملائك لنفهم سلوكهم ونقدم لك رؤى قيمة",
    },
    {
      icon: Sparkles,
      title: "إنشاء المحتوى بالذكاء الاصطناعي",
      description: "نستخدم AI لإنشاء محتوى تسويقي إبداعي وفعال",
    },
    {
      icon: Zap,
      title: "أتمتة التسويق",
      description: "نؤتمت عملياتك التسويقية لتوفير الوقت وزيادة الفعالية",
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
            <Brain className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              حلول الذكاء الاصطناعي AI
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نستخدم أحدث تقنيات الذكاء الاصطناعي لتحسين تسويقك وزيادة كفاءتك
            </p>
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              كيف يساعدك الذكاء الاصطناعي في التسويق؟
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                الذكاء الاصطناعي ليس مجرد تقنية مستقبلية، بل هو حاضر اليوم ويغير قواعد اللعبة في التسويق الرقمي. 
                من الروبوتات الذكية التي تخدم عملائك على مدار الساعة، إلى تحليل البيانات الضخمة لفهم سلوك العملاء، 
                إلى إنشاء محتوى إبداعي بسرعة وكفاءة - AI يمكن أن يحول عملك بالكامل.
              </p>
              <p className="leading-relaxed mb-4">
                في بوابة الغربية، نحن روّاد في تطبيق الذكاء الاصطناعي في التسويق. نستخدم أحدث تقنيات AI لمساعدة 
                عملائنا على زيادة كفاءتهم، تحسين نتائجهم، وتوفير الوقت والجهد. نعمل معك لفهم احتياجاتك ونبني لك 
                حلولاً مخصصة من AI تناسب عملك تماماً.
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
              فوائد حلول الذكاء الاصطناعي
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
              خدمات الذكاء الاصطناعي
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
              خبرتنا في الذكاء الاصطناعي
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                نحن من أوائل الوكالات التسويقية في المملكة التي تبنت تقنيات الذكاء الاصطناعي. طبقنا حلول AI لعشرات 
                الشركات السعودية وساعدناهم على تحقيق نتائج مذهلة - من تقليل وقت الاستجابة للعملاء بنسبة 90% إلى زيادة 
                معدلات التحويل بأكثر من 50%.
              </p>
              <p className="leading-relaxed mb-4">
                فريقنا من خبراء AI والمطورين يتابع أحدث التطورات في هذا المجال ويطبقها لصالح عملائنا. نقدم لك حلولاً 
                عملية وواقعية من AI، ليس مجرد تقنية للتقنية. هدفنا أن نساعدك على النمو والتميز باستخدام أقوى أدوات العصر.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default AI;
