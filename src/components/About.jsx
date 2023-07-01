export default function About() {
  return (
    <div className="bg-zinc-900" id="about">
      <div className="text-center m-auto w-9/12 py-16 ">
        <h2 className="text-5xl font-bold text-white mb-12">About</h2>
        <p className="m-auto max-w-3xl">
          Seorang mahasiswa Program Studi Pendidikan Teknik Informatika dan
          Komputer Universitas Negeri Semarang yang memiliki minat terhadap
          pendidikan dan teknologi. Memiliki sertifikat Junior Graphic Designer
          dari BPPTIK 2021 dan Basic UX Design dari Dicoding 2022. Dengan
          semangat belajar yang tinggi dan tetap update, saat ini sedang
          mendalami Frontend Web Developer menggunakan NextJS, ReactJS, dan
          Tailwind CSS.
        </p>

        <div className="flex mt-12 flex-col gap-8 lg:flex-row items-center justify-center">
          <div className="card sm:w-96 bg-base-100">
            <figure className="px-10 pt-10">
              <img src="assets/about/design.png" alt="Shoes" className="w-12" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title text-white">Graphic Design</h2>
              <p className="text-sm">
                Mampu membuat desain menggunakan Photoshop, Inkscape, dan
                Coreldraw
              </p>
            </div>
          </div>
          <div className="card sm:w-96 bg-base-100">
            <figure className="px-10 pt-10">
              <img src="assets/about/ui.png" alt="Shoes" className="w-12" />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-white">UI/UX Design</h2>
              <p className="text-sm">
                Mampu membuat design system dari UI/UX website dan mobile
                menggunakan figma
              </p>
            </div>
          </div>
          <div className="card sm:w-96 bg-base-100">
            <figure className="px-10 pt-10">
              <img
                src="assets/about/frontend.png"
                alt="Shoes"
                className="h-12"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-white">Frontend Developer</h2>
              <p className="text-sm">
                Mampu membuat tampilan interface website menggunakan ReactJS,
                Tailwind, & MUI
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-center gap-5 justify-center mt-12 hidden">
          <img
            className="lg:h-12 md:h-8 mr-3 brightness-75"
            src="assets/skill/reactjs.png"
            alt=""
          />
          <img
            className="lg:h-9 md:h-5 brightness-75"
            src="assets/skill/tailwind.png"
            alt=""
          />
          <img
            className="lg:h-14 md:h-10 brightness-75"
            src="assets/skill/mui.png"
            alt=""
          />
          <img
            className="lg:h-14 md:h-10 brightness-75"
            src="assets/skill/figma.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
