import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
export default function Page() {
  return (
   <>
    {/* <Link href='/One'>
  Next Page
    </Link> */}
    <div className="w-full h-screen bg-black">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="uppercase text-white">What we'are covering</h1>
        <h1 className="text-white text-5xl">BACKEND & <span id="main">BACKEND DEVELOPMENT</span>🔥</h1>
        <div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/One'>
          <h1 className="text-white px-12 py-1 rounded-full bg-blue-400 uppercase text-xl">Next</h1> 
          </Link>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center absolute right-0 z-50">
          <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <div className="rounded-r-full absolute -right-5 bg-zinc-800 flex px-5 py-5 items-center justify-center "></div>
        </div>
      </div>
      </div>
    </div>
   </>
  )
}