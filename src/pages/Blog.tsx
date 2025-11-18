import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المدونة</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              آخر الأخبار والمقالات في عالم التسويق الرقمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">منذ {item} أيام</div>
                  <h3 className="text-xl font-bold mb-2">عنوان المقال {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    وصف مختصر للمقال يوضح محتواه الأساسي ويشجع القارئ على قراءة المزيد من التفاصيل...
                  </p>
                  <a href="#" className="text-accent hover:text-accent/80 font-medium">
                    اقرأ المزيد ←
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
