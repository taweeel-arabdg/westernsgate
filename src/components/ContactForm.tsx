import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "الاسم مطلوب").max(100, "الاسم يجب أن يكون أقل من 100 حرف"),
  phone: z.string().trim().min(1, "رقم الجوال مطلوب").max(20, "رقم الجوال غير صحيح"),
  company: z.string().trim().min(1, "اسم الشركة مطلوب").max(100, "اسم الشركة يجب أن يكون أقل من 100 حرف"),
  message: z.string().trim().max(1000, "الرسالة يجب أن تكون أقل من 1000 حرف"),
  email: z.string().trim().email("البريد الإلكتروني غير صحيح").max(255, "البريد الإلكتروني يجب أن يكون أقل من 255 حرف"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    message: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "خطأ في البيانات",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Submit to database
      const { error } = await supabase
        .from('contact_requests')
        .insert({
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          email: formData.email,
        });

      if (error) throw error;

      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });

      setFormData({
        name: "",
        phone: "",
        company: "",
        message: "",
        email: "",
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إرسال رسالتك، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            required
            type="email"
            placeholder="البريد الإلكتروني *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-right"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            required
            placeholder="اسم الشركة *"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="text-right"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Textarea
            placeholder="الرسالة (اختياري)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="text-right min-h-[100px]"
            disabled={isSubmitting}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال"}
        </Button>
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            3946, Jeddah, Saudi Arabia
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
