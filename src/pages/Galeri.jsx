const photos = [
  { id: 1, alt: 'Foto 1', url: 'https://placehold.co/400x300?text=Foto+1' },
  { id: 2, alt: 'Foto 2', url: 'https://placehold.co/400x300?text=Foto+2' },
  { id: 3, alt: 'Foto 3', url: 'https://placehold.co/400x300?text=Foto+3' },
  { id: 4, alt: 'Foto 4', url: 'https://placehold.co/400x300?text=Foto+4' },
  { id: 5, alt: 'Foto 5', url: 'https://placehold.co/400x300?text=Foto+5' },
  { id: 6, alt: 'Foto 6', url: 'https://placehold.co/400x300?text=Foto+6' },
]

export default function Galeri() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">Galeri</h1>
      <p className="text-gray-500 text-center mb-10">Dokumentasi kegiatan Menwa USBYPKP</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        * Foto placeholder — ganti dengan foto kegiatan asli
      </p>
    </main>
  )
}