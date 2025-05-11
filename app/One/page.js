"use client"
import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
const page = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen relative bg-black'>
       <Link href="/">
      <div className='w-10 h-10 bg-white rounded-full absolute top-5 left-5 flex items-center justify-center'>
      <i className="ri-arrow-left-long-line"></i>
      </div>
      </Link>
      <h1 className='text-white z-50 mt-10 text-5xl'>THREE <span id='two'>PROJECT</span></h1>
      <div className='w-full flex items-center justify-center gap-x-10 mt-16'>
      <div className='text-center'>
        <h1 className='text-white text-3xl '>Chess.Com</h1>
        <div className='w-52 rounded-2xl h-52 bg-zinc-900 flex items-center justify-center p-3'>
          <img className='w-full rounded-3xl h-full object-cover object-right' src="https://images.chesscomfiles.com/uploads/v1/news/1356739.bd2ad973.5000x5000o.363dbdfe1336.png" alt="" />
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-white text-3xl '>FlipKart</h1>
        <div className='w-52 rounded-2xl h-52 bg-zinc-900 flex items-center justify-center p-3'>
          <img className='w-full rounded-3xl h-full object-cover ' src="https://thehardcopy.co/wp-content/uploads/Flipkart_Brand-Mall-1200x805.png" alt="" />
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-white text-3xl '>Youtube</h1>
        <div className='w-52 rounded-2xl h-52 bg-zinc-900 flex items-center justify-center p-3'>
          <img className='w-full rounded-3xl h-full object-cover object-right' src="https://cdn.dribbble.com/userupload/39515181/file/original-4f9f1386094bb5a86f72497c88c5a217.png?resize=400x0" alt="" />
        </div>
      </div>
      </div>
      <div className="w-full flex items-center justify-center  absolute bottom-10">
        <div className="flex items-center justify-center relative">
          <Link href='/Two'>
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