import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { LogOut, Code, Activity, Mail, Users, TrendingUp, Globe, Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GTMConfig {
  id: string;
  container_id: string;
  name: string;
  is_active: boolean;
  created_at: string;
}

interface AnalyticsEvent {
  id: string;
  event_name: string;
  event_data: any;
  page_path: string;
  created_at: string;
}

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string;
  created_at: string;
}

export default function Dashboard() {
  const { user, signOut, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [gtmConfigs, setGtmConfigs] = useState<GTMConfig[]>([]);
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([]);
  const [contactRequests, setContactRequests] = useState<ContactRequest[]>([]);
  const [newGTM, setNewGTM] = useState({ container_id: '', name: '' });
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalContacts: 0,
    todayEvents: 0,
    todayContacts: 0,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      loadGTMConfigs();
      loadAnalyticsEvents();
      loadContactRequests();
      loadStats();
      
      // Subscribe to realtime updates for analytics
      const channel = supabase
        .channel('analytics-changes')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'analytics_events'
          },
          (payload) => {
            setAnalyticsEvents(prev => [payload.new as AnalyticsEvent, ...prev]);
            loadStats();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, isAdmin]);

  const loadGTMConfigs = async () => {
    const { data, error } = await supabase
      .from('gtm_configs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setGtmConfigs(data);
    }
  };

  const loadAnalyticsEvents = async () => {
    const { data, error } = await supabase
      .from('analytics_events')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    
    if (!error && data) {
      setAnalyticsEvents(data);
    }
  };

  const loadContactRequests = async () => {
    const { data, error } = await supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setContactRequests(data);
    }
  };

  const loadStats = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { count: totalEvents } = await supabase
      .from('analytics_events')
      .select('*', { count: 'exact', head: true });

    const { count: totalContacts } = await supabase
      .from('contact_requests')
      .select('*', { count: 'exact', head: true });

    const { count: todayEvents } = await supabase
      .from('analytics_events')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today.toISOString());

    const { count: todayContacts } = await supabase
      .from('contact_requests')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today.toISOString());

    setStats({
      totalEvents: totalEvents || 0,
      totalContacts: totalContacts || 0,
      todayEvents: todayEvents || 0,
      todayContacts: todayContacts || 0,
    });
  };

  const handleAddGTM = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newGTM.container_id.startsWith('GTM-')) {
      toast.error('Container ID يجب أن يبدأ بـ GTM-');
      return;
    }

    const { error } = await supabase
      .from('gtm_configs')
      .insert([{
        container_id: newGTM.container_id,
        name: newGTM.name,
        created_by: user?.id,
      }]);

    if (error) {
      toast.error('حدث خطأ أثناء إضافة GTM');
    } else {
      toast.success('تم إضافة GTM بنجاح');
      setNewGTM({ container_id: '', name: '' });
      loadGTMConfigs();
    }
  };

  const toggleGTMActive = async (id: string, is_active: boolean) => {
    const { error } = await supabase
      .from('gtm_configs')
      .update({ is_active: !is_active })
      .eq('id', id);

    if (!error) {
      toast.success('تم تحديث الحالة');
      loadGTMConfigs();
    }
  };

  const deleteGTM = async (id: string) => {
    const { error } = await supabase
      .from('gtm_configs')
      .delete()
      .eq('id', id);

    if (!error) {
      toast.success('تم الحذف بنجاح');
      loadGTMConfigs();
    }
  };

  const copyGTMCode = (containerId: string) => {
    const gtmCode = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

    navigator.clipboard.writeText(gtmCode);
    setCopiedId(containerId);
    toast.success('تم نسخ كود GTM');
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">جاري التحميل...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>غير مصرح</CardTitle>
            <CardDescription>ليس لديك صلاحيات للوصول إلى لوحة التحكم</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/')} className="w-full">
              العودة للرئيسية
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="لوحة التحكم - بوابة الغربية"
        description="لوحة تحكم إدارة GTM والتحليلات"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-accent/5" dir="rtl">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">لوحة التحكم</h1>
              <p className="text-sm text-muted-foreground">مرحباً، {user?.email}</p>
            </div>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="ml-2 h-4 w-4" />
              تسجيل الخروج
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">إجمالي الأحداث</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalEvents}</div>
                <p className="text-xs text-muted-foreground">
                  اليوم: {stats.todayEvents}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">طلبات التواصل</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalContacts}</div>
                <p className="text-xs text-muted-foreground">
                  اليوم: {stats.todayContacts}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">أكواد GTM</CardTitle>
                <Code className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{gtmConfigs.length}</div>
                <p className="text-xs text-muted-foreground">
                  نشط: {gtmConfigs.filter(g => g.is_active).length}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">معدل النشاط</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalEvents > 0 ? Math.round((stats.todayEvents / stats.totalEvents) * 100) : 0}%
                </div>
                <p className="text-xs text-muted-foreground">من الإجمالي اليوم</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="gtm" className="space-y-4">
            <TabsList>
              <TabsTrigger value="gtm">إدارة GTM</TabsTrigger>
              <TabsTrigger value="analytics">التحليلات</TabsTrigger>
              <TabsTrigger value="contacts">طلبات التواصل</TabsTrigger>
            </TabsList>

            {/* GTM Management */}
            <TabsContent value="gtm" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>إضافة كود GTM جديد</CardTitle>
                  <CardDescription>أضف Container ID من Google Tag Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddGTM} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="container_id">Container ID</Label>
                        <Input
                          id="container_id"
                          placeholder="GTM-XXXXXXX"
                          value={newGTM.container_id}
                          onChange={(e) => setNewGTM({ ...newGTM, container_id: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم</Label>
                        <Input
                          id="name"
                          placeholder="الموقع الرئيسي"
                          value={newGTM.name}
                          onChange={(e) => setNewGTM({ ...newGTM, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit">إضافة GTM</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>أكواد GTM المفعلة</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Container ID</TableHead>
                        <TableHead>الاسم</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>تاريخ الإضافة</TableHead>
                        <TableHead>نسخ الكود</TableHead>
                        <TableHead>الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {gtmConfigs.map((config) => (
                        <TableRow key={config.id}>
                          <TableCell className="font-mono">{config.container_id}</TableCell>
                          <TableCell>{config.name}</TableCell>
                          <TableCell>
                            <Badge variant={config.is_active ? 'default' : 'secondary'}>
                              {config.is_active ? 'نشط' : 'معطل'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(config.created_at).toLocaleDateString('ar-SA')}
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyGTMCode(config.container_id)}
                              className="gap-2"
                            >
                              {copiedId === config.container_id ? (
                                <>
                                  <Check className="h-4 w-4" />
                                  تم النسخ
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4" />
                                  نسخ الكود
                                </>
                              )}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toggleGTMActive(config.id, config.is_active)}
                              >
                                {config.is_active ? 'تعطيل' : 'تفعيل'}
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteGTM(config.id)}
                              >
                                حذف
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>آخر الأحداث</CardTitle>
                  <CardDescription>تحديث تلقائي في الوقت الفعلي</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الحدث</TableHead>
                        <TableHead>الصفحة</TableHead>
                        <TableHead>البيانات</TableHead>
                        <TableHead>الوقت</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {analyticsEvents.slice(0, 50).map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.event_name}</TableCell>
                          <TableCell>{event.page_path}</TableCell>
                          <TableCell>
                            <code className="text-xs">
                              {JSON.stringify(event.event_data || {}).substring(0, 50)}...
                            </code>
                          </TableCell>
                          <TableCell>
                            {new Date(event.created_at).toLocaleString('ar-SA')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contact Requests */}
            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>طلبات التواصل</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الاسم</TableHead>
                        <TableHead>البريد الإلكتروني</TableHead>
                        <TableHead>الهاتف</TableHead>
                        <TableHead>الشركة</TableHead>
                        <TableHead>الرسالة</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>التاريخ</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>{request.name}</TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell>{request.phone}</TableCell>
                          <TableCell>{request.company || '-'}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {request.message}
                          </TableCell>
                          <TableCell>
                            <Badge variant={request.status === 'new' ? 'default' : 'secondary'}>
                              {request.status === 'new' ? 'جديد' : request.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(request.created_at).toLocaleDateString('ar-SA')}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}