import Link from 'next/link'

// Mock data for MVP demo
const artists = [
  {
    id: '1',
    displayName: 'Alex Rivera',
    specializations: ['Black & Gray', 'Realism'],
    yearsExperience: 8,
    rating: 4.9,
    reviewCount: 127,
    location: 'Los Angeles, CA',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
  {
    id: '2',
    displayName: 'Maya Chen',
    specializations: ['Japanese', 'Fine Line'],
    yearsExperience: 5,
    rating: 4.8,
    reviewCount: 89,
    location: 'New York, NY',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
  {
    id: '3',
    displayName: 'Jake Thompson',
    specializations: ['Traditional', 'Neo-Traditional'],
    yearsExperience: 12,
    rating: 5.0,
    reviewCount: 234,
    location: 'Miami, FL',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    id: '4',
    displayName: 'Sasha Kim',
    specializations: ['Watercolor', 'Illustrative'],
    yearsExperience: 4,
    rating: 4.7,
    reviewCount: 56,
    location: 'San Francisco, CA',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  },
]

export default function ArtistsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Artist</h1>
        <p className="text-gray-400">Browse verified tattoo artists in your area</p>
      </div>

      {/* Filters */}
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="input"
          />
          <select className="input">
            <option>All Styles</option>
            <option>Black & Gray</option>
            <option>Japanese</option>
            <option>Traditional</option>
            <option>Fine Line</option>
            <option>Realism</option>
            <option>Watercolor</option>
          </select>
          <select className="input">
            <option>Any Price</option>
            <option>$100 - $200</option>
            <option>$200 - $350</option>
            <option>$350+</option>
          </select>
          <input 
            type="text" 
            placeholder="Location (city, zip)..." 
            className="input"
          />
        </div>
      </div>

      {/* Artists Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <Link href={`/artists/${artist.id}`} key={artist.id} className="card group border border-dark-700">
            <div className="h-48 overflow-hidden">
              <img 
                src={artist.imageUrl} 
                alt={artist.displayName}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{artist.displayName}</h3>
                {artist.verified && (
                  <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm mb-3">{artist.location}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {artist.specializations.map((spec) => (
                  <span key={spec} className="bg-dark-700 text-gray-300 text-xs px-2 py-1 rounded">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-dark-700">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 font-semibold">{artist.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({artist.reviewCount})</span>
                </div>
                <span className="text-gray-500 text-sm">{artist.yearsExperience}+ years</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="btn-secondary">Load More Artists</button>
      </div>
    </div>
  )
}
