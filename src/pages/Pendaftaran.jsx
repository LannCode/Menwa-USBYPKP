import { useState } from 'react'

export default function Pendaftaran() {
  const [form, setForm] = useState({ nama: '', email: '', prodi: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Pendaftaran</h1>
      <p className="text-gray-500 mb-10">Bergabunglah bersama Menwa USBYPKP dan jadilah bagian dari keluarga besar kami.</p>

      {submitted ? (
        <div className="bg-green-100 text-green-800 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold mb-2">Terima kasih, {form.nama}!</p>
          <p>Pendaftaran kamu sudah kami terima. Kami akan menghubungi kamu melalui email segera.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              required
              value={form.nama}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Masukkan nama lengkap"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="contoh@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Program Studi</label>
            <input
              type="text"
              name="prodi"
              required
              value={form.prodi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Contoh: Teknik Informatika"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pesan / Motivasi</label>
            <textarea
              name="pesan"
              rows={4}
              value={form.pesan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Ceritakan motivasi kamu bergabung..."
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Kirim Pendaftaran
          </button>
        </form>
      )}
    </main>
  )
}