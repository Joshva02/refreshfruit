import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const products = [
  { name: 'Mango Delight', price: '$5.99', description: 'Sweet and juicy mango chunks', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Pineapple Paradise', price: '$6.99', description: 'Refreshing pineapple pieces', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Tropical Mix', price: '$7.99', description: 'A colorful mix of tropical fruits', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Watermelon Wonder', price: '$5.99', description: 'Crisp and hydrating watermelon cubes', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Berry Blast', price: '$6.99', description: 'Assortment of fresh berries', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Citrus Sensation', price: '$7.99', description: 'Zesty mix of citrus fruits', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Pomme Cythere Punch', price: '$6.99', description: 'Exotic pomme cythere (golden apple) chunks', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Coconut Refresher', price: '$5.99', description: 'Fresh coconut pieces and coconut water', image: '/placeholder.svg?height=200&width=200' },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Fresh Fruit Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-zinc-900 border-yellow-400/20">
              <CardContent className="p-4">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <Badge variant="secondary" className="bg-yellow-400 text-black">
                  {product.price}
                </Badge>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}