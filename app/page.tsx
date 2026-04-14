import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Uber for <span className="text-accent">Tattoos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Find verified local artists, preview designs with AR, book securely. 
            The future of tattoo booking is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists" className="btn-primary text-lg">
              Find an Artist
            </Link>
            <Link href="/artist/register" className="btn-secondary text-lg">
              I'm an Artist
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why InkVerse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Find Local Artists</h3>
              <p className="text-gray-600">Search by style, price, location, and availability. Verified reviews you can trust.</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">AR Preview</h3>
              <p className="text-gray-600">See how any design looks on your body before you book. No more regrets.</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Secure Bookings</h3>
              <p className="text-gray-600">Deposits held in escrow. No no-shows, no disputes. Book with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent">1.2M+</div>
            <div className="text-gray-600">Monthly Searches</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">$4.2B</div>
            <div className="text-gray-600">US Market Size</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">40%</div>
            <div className="text-gray-600">Americans Tattooed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">8%</div>
            <div className="text-gray-600">Annual Growth</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform the industry?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of artists and clients already on the waitlist.
          </p>
          <Link href="/client/register" className="btn-primary text-lg">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}
