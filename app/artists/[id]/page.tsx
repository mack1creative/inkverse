import Link from 'next/link'

const artistData = {
  id: '1',
  displayName: 'Alex Rivera',
  bio: 'Specializing in black and gray realism with 8 years of experience. I believe every tattoo should be a collaboration between artist and client. Based in Los Angeles, available for custom work and walk-ins.',
  location: 'Los Angeles, CA',
  yearsExperience: 8,
  rating: 4.9,
  reviewCount: 127,
  verified: true,
  specializations: ['Black & Gray', 'Realism', 'Portrait'],
  hourlyRate: 250,
  depositRequired: 50,
  portfolio: [
    'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400',
    'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400',
    'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=400',
    'https://images.unsplash.com/photo-1590246130793-2e1f5cd80795?w=400',
  ],
  reviews: [
    { name: 'Sarah M.', rating: 5, comment: 'Incredible work! Alex brought my vision to life exactly how I imagined.', date: '2 weeks ago' },
    { name: 'James K.', rating: 5, comment: 'Professional, clean studio. The black and gray shading is unmatched.', date: '1 month ago' },
    { name: 'Mike T.', rating: 5, comment: 'Second tattoo from Alex. Always impressed with the attention to detail.', date: '2 months ago' },
  ],
}

export default function ArtistDetail({ params }: { params: { id: string } }) {
  const artist = artistData

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-dark-800 rounded-xl shadow-md border border-dark-700 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" 
              alt={artist.displayName}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{artist.displayName}</h1>
                {artist.verified && <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">✓</span>}
              </div>
              <p className="text-gray-500 mb-4">{artist.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.specializations.map(spec => (
                  <span key={spec} className="bg-dark-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="ml-2 text-xl font-bold">{artist.rating}</span>
                <span className="text-gray-500 ml-2">({artist.reviewCount} reviews)</span>
              </div>
              <div className="border-t border-dark-700 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Hourly Rate</span>
                  <span className="font-bold">${artist.hourlyRate}/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Deposit Required</span>
                  <span className="font-bold">{artist.depositRequired}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-dark-800 rounded-xl shadow-md border border-dark-700 p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
            <div className="mt-6 flex gap-4">
              <button className="btn-primary flex-1">Book Consultation</button>
              <button className="btn-secondary flex-1">Message Artist</button>
            </div>
          </div>

          <div className="bg-dark-800 rounded-xl shadow-md border border-dark-700 p-6">
            <h2 className="text-xl font-bold mb-6">Portfolio</h2>
            <div className="grid grid-cols-2 gap-4">
              {artist.portfolio.map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-dark-800 rounded-xl shadow-md border border-dark-700 p-6">
        <h2 className="text-xl font-bold mb-6">Reviews</h2>
        <div className="space-y-6">
          {artist.reviews.map((review, i) => (
            <div key={i} className="border-b border-dark-700 pb-6 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.name}</span>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
