import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">من نحن</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                بوابة الغربية هي وكالة تسويق رقمي متكاملة تأسست بشغف وإيمان عميق بقوة التسويق الرقمي في تحقيق النجاح للأعمال في المملكة العربية السعودية.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                نحن نؤمن بأن كل شركة لديها قصة فريدة تستحق أن تُروى بطريقة مميزة. لذلك، نعمل كشركاء استراتيجيين لعملائنا، ونقدم حلولاً مخصصة تناسب احتياجاتهم وتساعدهم على الوصول إلى جمهورهم المستهدف بفعالية.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
                  <p className="text-muted-foreground">
                    أن نكون الوكالة الرائدة في تقديم حلول التسويق الرقمي المبتكرة في المملكة العربية السعودية، ونساهم في نمو ونجاح الأعمال السعودية.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Target className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">مهمتنا</h3>
                  <p className="text-muted-foreground">
                    تقديم خدمات تسويقية متميزة تعتمد على الإبداع والبيانات، لمساعدة عملائنا على تحقيق أهدافهم وتعزيز حضورهم الرقمي.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">فريقنا</h3>
                  <p className="text-muted-foreground">
                    نمتلك فريقاً من الخبراء المحترفين في مختلف مجالات التسويق الرقمي، جاهزين لتحويل أفكارك إلى واقع ملموس.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <TrendingUp className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">نتائجنا</h3>
                  <p className="text-muted-foreground">
                    حققنا نمواً استثنائياً لعملائنا بنسبة تصل إلى 300% في المبيعات ونجحنا في بناء علامات تجارية قوية ومؤثرة.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">قيمنا</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">●</span>
                  <span><strong>الثقة:</strong> نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة والشفافية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">●</span>
                  <span><strong>الإبداع:</strong> نقدم حلولاً مبتكرة ومميزة تناسب كل عميل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">●</span>
                  <span><strong>الاحترافية:</strong> نلتزم بأعلى معايير الجودة في كل ما نقدمه</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">●</span>
                  <span><strong>النتائج:</strong> نركز على تحقيق أهداف عملائنا وقياس النجاح بشكل مستمر</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-16">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
