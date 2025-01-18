import Link from "next/link"
import { Instagram, Phone, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-Stde2pAtTqZcKtpnEIrU7nZ5sZBfJM.jpeg" alt="Refresh Fruits Logo" className="h-10" />
        </Link>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="text-white hover:text-yellow-400">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black w-[300px] border-r border-zinc-800">
            <nav className="flex flex-col gap-4">
              <Link href="/products/carnival" className="text-white bg-black hover:text-yellow-400 text-lg">
                Carnival Package
              </Link>
              <Link href="/products/fruits" className="text-white hover:text-yellow-400 text-lg">
                Fresh Fruits
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
              <NavigationMenuTrigger className="text-black bg-yellow-400 hover:text-white ">Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] bg-black">
                  <Link href="/products/carnival" className="group grid gap-1 hover:bg-zinc-900 p-3 rounded-lg">
                    <div className="text-white font-medium group-hover:text-yellow-400">Carnival Package</div>
                    <div className="text-zinc-400 text-sm">Special event packages for carnival season</div>
                  </Link>
                  <Link href="/products/fruits" className="group grid gap-1 hover:bg-zinc-900 p-3 rounded-lg">
                    <div className="text-white font-medium group-hover:text-yellow-400">Fresh Fruits</div>
                    <div className="text-zinc-400 text-sm">Our selection of fresh cut fruits</div>
                  </Link>
                </div>
              </NavigationMenuContent>
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
        <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
          <Link href="https://instagram.com/refreshfruitstt" className="text-white hover:text-yellow-400">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="tel:295-5069" className="text-white hover:text-yellow-400">
            <Phone className="h-5 w-5" />
          </Link>
          <Link href="mailto:refreshfruitstt@email.com" className="text-white hover:text-yellow-400">
            <Mail className="h-5 w-5" />
          </Link>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Order Now</Button>
        </div>
      </div>
    </header>
  )
}

