"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-12 h-screen bg-black'>
       <Link href="/Five">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
<div className='text-white px-12 text-2xl font-bold leading-relaxed w-[92%] '>
<pre className="bg-zinc-900  px-12  font-bold leading-relaxed text-green-400 text-sm p-4 rounded-md  mt-4 overflow-x-auto">
  <code>
    {`app.post('/register', (req, res) => {
  const { name, email } = req.body;
  // process data
});`}
  </code>
</pre>
</div>
<br />
<p className='text-white px-12 text-2xl font-bold leading-relaxed'>
Parsing Data

Middleware like body-parser or express.json() is used to extract the form data from the request body.
<br />
Validation & Security

Backend checks if the data is complete, valid, and safe (e.g., using JWT, cookie-parser).

Prevents attacks like Password Compromise.
<br />Database Interaction

Data is saved to or retrieved from a database (e.g., MongoDB, MySQL).
<br />
Response to Frontend

Server sends back a success message or error to the frontend.
</p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Seven'>
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