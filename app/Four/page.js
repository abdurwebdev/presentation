"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
       <Link href="/Three">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white text-3xl px-12 font-bold'>What Is <span id='main'>Express js</span>?</h1>
      <p className='text-white px-12 text-2xl font-bold mt-5 leading-relaxed'> <span className='text-blue-400'>Express.js</span> is a <span className='text-blue-400'>minimal and flexible Node.js web application framework.</span> <br />

      It simplifies the process of <span className='text-blue-400'>handling</span> routes, <span className='text-blue-400'>requests</span>, and <span className='text-blue-400'>responses</span> in a Node.js server. <br />

      Allows you to create RESTful APIs easily using just a few lines of code.
<br />
Offers <span className='text-blue-400'>middleware support,</span> making it easy to handle tasks like authentication, logging, error handling, and more.
<br />
<span className='italic'>🧠 Think of Express.js as a layer built on top of Node.js to make backend development easier and faster.</span>
<br /></p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Five'>
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