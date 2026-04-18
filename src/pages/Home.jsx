export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Menwa USBYPKP</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Resimen Mahasiswa Universitas Satya Bhakti — membentuk mahasiswa yang disiplin, berani, dan cinta tanah air.
        </p>
        <a href="/menwa-usbypkp/pendaftaran" className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          Daftar Sekarang
        </a>
      </section>

      {/* Nilai */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Berani', desc: 'Memiliki keberanian dalam menghadapi tantangan dan mengambil keputusan yang tepat.' },
            { title: 'Disiplin', desc: 'Menjunjung tinggi kedisiplinan dalam setiap aspek kehidupan kampus dan organisasi.' },
            { title: 'Loyal', desc: 'Setia kepada negara, institusi, dan komitmen yang telah dijalankan bersama.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-100 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}