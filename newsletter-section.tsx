"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // محاكاة إرسال البريد الإلكتروني
    setTimeout(() => {
      toast({
        title: "تم الاشتراك بنجاح!",
        description: "شكراً لاشتراكك في نشرتنا البريدية.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
          <p className="text-lg text-amber-100 mb-8">
            احصل على آخر العروض والمنتجات الجديدة مباشرة إلى بريدك الإلكتروني
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-amber-700 text-white placeholder:text-amber-200 focus-visible:ring-amber-500"
            />
            <Button
              type="submit"
              className="bg-amber-100 hover:bg-white text-amber-900 font-medium"
              disabled={isLoading}
            >
              {isLoading ? "جاري الاشتراك..." : "اشترك الآن"}
            </Button>
          </form>

          <p className="text-sm text-amber-200 mt-4">
            لن نشارك بريدك الإلكتروني مع أي جهة أخرى ويمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  )
}
