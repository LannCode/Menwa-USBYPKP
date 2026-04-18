const programs = [
  {
    title: 'Pelatihan Kepemimpinan',
    desc: 'Mengembangkan jiwa kepemimpinan melalui berbagai program pelatihan intensif.',
    icon: '🎖️',
  },
  {
    title: 'Bela Negara',
    desc: 'Pelatihan dasar kemiliteran dan pembentukan karakter cinta tanah air.',
    icon: '🇮🇩',
  },
  {
    title: 'Pengabdian Masyarakat',
    desc: 'Bakti sosial dan kegiatan pengabdian untuk membantu masyarakat sekitar.',
    icon: '🤝',
  },
  {
    title: 'Olahraga & Fisik',
    desc: 'Latihan fisik rutin untuk membentuk anggota yang sehat dan kuat.',
    icon: '💪',
  },
  {
    title: 'Seminar & Wawasan',
    desc: 'Kegiatan seminar untuk memperluas wawasan kebangsaan dan kepemimpinan.',
    icon: '📚',
  },
  {
    title: 'Upacara & Protokoler',
    desc: 'Pelatihan tata upacara dan protokoler kenegaraan.',
    icon: '🎗️',
  },
]

export default function Program() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">Program & Kegiatan</h1>
      <p className="text-gray-500 text-center mb-10">Kegiatan rutin dan unggulan Menwa USBYPKP</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((item) => (
          <div key={item.title} className="bg-gray-100 rounded-2xl p-6">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}