'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg.jpg-RJfOyH9AeHutBZe71vLKa3Wvh41QIi.jpeg"
          alt="Fresh cut fruits"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-yellow-400">Fresh</span> Cut Fruits for{""}
            <span className="text-yellow-400">Carnival</span> Season
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium quality fresh-cut fruits, perfectly packaged for your carnival events and celebrations.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8"
              asChild
            >
              <motion.a 
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Packages
              </motion.a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 bg-black hover:text-white text-lg px-8"
              asChild
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

