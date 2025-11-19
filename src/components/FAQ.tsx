import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { MessageCircleQuestion } from "lucide-react";

const FAQ = () => {
  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" dir="rtl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircleQuestion className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-muted-foreground">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" dir="rtl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-6 bg-primary/5 rounded-lg" dir="rtl">
            <p className="text-muted-foreground mb-4">
              لم تجد إجابة لسؤالك؟
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              تواصل معنا الآن
              <span>←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
