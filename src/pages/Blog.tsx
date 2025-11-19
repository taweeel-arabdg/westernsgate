import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="مدونة بوابة الغربية - مقالات التسويق الرقمي"
        description="اكتشف أحدث مقالات التسويق الرقمي، SEO، السوشيال ميديا، والإعلانات الرقمية من خبراء بوابة الغربية"
        keywords={["مدونة تسويق", "مقالات SEO", "نصائح تسويقية", "استراتيجيات رقمية"]}
      />
      <Header />
      <WhatsAppButton />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4" dir="rtl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المدونة</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مقالات ونصائح قيّمة في عالم التسويق الرقمي لمساعدتك على النجاح
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border hover:bg-accent/10'
              }`}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border hover:bg-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Tag className="w-16 h-16 text-accent/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2"
                  >
                    اقرأ المزيد
                    <span>←</span>
                  </Link>
                </div>
              </article>
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
