"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: number
  name: string
  description: string
  price: string
  originalPrice?: string
  image: string
  rating?: number
  isNew?: boolean
  isBestSeller?: boolean
  discount?: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`,
    })
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card
        className="overflow-hidden border-amber-100 hover:border-amber-200 transition-all"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="relative h-64 overflow-hidden bg-amber-50">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />

            {product.discount && (
              <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0">خصم {product.discount}%</Badge>
            )}

            {product.isNew && <Badge className="absolute top-3 right-3 bg-green-500 text-white border-0">جديد</Badge>}

            {product.isBestSeller && (
              <Badge className="absolute top-3 right-3 bg-amber-500 text-white border-0">الأكثر مبيعاً</Badge>
            )}

            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 left-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${
                isFavorite ? "text-red-500 hover:text-red-600" : "text-amber-700 hover:text-amber-800"
              }`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
              <span className="sr-only">إضافة للمفضلة</span>
            </Button>

            <div
              className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-20 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`absolute inset-x-0 bottom-0 p-4 transition-transform duration-300 ${
                isHovered ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={handleAddToCart}>
                إضافة للسلة
                <ShoppingCart className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="mb-2">
            {product.rating && (
              <div className="flex items-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating!) ? "text-amber-500 fill-amber-500" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-amber-800 text-sm mr-1">{product.rating}</span>
              </div>
            )}
            <h3 className="font-bold text-amber-900 text-lg hover:text-amber-700 transition-colors">{product.name}</h3>
          </div>
          <p className="text-amber-700 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-amber-900">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-amber-500 line-through mr-2">{product.originalPrice}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
