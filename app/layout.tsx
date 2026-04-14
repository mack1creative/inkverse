import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InkVerse - The Uber for Tattoos',
  description: 'Find local tattoo artists, preview designs with AR, book appointments securely.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-primary min-h-screen">
        <nav className="bg-primary text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">InkVerse</a>
            <div className="space-x-6">
              <a href="/artists" className="hover:text-accent">Find Artists</a>
              <a href="/artist/login" className="hover:text-accent">Artist Login</a>
              <a href="/client/register" className="bg-accent px-4 py-2 rounded hover:bg-red-600">Get Started</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-primary text-white p-8 mt-16">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">© 2026 InkVerse. The future of tattoo booking.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
