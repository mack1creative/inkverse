'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ArtistLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: redirect to dashboard
    router.push('/artist/dashboard')
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Artist Login</h1>
        <p className="text-gray-600">Manage your bookings and profile</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            required
            className="input"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input 
            type="password" 
            required
            className="input"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
          />
        </div>

        <button type="submit" className="btn-primary w-full text-lg">
          Login
        </button>

        <p className="text-center text-gray-600">
          Don't have an account? <Link href="/artist/register" className="text-accent hover:underline">Register</Link>
        </p>
      </form>
    </div>
  )
}
