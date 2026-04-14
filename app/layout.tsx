import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InkVerse - Find Your Perfect Tattoo Artist',
  description: 'Find local tattoo artists, preview designs with AR, book appointments securely.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white min-h-screen">
        <nav className="bg-dark-800 border-b border-dark-700 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">Ink<span className="text-accent">Verse</span></a>
            <div className="space-x-6">
              <a href="/artists" className="hover:text-accent transition">Find Artists</a>
              <a href="/artist/login" className="hover:text-accent transition">Artist Login</a>
              <a href="/client/register" className="bg-accent px-4 py-2 rounded hover:bg-accenthover transition">Get Started</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-dark-800 border-t border-dark-700 text-white p-8 mt-16">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© 2026 InkVerse. The future of tattoo booking.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
