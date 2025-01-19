import { HeroSection } from "@/components/hero-section"
import { SiteFooter } from "@/components/Footer"
import { CarouselDemo } from "@/components/Carousel"
import { SiteHeader } from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <div className="flex-grow">
        <HeroSection />
        <CarouselDemo />
      </div>
      <SiteFooter />
    </main>
  )
}

