"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
       <Link href="/Ten">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white text-3xl font-bold px-12'>🚪 Logout</h1>
<p className='text-white px-12 text-2xl font-bold mt-5 leading-relaxed'>
Flow: <br />

Frontend removes token from localStorage or cookies <br />

Optionally: <br />

Sends request to backend to blacklist token (advanced) <br />

Redirects user to login or homepage
</p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Twelve'>
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