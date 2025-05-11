"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
       <Link href="/Two">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white text-3xl px-12 font-bold'>What Is <span id='main'>Node js</span>?</h1>
      <p className='text-white px-12 text-2xl font-bold mt-5 leading-relaxed'>Node.js
Node.js is a powerful, open-source JavaScript runtime built on <span className='text-blue-400'>Chrome’s V8 engine</span>. <br />

It allows developers to run JavaScript <span className='text-blue-400'>on the server-side,</span> outside the browser. <br />

It uses an <span className='text-blue-400'>event-driven,</span><span className='text-blue-400'>non-blocking I/O model,</span>making it ideal for <span className='text-blue-400'>scalable and real-time applications</span>.
<br />
Popular for building backend services like <span className='text-blue-400'>APIs,</span> <span className='text-blue-400'>chat apps,</span> and <span className='text-blue-400'>streaming platforms</span>.
<br />
<span className='italic'>Think of Node.js as the engine that powers JavaScript on the backend.</span>
<br /></p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Four'>
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