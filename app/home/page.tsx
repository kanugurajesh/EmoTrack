'use client'

import { Progress } from '@/components/ui/progress'
import { GeminiBot } from '@/components/Gemini-Interface'
import { RootState } from '@/lib/store'
import Quiz from '@/components/Quiz'
import { useSelector } from 'react-redux'

export default function Home() {
  const progress = useSelector((state: RootState) => state.counter.value)

  return (
    <main className="mt-16 flex justify-between">
      <div className="flex flex-col gap-4 w-[45%]">
        <Progress value={progress} />
        <Quiz />
      </div>
      <div className="w-[45%]">
        <GeminiBot />
      </div>
    </main>
  )
}
