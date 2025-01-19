import { SiteHeader } from "@/components/Navbar"
import { SiteFooter } from "@/components/Footer"
import { CheckoutContent } from "@/components/checkout-content"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <CheckoutContent />
      <SiteFooter />
    </div>
  )
}

