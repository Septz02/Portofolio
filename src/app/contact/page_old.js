import Image from "next/image";

export default function Contact() {
  return (
    // <div>
    //   Ini Halaman Contact
    // </div>
    <>
      <div className="text-center mb-10">
        <h1 className="text-3xl">Get In Touch</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum
        </p>
      </div>
      <div class="flex ">
        <div class="flex-initial w-3/4">
          {/* <p className="m-auto m-auto">Kiri</p> */}

          <div class="grid grid-cols-4 gap-4 mx-10">
            <div class="col-span-2 border">
              {/* <label>Nama</label> */}
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Nama
                </span>
              <input
                  type="text"
                  name="nama"
                  class="mt-3 px-3 py-2 bg-white border focus:outline-none focus:ring-sky-500 rounded-md focus:ring-1 w-4/5"
                  placeholder="Input Your Name"
                />
            </div>
            <div class="col-span-2 border">
              {/* <label>Nama</label> */}
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
              <input
                  type="email"
                  name="email"
                  class="mt-3 px-3 py-2 bg-white border focus:outline-none focus:ring-sky-500 rounded-md focus:ring-1 w-4/5"
                  placeholder="Input Your Email"
                />
            </div>
            
            {/* <div>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-3 px-3 py-2 bg-white border focus:outline-none focus:ring-sky-500 rounded-md focus:ring-1"
                  placeholder="you@example.com"
                />
              </label>
            </div> */}
          </div>
        </div>
        <div class="flex-initial w-1/4">
          <p className="m-auto m-auto">Kanan</p>
        </div>
      </div>
    </>
  );
}
