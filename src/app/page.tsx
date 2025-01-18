import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductPreviewCarousel } from "@/components/product-preview-carousel"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <div className="flex-grow">
        <HeroSection />
        <ProductPreviewCarousel />
      </div>
      <SiteFooter />
    </main>
  )
}

