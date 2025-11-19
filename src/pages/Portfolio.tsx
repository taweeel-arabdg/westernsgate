import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { projects, categories } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, Target } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredProjects = selectedCategory === "الكل"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="معرض أعمالنا - بوابة الغربية"
        description="استعرض مشاريعنا الناجحة في التسويق الرقمي، تطوير المواقع، إدارة السوشيال ميديا والمزيد. شاهد كيف ساعدنا عملاءنا على النجاح"
        keywords={["معرض أعمال", "مشاريع سابقة", "portfolio", "حالات نجاح", "أعمال تسويقية"]}
      />
      <Header />
      <WhatsAppButton />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" dir="rtl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                معرض أعمالنا
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                نفخر بمشاريعنا الناجحة التي ساعدنا بها عملاءنا على تحقيق أهدافهم التسويقية والوصول إلى جمهورهم المستهدف
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">+50</div>
                  <div className="text-sm text-muted-foreground">مشروع ناجح</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">+30</div>
                  <div className="text-sm text-muted-foreground">عميل راضٍ</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">250%</div>
                  <div className="text-sm text-muted-foreground">متوسط النمو</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center" dir="rtl">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6" dir="rtl">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.client} • {project.date}
                      </p>
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="border-t border-border pt-4">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {project.results.map((result, idx) => (
                          <div key={idx}>
                            <div className="text-lg font-bold text-primary">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center" dir="rtl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل أنت مستعد لتكون المشروع القادم؟
              </h2>
              <p className="text-lg mb-8 opacity-90">
                دعنا نساعدك في تحقيق أهدافك التسويقية وبناء قصة نجاح جديدة معاً
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://wa.me/966557346167?text=مرحباً، أريد البدء بمشروعي الآن', '_blank')}
              >
                ابدأ مشروعك الآن
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
