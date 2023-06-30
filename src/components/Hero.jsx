export default function Hero() {
  return (
    <div className="-mt-10 bg-zinc-950" id="hero">
      <div className="hero w-9/12 m-auto py-16 md:h-[700px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="assets/hero.png" className="max-h-[500px]" />
          <div className="text-center lg:text-left">
            <p className="my-2 font-bold text-xl">Halo! 👋 Saya</p>
            <h1 className="text-5xl font-black">
              <span className="bg-gradient-to-r from-[#bd00ff] to-[#0078ff] text-transparent bg-clip-text ">
                Furqon Al-Rasyid
              </span>
            </h1>
            <p className="py-6">
              Saya seorang mahasiswa Program Studi Pendidikan Teknik Informatika
              yang memiliki keahlian dibidang Graphic Design, UI/UX Design, dan
              Frontend Web Developer.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  window.location.href = 'mailto:furqonstudio@gmail.com'
                }}
                className="btn btn-primary normal-case shadow-md hover:shadow-primary/50"
              >
                Email Me
              </button>
              <button
                onClick={() => {
                  window.open('https://www.contoh.com/lokasi_cv.pdf', '_blank')
                }}
                className="btn bg-gray-900 normal-case"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
