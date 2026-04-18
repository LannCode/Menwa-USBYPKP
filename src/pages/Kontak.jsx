export default function Kontak() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Kontak</h1>
      <p className="text-gray-500 mb-10">Hubungi kami untuk informasi lebih lanjut.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="font-bold mb-1">Alamat</p>
            <p className="text-gray-600">Universitas Satya Bhakti, Bandung, Jawa Barat</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="font-bold mb-1">Email</p>
            <p className="text-gray-600">menwa@usbypkp.ac.id</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="font-bold mb-1">Instagram</p>
            
              href="https://instagram.com/menwa.usbypkp"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500 hover:underline"
            
              @menwa.usbypkp
            
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Ada pertanyaan?</h2>
          <p className="text-gray-300 mb-6">
            Jangan ragu untuk menghubungi kami melalui email atau DM Instagram. Kami siap membantu!
          </p>
          
            href="https://instagram.com/menwa.usbypkp"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl text-center hover:bg-yellow-300 transition"
          
            DM Instagram
        
        </div>
      </div>
    </main>
  )
}