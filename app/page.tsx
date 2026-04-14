import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Perfect <span className="text-accent">Tattoo Artist</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Search verified local artists, preview designs with AR, and book securely. 
            The modern way to get ink'd.
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
      <section className="bg-dark-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why InkVerse?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center border border-dark-700">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Find Local Artists</h3>
              <p className="text-gray-400">Search by style, price, location, and availability. Verified reviews you can trust.</p>
            </div>
            <div className="card p-8 text-center border border-dark-700">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">AR Preview</h3>
              <p className="text-gray-400">See how any design looks on your body before you book. No more regrets.</p>
            </div>
            <div className="card p-8 text-center border border-dark-700">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Secure Bookings</h3>
              <p className="text-gray-400">Deposits held in escrow. No no-shows, no disputes. Book with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark-800 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent">1.2M+</div>
            <div className="text-gray-400">Monthly Searches</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">$4.2B</div>
            <div className="text-gray-400">US Market Size</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">40%</div>
            <div className="text-gray-400">Americans Tattooed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">8%</div>
            <div className="text-gray-400">Annual Growth</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-900 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of artists and clients on the waitlist.
          </p>
          <Link href="/client/register" className="btn-primary text-lg">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}
