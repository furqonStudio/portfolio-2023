import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <div className="bg-zinc-950 py-8 text-center">
        <p className="text-lg font-bold text-white">Connect with Me</p>
        <p className="text-sm my-2">
          Hubungi email : <strong>furqonstudio@gmail.com</strong> <br /> untuk
          keperluan kerjasama
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a target="blank" href="https://instagram.com/furqon.std">
            <AiFillInstagram className="text-3xl " />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/furqonalrasyid/">
            <AiFillLinkedin className="text-3xl " />
          </a>
          <a target="blank" href="https://github.com/furqonStudio">
            <AiFillGithub className="text-3xl " />
          </a>
          <a target="blank" href="https://dribbble.com/furqonstudio">
            <AiFillDribbbleCircle className="text-3xl " />
          </a>
        </div>
      </div>
      <div className="bg-primary text-center py-2">
        <p className="text-sm text-white">Copyright &copy;2023 furqon.std</p>
      </div>
    </footer>
  )
}
