'use client'

import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'
import { GeminiBot } from '@/components/Gemini-Interface'

export default function Home() {
  const [progress, setProgress] = useState(0)

  const PHQ9 = [
    { question: 'Little interest or pleasure in doing things', answer: 0 },
    { question: 'Feeling down, depressed, or hopeless', answer: 0 },
    {
      question: 'Trouble falling or staying asleep, or sleeping too much',
      answer: 0,
    },
    { question: 'Feeling tired or having little energy', answer: 0 },
    { question: 'Poor appetite or overeating', answer: 0 },
    {
      question:
        'Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
      answer: 0,
    },
    {
      question:
        'Trouble concentrating on things, such as reading the newspaper or watching television',
      answer: 0,
    },
    {
      question:
        'Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
      answer: 0,
    },
    {
      question:
        'Thoughts that you would be better off dead, or of hurting yourself',
      answer: 0,
    },
  ]

  useEffect(() => {
    let total = 0
    PHQ9.forEach((question) => {
      total += question.answer
    })
    setProgress(total)
  })

  return (
    <main className='mt-16 flex gap-5'>
      <div className='flex flex-col gap-2 w-[45%]'>
        <Progress value={progress} />
        <div>
        </div>
      </div>
      <div className='w-[45%]'>
        <GeminiBot />
      </div>
    </main>
  )
}
