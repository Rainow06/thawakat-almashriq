import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ذواقة المشرق</h3>
            <p className="mb-4 text-amber-300/80">
              نكهات حلب الأصيلة — سمن بلدي، عسل طبيعي، زيت زيتون، وجبنة سورية فاخرة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="text-amber-300 hover:text-white hover:bg-amber-900/50">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-300 hover:text-white hover:bg-amber-900/50">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-300 hover:text-white hover:bg-amber-900/50">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-300 hover:text-white hover:bg-amber-900/50">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">يوتيوب</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-amber-300/80 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-amber-300/80 hover:text-white transition-colors">
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-amber-300/80 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-amber-300/80 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">فئات المنتجات</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  السمن البلدي
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  العسل الطبيعي
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  زيت الزيتون
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  الأجبان
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  المكسرات
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-300/80 hover:text-white transition-colors">
                  المربيات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-400 ml-3 mt-1 flex-shrink-0" />
                <span className="text-amber-300/80">شارع الأصيل، حي الشهباء، حلب، سوريا</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-400 ml-3 mt-1 flex-shrink-0" />
                <span className="text-amber-300/80">+963 123 456 789</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-400 ml-3 mt-1 flex-shrink-0" />
                <span className="text-amber-300/80">info@thawakat-almashriq.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-300/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ذواقة المشرق. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-amber-300/70 text-sm hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="#" className="text-amber-300/70 text-sm hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-amber-300/70 text-sm hover:text-white transition-colors">
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
