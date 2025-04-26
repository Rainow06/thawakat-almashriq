"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "ذواقة المشرق",
      subtitle: "نكهات حلب الأصيلة",
      description: "سمن بلدي، عسل طبيعي، زيت زيتون، وجبنة سورية فاخرة",
      image: "/placeholder.svg?height=800&width=1600",
      color: "from-amber-900/80 to-amber-800/60",
    },
    {
      title: "منتجات طبيعية 100%",
      subtitle: "بدون إضافات أو مواد حافظة",
      description: "نحرص على تقديم منتجات طبيعية خالية من المواد الحافظة والإضافات الصناعية",
      image: "/placeholder.svg?height=800&width=1600",
      color: "from-amber-800/80 to-amber-700/60",
    },
    {
      title: "وصفات تقليدية أصيلة",
      subtitle: "من تراث المطبخ السوري",
      description: "منتجاتنا مصنعة وفق وصفات تقليدية متوارثة عبر الأجيال",
      image: "/placeholder.svg?height=800&width=1600",
      color: "from-amber-700/80 to-amber-600/60",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-l bg-black/10" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative h-full container px-4 md:px-6 flex items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2"
              >
                <span className="inline-block bg-amber-200 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {slide.subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full">
                  تسوق الآن
                  <ChevronLeft className="mr-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-6" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
