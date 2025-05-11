"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20  h-screen bg-black'>
       <Link href="/Fourteen">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white text-2xl ml-10'>🍪 COOKIES IN MERN STACK</h1>
      <p className='text-white px-12 text-2xl font-bold mt-5 leading-relaxed'>🔹 What are Cookies? <br />
Small data stored on the client side. <br />

Used for session management, login tracking, preferences, etc. <br /></p>
<p className='text-white px-12 text-2xl font-bold mt-5 leading-relaxed'>🔹 Flow Example: <br />
User logs in <br />

Server (Express.js) sends a cookie with JWT/token <br />

Browser stores cookie <br />

On next request, browser sends cookie back to server <br />

Server verifies and responds accordingly</p>
<div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Sixteen'>
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