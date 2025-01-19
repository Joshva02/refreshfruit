"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contetexts/CartContext"
import { useToast } from "@/hooks/use-toast"

export function CheckoutContent() {
  const { cart, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "''",
    email: "''",
    address: "''",
    city: "''",
    zipCode: "''",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically process the payment and send the order to your backend
    console.log("'Order submitted:'", { ...formData, cart, total })
    toast({
      title: "Order Placed!",
      description: "Thank you for your order. We'll be in touch soon!",
    })
    clearCart()
    // Redirect to a thank you page or back to the menu
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-zinc-900 border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2 border-b border-zinc-800">
                <span className="text-white">{item.name} x {item.quantity}</span>
                <span className="text-yellow-400">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 font-bold">
              <span className="text-white">Total</span>
              <span className="text-yellow-400">${total.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-400">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-white">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-white">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-white">Zip Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Place Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

