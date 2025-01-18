'use client'

import React from 'react'
import Slider from 'react-slick'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const products = [
  { name: "'Mango Delight'", price: "'$5.99'", image: "'/placeholder.svg?height=200&width=200'" },
  { name: "'Pineapple Paradise'", price: "'$6.99'", image: "'/placeholder.svg?height=200&width=200'" },
  { name: "'Tropical Mix'", price: "'$7.99'", image: "'/placeholder.svg?height=200&width=200'" },
  { name: "'Watermelon Wonder'", price: "'$5.99'", image: "'/placeholder.svg?height=200&width=200'" },
  { name: "'Berry Blast'", price: "'$6.99'", image: "'/placeholder.svg?height=200&width=200'" },
  { name: "'Citrus Sensation'", price: "'$7.99'", image: "'/placeholder.svg?height=200&width=200'" },
]

export function ProductPreviewCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "'linear'",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Fresh Selections</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <Card className="bg-zinc-900 border-yellow-400/20">
                <CardContent className="p-4">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <Badge variant="secondary" className="bg-yellow-400 text-black">
                    {product.price}
                  </Badge>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 inline-flex items-center">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

