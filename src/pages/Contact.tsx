import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا الآن وسنكون سعداء بخدمتك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">الهاتف</div>
                      <a href="tel:+966557346167" className="text-muted-foreground hover:text-accent">
                        +966557346167
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">البريد الإلكتروني</div>
                      <a href="mailto:info@westerngate.sa" className="text-muted-foreground hover:text-accent">
                        info@westerngate.sa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">العنوان</div>
                      <p className="text-muted-foreground">المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">ساعات العمل</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 صباحاً - 6:00 مساءً</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة - السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">تواصل عبر واتساب</h3>
                <p className="text-muted-foreground mb-4">
                  للتواصل السريع والمباشر، يمكنك التواصل معنا عبر واتساب
                </p>
                <a
                  href="https://wa.me/966557346167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg transition-colors"
                >
                  ابدأ المحادثة
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
