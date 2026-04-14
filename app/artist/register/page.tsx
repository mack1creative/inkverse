'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ArtistRegister() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    displayName: '',
    phone: '',
    bio: '',
    yearsExperience: '0',
    specializations: [] as string[],
  })

  const styles = ['Black & Gray', 'Japanese', 'Traditional', 'Fine Line', 'Realism', 'Watercolor', 'Neo-Traditional', 'Illustrative']

  const toggleSpecialization = (style: string) => {
    setForm(prev => ({
      ...prev,
      specializations: prev.specializations.includes(style)
        ? prev.specializations.filter(s => s !== style)
        : [...prev.specializations, style]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Registration coming soon! Join the waitlist for early access.')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Artist Registration</h1>
        <p className="text-gray-400">Join InkVerse and get booked more</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-dark-800 p-8 rounded-xl shadow-md border border-dark-700 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input 
            type="email" 
            required
            className="input"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password *</label>
          <input 
            type="password" 
            required
            className="input"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name *</label>
            <input 
              type="text" 
              required
              className="input"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Display Name *</label>
            <input 
              type="text" 
              required
              className="input"
              placeholder="How clients will see you"
              value={form.displayName}
              onChange={e => setForm({...form, displayName: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input 
            type="tel" 
            className="input"
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Years of Experience *</label>
          <select 
            className="input"
            value={form.yearsExperience}
            onChange={e => setForm({...form, yearsExperience: e.target.value})}
          >
            <option value="0">Apprentice</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="5">5+ years</option>
            <option value="10">10+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Specializations *</label>
          <div className="flex flex-wrap gap-2">
            {styles.map(style => (
              <button
                key={style}
                type="button"
                onClick={() => toggleSpecialization(style)}
                className={`px-3 py-2 rounded-lg text-sm transition ${
                  form.specializations.includes(style)
                    ? 'bg-accent text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea 
            className="input min-h-[120px]"
            placeholder="Tell clients about yourself, your style, and what makes your work unique..."
            value={form.bio}
            onChange={e => setForm({...form, bio: e.target.value})}
          />
        </div>

        <button type="submit" className="btn-primary w-full text-lg">
          Create Artist Profile
        </button>

        <p className="text-center text-gray-400">
          Already have an account? <Link href="/artist/login" className="text-accent hover:underline">Login</Link>
        </p>
      </form>
    </div>
  )
}
