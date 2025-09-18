import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MessageCircle, Users, Clock, Upload, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error('يرجى ملء الحقول المطلوبة');
      return;
    }
    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ email: '', phone: '', name: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      content: "info@multazim.com",
      link: "mailto:info@multazim.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      content: "+962 6 555 0123",
      link: "tel:+962655550123"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "الدردشة المباشرة",
      content: "عبر نافذة الدردشة في أسفل الصفحة"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "وسائل التواصل الاجتماعي",
      content: "فيسبوك، تويتر، إنستغرام"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Mail className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-tajawal">
              اتصل بنا - ملتزم
            </h1>
            <p className="text-xl opacity-90 font-tajawal">
              نحن هنا لمساعدتك في جميع استفساراتك حول نظام الفوترة الوطني
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-lg font-tajawal">
            نحن هنا لمساعدتك! إذا كان لديك أي استفسار أو تحتاج إلى مساعدة بخصوص نظام الفوترة الوطني أو كيفية استخدام موقعنا، لا تتردد في التواصل معنا. نحن ملتزم نقدم أفضل دعم لك.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {method.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-tajawal">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {method.link ? (
                  <a 
                    href={method.link}
                    className="text-primary hover:text-primary/80 transition-colors font-tajawal"
                  >
                    {method.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground font-tajawal">{method.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-tajawal text-right">
                أرسل رسالتك
              </CardTitle>
              <p className="text-muted-foreground text-right font-tajawal">
                املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
                <div>
                  <Label htmlFor="email" className="text-right font-tajawal">
                    البريد الإلكتروني <span className="text-danger">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="mt-2 text-right font-tajawal"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-right font-tajawal">رقم الموبايل</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم الهاتف (اختياري)"
                    className="mt-2 text-right font-tajawal"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="text-right font-tajawal">الاسم</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك الكامل"
                    className="mt-2 text-right font-tajawal"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-right font-tajawal">ما هو الموضوع</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md text-right font-tajawal focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="support">دعم تقني</option>
                    <option value="billing">الفواتير والمدفوعات</option>
                    <option value="account">حساب المستخدم</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-right font-tajawal">
                    الرسالة <span className="text-danger">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                    className="mt-2 text-right font-tajawal resize-none"
                    required
                  />
                </div>

                <div>
                  <Label className="text-right font-tajawal">المرفقات</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm font-tajawal">
                      أضف الملف أو اسحب الملف هنا
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full font-tajawal">
                  <Send className="ml-2 h-4 w-4" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Information */}
          <div className="order-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-tajawal text-right">
                  ما الذي تحتاج إلى المساعدة بشأنه؟
                </CardTitle>
                <p className="text-muted-foreground text-right font-tajawal">
                  يمكنك التواصل معنا عبر العديد من الطرق المختلفة وطلب المساعدة
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4 mx-auto">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="font-tajawal">ساعات العمل</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 font-tajawal">
                  <p className="text-sm text-muted-foreground">الأحد - الخميس</p>
                  <p className="font-semibold">8:00 ص - 6:00 م</p>
                  <p className="text-sm text-muted-foreground">الجمعة - السبت</p>
                  <p className="font-semibold">مغلق</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground font-tajawal leading-relaxed">
                  نحن في ملتزم نسعى لضمان تجربة سلسة وفعالة لك. نرحب بأي استفسار ونقدم الدعم في أي وقت!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;