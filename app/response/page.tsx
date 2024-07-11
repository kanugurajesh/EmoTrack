'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { useEffect, useState } from 'react'
import sendGemini from '@/lib/sendGemini'
import Markdown from 'react-markdown'

const Response = () => {
  const score = useSelector((state: RootState) => state.score.value)
  const [response, setResponse] = useState<string>('')

  const prompt = `I got a score of ${score} on the PHQ-9. Can you tell me about the severity of my depression?`
  const tokens = 1000

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendGemini(prompt, tokens)
      setResponse(response)
    }
    fetchData()
  }, [prompt, tokens])

  return (
    <main>
      <div className='mt-10'>
        <Markdown>{response}</Markdown>
      </div>
    </main>
  )
}

export default Response
