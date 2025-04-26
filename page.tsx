import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { products, categories, testimonials } from "@/data/products"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        {/* فئات المنتجات */}
        <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
                فئات منتجاتنا
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">تصفح منتجاتنا حسب الفئة</h2>
              <p className="max-w-[700px] text-lg text-amber-800/80">
                نقدم لكم مجموعة متنوعة من المنتجات السورية الأصيلة المصنعة بطرق تقليدية وبمكونات طبيعية 100%
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-amber-100/50 transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-amber-900/20 opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="relative p-6 flex flex-col items-center justify-center h-40 text-center">
                    <category.icon className="h-10 w-10 text-amber-50 mb-3" />
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* المنتجات المميزة */}
        <section id="products" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
                منتجاتنا المميزة
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">
                أجود المنتجات السورية الأصيلة
              </h2>
              <p className="max-w-[700px] text-lg text-amber-800/80">
                منتجات مختارة بعناية من أفضل المصادر في سوريا، محضرة بطرق تقليدية للحفاظ على النكهة الأصلية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                عرض جميع المنتجات
              </Button>
            </div>
          </div>
        </section>

        {/* مميزات منتجاتنا */}
        <FeaturesSection />

        {/* قصتنا */}
        <section className="py-16 bg-amber-50/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-50" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-300 rounded-full opacity-30" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="aspect-[4/3] bg-amber-100">
                    {/* هنا ستضع صورتك */}
                    <div className="w-full h-full bg-amber-200/50 flex items-center justify-center text-amber-800">
                      صورة قصتنا
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
                  قصتنا
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">من قلب حلب إلى العالم</h2>
                <div className="space-y-4 text-lg text-amber-800/90">
                  <p>
                    بدأت رحلة "ذواقة المشرق" من قلب مدينة حلب العريقة، حاملين معنا تراث وأصالة المطبخ السوري والشامي
                    الأصيل.
                  </p>
                  <p>
                    نحرص على انتقاء أجود المكونات من مصادرها الأصلية، ونتبع الطرق التقليدية في الإنتاج للحفاظ على
                    النكهات الأصيلة التي تميز منتجاتنا.
                  </p>
                  <p>هدفنا هو نقل تجربة المذاق الشرقي الأصيل إلى مائدتكم، بكل ما تحمله من عراقة وأصالة.</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-800 text-xl font-bold">١٥+</span>
                    </div>
                    <div className="text-amber-900">
                      <p className="font-semibold">سنوات من الخبرة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-800 text-xl font-bold">١٠٠٪</span>
                    </div>
                    <div className="text-amber-900">
                      <p className="font-semibold">منتجات طبيعية</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-amber-800 text-xl font-bold">٥٠+</span>
                    </div>
                    <div className="text-amber-900">
                      <p className="font-semibold">منتج متنوع</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-4 bg-amber-800 hover:bg-amber-900 text-white">اقرأ المزيد عن قصتنا</Button>
              </div>
            </div>
          </div>
        </section>

        {/* آراء العملاء */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
                آراء العملاء
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">ماذا يقول عملاؤنا</h2>
              <p className="max-w-[700px] text-lg text-amber-800/80">نفخر بثقة عملائنا وسعادتهم بمنتجاتنا الأصيلة</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* النشرة البريدية */}
        <NewsletterSection />

        {/* تواصل معنا */}
        <section id="contact" className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
                تواصل معنا
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">نحن هنا لمساعدتك</h2>
              <p className="max-w-[700px] text-lg text-amber-800/80">
                لديك استفسار أو ترغب في طلب منتجاتنا؟ لا تتردد في التواصل معنا
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">معلومات الاتصال</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-800"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-1">رقم الهاتف</h4>
                        <p className="text-amber-800 text-lg">+963 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-800"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-1">البريد الإلكتروني</h4>
                        <p className="text-amber-800 text-lg">info@thawakat-almashriq.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-800"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-1">العنوان</h4>
                        <p className="text-amber-800 text-lg">شارع الأصيل، حي الشهباء، حلب، سوريا</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">ساعات العمل</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-amber-100">
                      <span className="text-amber-800">الأحد - الخميس</span>
                      <span className="font-semibold text-amber-900">9:00 ص - 8:00 م</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-amber-100">
                      <span className="text-amber-800">الجمعة</span>
                      <span className="font-semibold text-amber-900">9:00 ص - 12:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-800">السبت</span>
                      <span className="font-semibold text-amber-900">مغلق</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-amber-100">
                  <div className="aspect-video bg-amber-100">
                    {/* هنا ستضع خريطة جوجل أو صورة للخريطة */}
                    <div className="w-full h-full bg-amber-200/50 flex items-center justify-center text-amber-800">
                      خريطة الموقع
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
