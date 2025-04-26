"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-amber-900">ذواقة المشرق</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
              <Link href="/" className="px-4 py-2 text-amber-900 hover:text-amber-700 font-medium">
                الرئيسية
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="px-4 py-2 text-amber-900 hover:text-amber-700 font-medium">
                    المنتجات
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      السمن البلدي
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      العسل الطبيعي
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      زيت الزيتون
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      الأجبان
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      المكسرات
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      جميع المنتجات
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="#about" className="px-4 py-2 text-amber-900 hover:text-amber-700 font-medium">
                من نحن
              </Link>
              <Link href="#contact" className="px-4 py-2 text-amber-900 hover:text-amber-700 font-medium">
                تواصل معنا
              </Link>
            </nav>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="icon" className="text-amber-900 hover:text-amber-700 hover:bg-amber-50">
                <Search className="h-5 w-5" />
                <span className="sr-only">بحث</span>
              </Button>

              <Button variant="ghost" size="icon" className="text-amber-900 hover:text-amber-700 hover:bg-amber-50">
                <User className="h-5 w-5" />
                <span className="sr-only">حسابي</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-amber-900 hover:text-amber-700 hover:bg-amber-50"
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-amber-700 text-white">
                  3
                </Badge>
                <span className="sr-only">سلة التسوق</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">القائمة</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* القائمة المتحركة للجوال */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold text-amber-900">ذواقة المشرق</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">إغلاق</span>
              </Button>
            </div>

            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className="py-3 px-4 text-amber-900 hover:bg-amber-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <div className="py-3 px-4 text-amber-900 font-medium">المنتجات</div>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                السمن البلدي
              </Link>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                العسل الطبيعي
              </Link>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                زيت الزيتون
              </Link>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                الأجبان
              </Link>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                المكسرات
              </Link>
              <Link
                href="#"
                className="py-2 px-8 text-amber-800 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                جميع المنتجات
              </Link>
              <Link
                href="#about"
                className="py-3 px-4 text-amber-900 hover:bg-amber-50 rounded-md font-medium mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="#contact"
                className="py-3 px-4 text-amber-900 hover:bg-amber-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                تواصل معنا
              </Link>
            </nav>

            <div className="mt-auto p-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-900 font-medium">حسابي</span>
                <User className="h-5 w-5 text-amber-700" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-900 font-medium">سلة التسوق</span>
                <div className="flex items-center">
                  <span className="text-amber-900 font-medium ml-2">3 منتجات</span>
                  <ShoppingCart className="h-5 w-5 text-amber-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
