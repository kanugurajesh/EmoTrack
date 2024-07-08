'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import Image from 'next/image'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(1)
  // const [hover, setHover] = useState(false)
  const [width, setWidth] = useState(window.innerWidth || 0)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <div>
      {width > 880 ? (
        <>
          <nav className="flex items-center justify-between p-4 px-10">
            <Link
              href="/"
              className="flex items-center font-black text-2xl hover:scale-105 transition-all ease-in-out duration-300"
            >
              <h1 className="text-yellow-500 text-6xl max-laptop:text-5xl mr-1">E</h1>
              <h1 className="text-4xl max-laptop:text-3xl">motrack</h1>
            </Link>
            <div className="flex gap-10 font-bold relative">
              <Link
                href="/"
                onClick={() => setActiveTab(1)}
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/"
                onClick={() => setActiveTab(2)}
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/"
                onClick={() => setActiveTab(3)}
                className="hover:text-yellow-500 transition-all ease-in-out duration-300 hover:scale-105"
              >
                Services
              </Link>
              <div
                className={`absolute w-12 h-1 bg-yellow-500 top-6 transition-all ease-in-out duration-300 ${
                  (activeTab == 1 && 'left-0') ||
                  (activeTab == 2 && 'left-[87px]') ||
                  (activeTab == 3 && 'left-[185px]')
                }`}
              ></div>
            </div>
            <div className="flex gap-10 items-center font-bold">
              {/* <div className="relative hover:scale-105">
                <Link
                  href="/"
                  className="hover:text-yellow-500 transition-all ease-in-out duration-300 "
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Login
                </Link>
                <div
                  className={`absolute w-12 h-1 ${
                    hover ? 'bg-yellow-500 left-0' : 'bg-white left-[-30px]'
                  } top-6 transition-all ease-in-out duration-300 `}
                ></div>
              </div> */}
              <Link
                href="/"
                className="p-3 bg-blue-600 rounded-md text-white hover:text-blue-600 hover:bg-white border-2 border-blue-600 transition-all ease-in-out duration-300"
              >
                Register
              </Link>
              <Link
                href="/"
                className="p-3 bg-yellow-500 rounded-md hover:text-yellow-500 text-white hover:bg-white border-2 border-yellow-500 transition-all ease-in-out duration-300"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <MobileNavbar />
        </>
      )}
    </div>
  )
}

export default Navbar
