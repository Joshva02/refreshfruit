import { SiteHeader } from "@/components/Navbar"
import { SiteFooter } from "@/components/Footer"
import { MenuContent } from "@/components/menu-content"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <MenuContent />
      <SiteFooter />
    </div>
  )
}

