"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
       <Link href="/Eighteen">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white text-3xl px-12 font-bold'>🔹 Generate <span id='main'>Token (Backend):</span></h1>
      <pre className="bg-zinc-900 mx-12  text-green-400 text-sm p-4 rounded-md  mt-4 w-[92%] overflow-x-auto">
  <code>
    {`const token = jwt.sign({ id: user._id }, "yourSecretKey", {
  expiresIn: "1h",
});
`}
  </code>
</pre>
<h1 className='text-white mt-2 text-3xl px-12 font-bold'>🔹 Verify <span id='main'>Token (Middleware):</span></h1>
      <pre className="bg-zinc-900 mx-12 text-green-400 text-sm p-4 rounded-mdn w-[92%]  mt-4 overflow-x-auto">
  <code>
    {`const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  jwt.verify(token, "yourSecretKey", (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
};

`}
  </code>
</pre>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Twenty'>
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