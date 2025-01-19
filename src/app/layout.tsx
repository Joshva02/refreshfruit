import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { CartProviderWrapper } from "@/components/cart-provider-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Refresh Fruits",
  description: "Fresh cut fruits for to satisfy your pallette",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProviderWrapper>
          {children}
          <Toaster />
        </CartProviderWrapper>
      </body>
    </html>
  )
}

