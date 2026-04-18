import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Menwa USBYPKP</Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/struktur" className="hover:text-yellow-400">Struktur</Link></li>
          <li><Link to="/program" className="hover:text-yellow-400">Program</Link></li>
          <li><Link to="/pendaftaran" className="hover:text-yellow-400">Pendaftaran</Link></li>
          <li><Link to="/galeri" className="hover:text-yellow-400">Galeri</Link></li>
          <li><Link to="/kontak" className="hover:text-yellow-400">Kontak</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-3 mt-4 text-sm px-2">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/struktur" onClick={() => setOpen(false)}>Struktur</Link></li>
          <li><Link to="/program" onClick={() => setOpen(false)}>Program</Link></li>
          <li><Link to="/pendaftaran" onClick={() => setOpen(false)}>Pendaftaran</Link></li>
          <li><Link to="/galeri" onClick={() => setOpen(false)}>Galeri</Link></li>
          <li><Link to="/kontak" onClick={() => setOpen(false)}>Kontak</Link></li>
        </ul>
      )}
    </nav>
  )
}