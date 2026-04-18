export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Tentang Kami</h1>
      
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Resimen Mahasiswa (Menwa) USBYPKP adalah unit kegiatan mahasiswa yang bergerak di bidang bela negara dan kepemimpinan. Dibentuk untuk mencetak kader bangsa yang disiplin, bertanggung jawab, dan cinta tanah air.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed mb-10">
        Menwa USBYPKP aktif dalam berbagai kegiatan pelatihan militer dasar, pengabdian masyarakat, dan pembinaan karakter mahasiswa di lingkungan Universitas Satya Bhakti Yayasan Pendidikan Kejuruan dan Profesi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Tahun Berdiri', value: '2010' },
          { label: 'Total Anggota', value: '200+' },
          { label: 'Program Aktif', value: '10+' },
        ].map((item) => (
          <div key={item.label} className="bg-gray-900 text-white rounded-2xl p-6 text-center">
            <p className="text-4xl font-bold text-yellow-400 mb-2">{item.value}</p>
            <p className="text-sm text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </main>
  )
}