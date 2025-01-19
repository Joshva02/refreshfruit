"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/Navbar"
import { SiteFooter } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "''",
    email: "''",
    message: "''"
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("'Form submitted:'", formData)
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    })
    setFormData({ name: "''", email: "''", message: "''" })
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 mb-6 text-center">
            Have questions or want to place an order? Reach out to us using the form below or contact us directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400">Our Information</h2>
              <p className="text-gray-300">123 Fruit Street, Port of Spain, Trinidad</p>
              <p className="text-gray-300">Phone: (868) 295-5069</p>
              <p className="text-gray-300">Email: info@refreshfruits.com</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400">Business Hours</h2>
              <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-300">Saturday: 10am - 4pm</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-500"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-500"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-gray-300 placeholder-gray-500"
              rows={5}
            />
            <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

