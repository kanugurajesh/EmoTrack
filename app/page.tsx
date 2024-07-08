'use client'
import { CarouselComponent } from '@/components/Carousal'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-10 flex justify-between items-center mt-20 ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden">
            <h1 className="font-bold text-6xl animate-moveUp transition-all ease-in-out duration-700">
              Track Your
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-6xl animate-moveUp transition-all ease-in-out duration-700">
              Mental <span className="text-blue-600">Health</span>
            </h1>
          </div>
        </div>
        <div className="overflow-hidden">
          <h1 className="font-medium text-xl animate-moveDown transition-all ease-in-out duration-700 max-w-lg">
            <p>
              Monitor your mental health using our tracker with the PHQ-9
              questionnaire to understand and manage your well-being
              effectively.
            </p>
          </h1>
        </div>
        <Link href="/Home">
          <button className="p-3 bg-yellow-500 rounded-md hover:text-yellow-500 text-white hover:bg-white border-2 border-yellow-500 transition-all ease-in-out duration-300 font-bold">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center mr-10">
        <CarouselComponent />
      </div>
    </main>
  )
}
