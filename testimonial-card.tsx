"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  location: string
  text: string
  avatar: string
  rating?: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="h-full border-amber-100 hover:border-amber-200 transition-all">
        <CardContent className="p-6">
          <div className="mb-4 text-amber-500">
            <Quote className="h-8 w-8 opacity-30" />
          </div>

          <p className="text-amber-800 mb-6 italic">{testimonial.text}</p>

          {testimonial.rating && (
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating! ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                />
              ))}
            </div>
          )}

          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-amber-200">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mr-4">
              <h3 className="font-bold text-amber-900">{testimonial.name}</h3>
              <p className="text-amber-700 text-sm">{testimonial.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
