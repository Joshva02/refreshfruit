"'use client'"

import { CartProvider } from "@/contetexts/CartContext"


export function CartProviderWrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}

