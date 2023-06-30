export default function Project() {
  return (
    <div className="bg-zinc-950">
      <div className="text-center m-auto w-9/12 py-16" id="project">
        <h2 className="text-5xl font-bold text-white mb-12">Project</h2>

        <div className="grid lg:grid-cols-3 gap-8 justify-items-center max-w-max m-auto">
          <a href="https://belajar-daisyui.vercel.app/" target="blank">
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project1.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold text-lg mb-1">Learn DaisyUI</p>
              <div className="flex gap-1">
                <p className="chip-react">ReactJS</p>
                <p className="chip-daisyui">DaisyUI</p>
              </div>
            </div>
          </a>
          <a href="https://yutub.vercel.app/" target="blank">
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project2.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold text-lg mb-1">Yutub - Youtube Clone</p>
              <div className="flex gap-1">
                <p className="chip-react">ReactJS</p>
                <p className="chip-tailwind">MUI</p>
              </div>
            </div>
          </a>
          <a
            href="https://dribbble.com/shots/20414159-EMAKECE-Website"
            target="blank"
          >
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project3.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold">Emakece - ECommerce</p>
              <div className="flex gap-1">
                <p className="chip-figma">figma</p>
              </div>
            </div>
          </a>
          <a
            href="https://dribbble.com/shots/20360071-Landing-Page-Feisgra-Design"
            target="blank"
          >
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project4.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold">Feisgra Landing Page</p>
              <div className="flex gap-1">
                <p className="chip-figma">Figma</p>
              </div>
            </div>
          </a>
          <a
            href="https://dribbble.com/shots/20414645-Greeting-and-Partings"
            target="blank"
          >
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project5.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold">Greetings & Partings</p>
              <div className="flex gap-1">
                <p className="chip-figma">Figma</p>
                <p className="chip-mobile">Mobile</p>
              </div>
            </div>
          </a>
          <a href="https://bit.ly/faunavora" target="blank">
            <img
              className="rounded-xl hover:scale-95 duration-500 w-96"
              src="assets/project6.png"
              alt=""
            />
            <div className="text-left mt-2">
              <p className="font-bold">Faunavora - Augmented Reality</p>
              <div className="flex gap-1">
                <p className="chip-unity">Unity</p>
                <p className="chip-mobile">Mobile</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
