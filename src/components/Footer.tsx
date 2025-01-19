import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Refresh Fruits</h3>
            <p className="text-sm text-gray-400">
              Bringing fresh, quality fruits to your carnival celebrations.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-yellow-400">Products</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Us</h4>
            <p className="text-sm text-gray-400">123 Fruit Street, Port of Spain, Trinidad</p>
            <p className="text-sm text-gray-400">Phone: (868) 295-5069</p>
            <p className="text-sm text-gray-400">Email: info@refreshfruits.com</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Newsletter</h4>
            <p className="text-sm text-gray-400">Stay updated with our latest offers</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-500"
              />
              <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2025 Refresh Fruits. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

