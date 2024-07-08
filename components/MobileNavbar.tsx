'use client'

import Link from 'next/link'
import { useState } from 'react'

const MobileNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <div className={`relative z-10`}>
      <nav className="p-4 px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center font-black text-xl hover:scale-105 transition-all ease-in-out duration-300"
        >
          <h1 className="text-yellow-500 text-4xl mr-1">E</h1>
          <h1 className="">moTrack</h1>
        </Link>
        <div
          className="flex flex-col gap-1 cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <div
            className={`w-8 h-1 origin-[33%_80%] bg-black ${
              activeMenu ? 'rotate-[45deg]' : ''
            } transition-all ease-in-out duration-300`}
          ></div>
          <div
            className={`w-8 h-1 bg-black ${
              activeMenu ? 'hidden' : ''
            } transition-all ease-in-out duration-300`}
          ></div>
          <div
            className={`w-8 h-1 bg-black origin-[33%_80%] ${
              activeMenu ? '-rotate-[45deg]' : ''
            } transition-all ease-in-out duration-300`}
          ></div>
        </div>
      </nav>
      <div
        className={`absolute h-screen w-[250px] bg-yellow-500 top-0 ${
          activeMenu ? 'left-0' : 'left-[-300px]'
        } transition-all ease-in-out duration-700 flex items-center justify-center font-black text-lg text-white`}
      >
        <div className="flex flex-col gap-10 p-10">
          <div className="group">
            <Link
              href="/"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              Home
            </Link>
            <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
          </div>
          <div className="group">
            <Link
              href="/"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              About
            </Link>
            <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
          </div>
          <div className="group">
            <Link
              href="/"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              Services
            </Link>
            <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
          </div>
          <div className='group'>
            <Link
              href="/"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              Login
            </Link>
            <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
          </div>
          <div className='group'>
            <Link
              href="/"
              className="hover:text-black transition-all ease-in-out duration-300"
            >
              Contact Us
            </Link>
            <div className="w-0 h-1 group-hover:w-full bg-black transition-all ease-in-out duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
