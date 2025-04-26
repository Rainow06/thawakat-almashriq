"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Leaf, Award, Truck, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "منتجات طبيعية 100%",
      description: "جميع منتجاتنا طبيعية بالكامل وخالية من المواد الحافظة والإضافات الصناعية",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في اختيار وإنتاج منتجاتنا",
    },
    {
      icon: Truck,
      title: "توصيل سريع",
      description: "نوفر خدمة توصيل سريعة وآمنة لجميع مناطق البلاد",
    },
    {
      icon: ShieldCheck,
      title: "ضمان الرضا",
      description: "نضمن رضاك التام عن منتجاتنا أو استرداد أموالك",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="px-3.5 py-1.5 text-base bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200">
            لماذا تختارنا
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-950">ما يميز منتجاتنا</h2>
          <p className="max-w-[700px] text-lg text-amber-800/80">
            نحرص على تقديم أفضل المنتجات بأعلى معايير الجودة لضمان رضاكم
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-amber-100 hover:border-amber-200 hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-amber-700">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
