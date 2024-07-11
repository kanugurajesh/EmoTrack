'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { useEffect, useState } from 'react'
import sendGemini from '@/lib/sendGemini'
import Markdown from 'react-markdown'

const Response = () => {
  const score = useSelector((state: RootState) => state.score.value)
  const [response, setResponse] = useState<string>('')

  const prompt = `I got a score of ${score}/27 on the PHQ-9. Can you explain what this means regarding the severity of my depression? Additionally, could you provide me with some health tips and resources to help manage my mental health?`

  const tokens = 1000

  useEffect(() => {
    const fetchData = async () => {
      const response = await sendGemini(prompt, tokens)
      setResponse(response) // Clear response when component mounts
    }
    fetchData()
  }, []) // Empty dependency array ensures this runs only once

  return (
    <main>
      <div className="mt-10">
        <Markdown>{response}</Markdown>
      </div>
    </main>
  )
}

export default Response
