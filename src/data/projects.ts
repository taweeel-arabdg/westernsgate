export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  services: string[];
  results: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "حملة إعلانية متكاملة لشركة بيسكوتي",
    description: "تصميم وإدارة حملة إعلانية شاملة على منصات التواصل الاجتماعي ومحركات البحث لزيادة الوعي بالعلامة التجارية",
    category: "إعلانات",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    client: "شركة بيسكوتي",
    date: "يناير 2024",
    services: ["إعلانات جوجل", "إعلانات فيسبوك", "تصميم جرافيك", "كتابة محتوى"],
    results: [
      { label: "زيادة المبيعات", value: "250%" },
      { label: "الوصول", value: "+500k" },
      { label: "معدل التحويل", value: "8.5%" }
    ]
  },
  {
    id: 2,
    title: "تطوير موقع إلكتروني لمتجر فرهوم",
    description: "تصميم وتطوير متجر إلكتروني متكامل مع نظام إدارة المحتوى وبوابة الدفع الإلكتروني",
    category: "تطوير ويب",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    client: "متجر فرهوم",
    date: "ديسمبر 2023",
    services: ["تصميم UI/UX", "تطوير Frontend", "تطوير Backend", "تحسين SEO"],
    results: [
      { label: "سرعة التحميل", value: "95/100" },
      { label: "تجربة المستخدم", value: "ممتازة" },
      { label: "زيادة الطلبات", value: "180%" }
    ]
  },
  {
    id: 3,
    title: "إدارة حسابات التواصل الاجتماعي لـ BYOTAT",
    description: "استراتيجية محتوى متكاملة وإدارة يومية لحسابات السوشيال ميديا مع تصميم المحتوى البصري",
    category: "سوشيال ميديا",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    client: "BYOTAT",
    date: "نوفمبر 2023",
    services: ["إدارة المحتوى", "تصميم جرافيك", "تصوير فوتوغرافي", "تحليل الأداء"],
    results: [
      { label: "نمو المتابعين", value: "+15k" },
      { label: "معدل التفاعل", value: "12.5%" },
      { label: "زيادة الوعي", value: "300%" }
    ]
  },
  {
    id: 4,
    title: "تحسين محركات البحث لشركة كوبر",
    description: "استراتيجية SEO شاملة لتحسين ترتيب الموقع في نتائج البحث وزيادة الزيارات العضوية",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    client: "شركة كوبر",
    date: "أكتوبر 2023",
    services: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط", "تحسين تقني"],
    results: [
      { label: "تحسين الترتيب", value: "صفحة 1" },
      { label: "زيادة الزيارات", value: "+420%" },
      { label: "معدل التحويل", value: "6.8%" }
    ]
  },
  {
    id: 5,
    title: "جلسة تصوير منتجات لمتجر مامونة",
    description: "تصوير احترافي للمنتجات مع معالجة الصور وتجهيزها للاستخدام في المتجر الإلكتروني",
    category: "تصوير",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    client: "متجر مامونة",
    date: "سبتمبر 2023",
    services: ["تصوير منتجات", "معالجة الصور", "إخراج فني", "تجهيز للنشر"],
    results: [
      { label: "عدد الصور", value: "200+" },
      { label: "جودة الإنتاج", value: "4K" },
      { label: "زيادة المبيعات", value: "160%" }
    ]
  },
  {
    id: 6,
    title: "هوية بصرية متكاملة لشركة سانى",
    description: "تصميم هوية بصرية شاملة تتضمن الشعار، الألوان، الخطوط، ودليل الاستخدام",
    category: "تصميم",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    client: "شركة سانى",
    date: "أغسطس 2023",
    services: ["تصميم الشعار", "دليل الهوية", "قوالب التسويق", "مواد طباعية"],
    results: [
      { label: "رضا العميل", value: "100%" },
      { label: "عدد التصاميم", value: "50+" },
      { label: "الاحترافية", value: "ممتازة" }
    ]
  }
];

export const categories = [
  "الكل",
  "تطوير ويب",
  "سوشيال ميديا",
  "إعلانات",
  "SEO",
  "تصميم",
  "تصوير"
];
