import { SiteHeader } from "@/components/Navbar"
import { SiteFooter } from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center">About Refresh Fruits</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
          <p>
            Welcome to Refresh Fruits, your premier source for fresh, delicious, and perfectly packaged fruits for all your carnival celebrations and events.
          </p>
          <p>
            Founded in 2020, Refresh Fruits was born out of a passion for bringing the vibrant flavors of the Caribbean to carnival-goers and fruit enthusiasts alike. Our journey began with a simple idea: to provide convenient, high-quality fresh fruit packages that capture the essence of Trinidad and Tobago&apos;s rich fruit heritage.
          </p>
          <p>
            At Refresh Fruits, we take pride in sourcing the freshest, locally-grown fruits. Our team of dedicated fruit experts carefully selects, cuts, and packages each fruit to ensure maximum freshness and flavor. We understand the importance of quality and convenience, especially during the bustling carnival season.
          </p>
          <p>
            Our commitment goes beyond just providing great fruits. We strive to support local farmers, promote healthy snacking options, and contribute to the vibrant culture of our community. With every package of Refresh Fruits, you&apos;re not just enjoying a delicious snack – you&apos;re partaking in a celebration of our local flavors and traditions.
          </p>
          <p>
            Whether you&apos;re planning a large carnival event, a small gathering, or simply want to enjoy our fruits at home, Refresh Fruits is here to add a burst of freshness to your day. Join us in our mission to refresh, revitalize, and celebrate with the best fruits Trinidad and Tobago has to offer!
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

