import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage for now (will be replaced with backend later)
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    setFormData({
      name: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8" dir="rtl">
      <h3 className="text-2xl font-bold mb-6 text-center">تواصل معنا الآن</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            required
            placeholder="الاسم *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="text-right"
          />
        </div>
        <div>
          <Input
            required
            type="tel"
            placeholder="رقم الجوال *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="text-right"
          />
        </div>
        <div>
          <Input
            required
            placeholder="اسم الشركة *"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="text-right"
          />
        </div>
        <div>
          <Textarea
            placeholder="الرسالة (اختياري)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="text-right min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          إرسال
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
