"'use client'"

import Link from "next/link"
import { Instagram, Phone, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Cart } from "@/components/cart"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-Stde2pAtTqZcKtpnEIrU7nZ5sZBfJM.jpeg" alt="Refresh Fruits Logo" className="h-10"/>
        </Link>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="text-white hover:text-yellow-400">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black w-[300px] border-r border-zinc-800">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white hover:text-yellow-400 text-lg">
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-yellow-400 text-lg">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 text-lg">
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 text-lg">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-yellow-400 px-4 py-2">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/menu" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-yellow-400 px-4 py-2">
                  Menu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-yellow-400 px-4 py-2">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-yellow-400 px-4 py-2">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://instagram.com/refreshfruitstt" className="text-white hover:text-yellow-400">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="tel:295-5069" className="text-white hover:text-yellow-400">
            <Phone className="h-5 w-5" />
          </Link>
          <Link href="mailto:refreshfruitstt@email.com" className="text-white hover:text-yellow-400">
            <Mail className="h-5 w-5" />
          </Link>
          <Cart />
        </div>
      </div>
    </header>
  )
}

