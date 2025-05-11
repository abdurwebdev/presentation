"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start pt-20 h-screen bg-black'>
      <Link href="/Twentythree">
        <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
          <i className="ri-arrow-left-long-line"></i>
        </div>
      </Link>

      <h1 className='text-white text-3xl px-12 font-bold'>
        🚀 3. Backend Deployment (Node.js & Express)
      </h1>

      <p className='text-white px-12 text-2xl font-bold leading-relaxed'>
        🔹 Option 1: Deploy to Heroku/Render <br />
        📤 Push backend code to GitHub. <br />
        ⚙️ Heroku/Render auto-deploys and sets up MongoDB URI. <br />
        🌐 Live URL: <code>https://your-backend.herokuapp.com</code>
      </p>

      <h1 className='text-white mt-2 text-3xl px-12 font-bold'>
        🔐 4. Environment Variables
      </h1>

      <p className='text-white px-12 text-2xl font-bold leading-relaxed'>
        🔐 Use Heroku / Render / Vercel settings for sensitive data <br />
        🔑 Example: MongoDB URI, API keys, etc. <br />
        📌 Heroku: <code>heroku config:set MONGODB_URI=&lt;your-mongo-uri&gt;</code> <br />
        ⚙️ Vercel: Set in <strong>Settings &gt; Environment Variables</strong>
      </p>

      <div className="w-full flex items-center justify-center absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Twentyfive'>
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
