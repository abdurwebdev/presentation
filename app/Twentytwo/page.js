"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
       <Link href="/Twentyone">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
       <h1 className='text-white text-3xl px-12 font-bold'>🔸 Step 3: Use in Routes
       </h1>
      <pre className="bg-zinc-900 mx-12  text-green-400 text-sm p-4 rounded-md  mt-4 w-[92%] overflow-x-auto">
  <code>
    {`app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User registered");
});

`}
  </code>
</pre>
<h1 className='text-white mt-2 text-3xl px-12 font-bold'>✅ Benefits:
</h1>
     <p className='text-white px-12 text-2xl font-bold leading-relaxed'>
     Works natively with JavaScript/JSON <br />

Easily integrates with Express.js via Mongoose <br />

High performance for large-scale apps
     </p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Twentythree'>
          <h1 className="text-white px-12 py-1 rounded-full bg-blue-400 uppercase text-xl">Next</h1> 
          </Link>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center absolute right-0 z-50">
          <i className="ri-arrow-right-up-long-line"></i>
          </div>
          <div className="rounded-r-full absolute -right-5 bg-zinc-800 flex px-5 py-5 items-center justify-center "></div>
        </div>
      </div>
    </div>
  )
}

export default page