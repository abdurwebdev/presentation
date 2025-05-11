"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center flex-col relative'>
      <Link href="/One">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
    <h1 className='text-white text-3xl'>So,before any further delay</h1>
    <h1 className='text-white text-5xl'><span id='main'>LET'S START</span></h1>
    <div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Three'>
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