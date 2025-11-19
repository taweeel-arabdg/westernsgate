import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center" dir="rtl">
          <h1 className="text-4xl font-bold mb-4">المقال غير موجود</h1>
          <Link to="/blog">
            <Button>العودة للمدونة</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "بوابة الغربية"
    },
    "publisher": {
      "@type": "Organization",
      "name": "بوابة الغربية",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    },
    "keywords": post.keywords.join(", ")
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title} - مدونة بوابة الغربية`}
        description={post.excerpt}
        keywords={post.keywords}
        type="article"
        structuredData={structuredData}
      />
      <Header />
      <WhatsAppButton />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl" dir="rtl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
            <ArrowRight className="w-4 h-4" />
            العودة للمدونة
          </Link>

          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="h-64 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-12 flex items-center justify-center">
            <Tag className="w-24 h-24 text-accent/30" />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
              {post.excerpt}
            </div>
            
            <div className="whitespace-pre-line leading-relaxed text-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s*/, '');
                  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag 
                      key={index} 
                      className={`font-bold mb-4 mt-8 ${
                        level === 1 ? 'text-3xl' : 
                        level === 2 ? 'text-2xl' : 
                        'text-xl'
                      }`}
                    >
                      {text}
                    </HeadingTag>
                  );
                }
                if (paragraph.trim().startsWith('-')) {
                  return (
                    <li key={index} className="mb-2 mr-6">
                      {paragraph.replace(/^-\s*/, '')}
                    </li>
                  );
                }
                if (paragraph.trim()) {
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
            {post.keywords.map((keyword, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-card border border-border rounded-full text-sm"
              >
                #{keyword}
              </span>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold mb-2 hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
