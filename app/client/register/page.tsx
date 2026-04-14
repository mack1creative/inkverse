'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientRegister() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Account created! Start browsing artists.')
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Get Started</h1>
        <p className="text-gray-600">Find your perfect tattoo artist</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input 
            type="text" 
            required
            className="input"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
          />
        </div>

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

        <div>
          <label className="block text-sm font-medium mb-2">Phone (optional)</label>
          <input 
            type="tel" 
            className="input"
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
          />
        </div>

        <button type="submit" className="btn-primary w-full text-lg">
          Create Account
        </button>

        <p className="text-center text-gray-600 text-sm">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account? <Link href="/artist/login" className="text-accent hover:underline">Login</Link>
      </p>
    </div>
  )
}
