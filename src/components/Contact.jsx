export default function Contact() {
  return (
    <div className="bg-zinc-900">
      <div className="text-center w-9/12 m-auto py-16 " id="contact">
        <h2 className="text-5xl font-bold text-white mb-12">Contact</h2>

        <div className="grid lg:grid-cols-2 max-w-max m-auto gap-12">
          <div className="hidden lg:block">
            <img
              className="max-w-sm mb-8 m-auto sm:max-w-md lg:p-8 "
              src="assets/contact.png"
              alt=""
            />
          </div>
          <div className="sm:w-96 lg:w-auto">
            <form action="mailto:furqonstudio@gmail.com" method="GET">
              <div className="flex flex-col gap-4">
                <input
                  className="input bg-zinc-800"
                  type="text"
                  placeholder="Nama"
                  name="name"
                />
                <input
                  className="input bg-zinc-800"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <textarea
                  className="textarea bg-zinc-800"
                  rows="8"
                  placeholder="Pesan"
                  name="message"
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
