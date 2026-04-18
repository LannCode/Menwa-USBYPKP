import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Struktur from './pages/Struktur'
import Program from './pages/Program'
import Pendaftaran from './pages/Pendaftaran'
import Galeri from './pages/Galeri'
import Kontak from './pages/Kontak'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter basename='/menwa-usbypkp'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/struktur' element={<Struktur />} />
        <Route path='/program' element={<Program />} />
        <Route path='/pendaftaran' element={<Pendaftaran />} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/kontak' element={<Kontak />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App