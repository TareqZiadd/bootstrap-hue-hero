import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background font-tajawal" dir="rtl">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-card p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            إخلاء المسؤولية – موقع ملتزم
          </h1>
          
          <div className="text-secondary mb-8 text-center">
            تاريخ آخر تحديث: 6 آب 2025
          </div>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <p className="text-lg">
                مرحبًا بك في موقع "ملتزم"، محرك البحث المتخصص في الأنشطة الاقتصادية الملتزمة بنظام الفوترة الوطني في الأردن. 
                يُرجى قراءة إخلاء المسؤولية بعناية قبل استخدام الموقع أو الاعتماد على أي من المعلومات المتوفرة فيه.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. طبيعة الخدمة</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• موقع "ملتزم" هو محرك بحث يقدم منصة لعرض الأنشطة الاقتصادية وتسهيل التواصل بين مقدمي الخدمات والعملاء.</li>
                <li>• الموقع لا يقدم خدمات مالية أو محاسبية أو قانونية مباشرة، بل يقتصر دوره على التوسط الإلكتروني.</li>
                <li>• لا نضمن استمرارية الخدمة أو خلوها من الأخطاء الفنية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. مسؤولية المحتوى</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• المعلومات المعروضة في الموقع مقدمة من المستخدمين أنفسهم، وإدارة الموقع غير مسؤولة عن دقتها أو صحتها.</li>
                <li>• لا نتحمل أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنتج عن الاعتماد على هذه المعلومات.</li>
                <li>• ننصح بالتحقق من صحة المعلومات من مصادرها الرسمية قبل اتخاذ أي قرارات مالية أو تجارية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. التعاملات التجارية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• أي تعاملات تجارية أو مالية تتم بين المستخدمين تقع خارج نطاق مسؤولية الموقع.</li>
                <li>• لا نضمن جودة الخدمات أو المنتجات المقدمة من قبل الأنشطة المعروضة في الموقع.</li>
                <li>• في حال وجود نزاعات، يتوجب على الأطراف حلها فيما بينهم أو اللجوء للجهات المختصة.</li>
                <li>• الموقع غير مسؤول عن أي خسائر مالية أو أضرار قد تنتج عن التعاملات بين المستخدمين.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. التحقق من الأنشطة الاقتصادية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• نبذل جهدًا معقولًا للتحقق من صحة المعلومات المقدمة، لكننا لا نضمن دقتها بنسبة 100%.</li>
                <li>• عملية التحقق تعتمد على الوثائق المقدمة من المستخدمين والمصادر المتاحة عبر الإنترنت.</li>
                <li>• في حال اكتشاف معلومات خاطئة، نحتفظ بالحق في إزالة النشاط أو تعليق الحساب دون إشعار مسبق.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. الروابط الخارجية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• قد يحتوي الموقع على روابط لمواقع أخرى، ونحن غير مسؤولين عن محتوى هذه المواقع أو سياساتها.</li>
                <li>• استخدام أي روابط خارجية يكون على مسؤولية المستخدم الخاصة.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. العمولات والمدفوعات</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• العمولات المدفوعة عبر الموقع خاضعة لشروط محددة وقد تتأخر لأسباب فنية أو إدارية.</li>
                <li>• لا نضمن استمرارية برامج العمولات أو ثبات المبالغ المستحقة.</li>
                <li>• في حال الاشتباه في أي نشاط احتيالي، نحتفظ بالحق في تجميد أو إلغاء العمولات.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. الأعطال الفنية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• قد يواجه الموقع أعطالًا فنية أو انقطاعًا في الخدمة، ونحن غير مسؤولين عن أي أضرار قد تنتج عن ذلك.</li>
                <li>• نبذل جهدنا لضمان استمرارية الخدمة، لكننا لا نقدم أي ضمانات في هذا الصدد.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. حماية البيانات</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• رغم اتخاذنا تدابير أمنية لحماية البيانات، لا يمكننا ضمان الحماية المطلقة ضد الاختراقات أو تسريب البيانات.</li>
                <li>• المستخدم مسؤول عن الحفاظ على سرية معلومات حسابه وكلمة المرور.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. التغييرات في الخدمة</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• نحتفظ بالحق في تعديل أو إيقاف أي جزء من الخدمة دون إشعار مسبق.</li>
                <li>• قد تتغير شروط الاستخدام أو الرسوم في أي وقت، وسيتم إشعار المستخدمين عبر الموقع.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. المسؤولية القانونية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• لا نتحمل أي مسؤولية قانونية تجاه أي طرف ثالث نتيجة استخدام الموقع.</li>
                <li>• المستخدم وحده المسؤول عن التزامه بالقوانين المحلية والدولية.</li>
                <li>• في حال وجود أي نزاعات قانونية، تخضع للقوانين الأردنية ومحاكم المملكة الأردنية الهاشمية.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. إخلاء المسؤولية الطبية والقانونية</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• أي معلومات طبية أو قانونية مقدمة عبر الموقع هي لأغراض إعلامية فقط ولا تشكل استشارة مهنية.</li>
                <li>• ننصح بشدة بالرجوع إلى المختصين المؤهلين للحصول على المشورة المناسبة.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. حدود المسؤولية</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-lg font-semibold">
                  في جميع الأحوال، تقتصر مسؤوليتنا على المبلغ المدفوع فعليًا للموقع من قبل المستخدم، 
                  ولا تتجاوز هذه المسؤولية في أي حال من الأحوال مبلغ 100 دينار أردني.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. الاتصال بنا</h2>
              <div className="bg-gradient-primary text-white p-6 rounded-lg">
                <p className="mb-4">للاستفسارات حول إخلاء المسؤولية أو أي مسائل قانونية:</p>
                <div className="space-y-2">
                  <p>📧 البريد الإلكتروني: [أدخل البريد الرسمي]</p>
                  <p>📞 الهاتف: [أدخل رقم الاتصال]</p>
                </div>
              </div>
            </section>

            <section className="border-t border-muted pt-8">
              <div className="bg-warning/10 border border-warning/20 p-6 rounded-lg">
                <p className="text-center font-semibold text-lg">
                  <strong>تذكير مهم:</strong> باستخدامك لهذا الموقع، فإنك تقر بفهمك وقبولك لجميع بنود إخلاء المسؤولية الواردة أعلاه.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;