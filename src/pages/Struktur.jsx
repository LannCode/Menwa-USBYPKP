const struktur = [
  { jabatan: 'Komandan', nama: 'Nama Komandan' },
  { jabatan: 'Wakil Komandan', nama: 'Nama Wakil Komandan' },
  { jabatan: 'Kepala Staf', nama: 'Nama Kepala Staf' },
  { jabatan: 'Sekretaris', nama: 'Nama Sekretaris' },
  { jabatan: 'Bendahara', nama: 'Nama Bendahara' },
  { jabatan: 'Kepala Seksi Operasi', nama: 'Nama Kasie Operasi' },
  { jabatan: 'Kepala Seksi Logistik', nama: 'Nama Kasie Logistik' },
  { jabatan: 'Kepala Seksi Humas', nama: 'Nama Kasie Humas' },
]

export default function Struktur() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 text-center">Struktur Organisasi</h1>
      <p className="text-gray-500 text-center mb-10">Periode 2024–2025</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {struktur.map((item) => (
          <div key={item.jabatan} className="flex items-center gap-4 bg-gray-100 rounded-2xl p-5">
            <div className="bg-gray-900 text-yellow-400 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg flex-shrink-0">
              {item.nama.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-900">{item.nama}</p>
              <p className="text-sm text-gray-500">{item.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}