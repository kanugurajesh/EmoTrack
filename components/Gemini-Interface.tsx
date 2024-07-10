'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import sendGemini from '@/lib/sendGemini'
import { useState } from 'react'
import { Audio } from 'react-loader-spinner'
import Markdown from 'react-markdown'
import toast from 'react-hot-toast'

export function GeminiBot() {
  const [textArea, setTextArea] = useState('')
  const [loading, setLoading] = useState(false)
  const [geminiResponse, setGeminiResponse] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    toast.loading('Sending to Gemini...')
    const response = await sendGemini(textArea)
    toast.dismiss()
    if (!response) {
      toast.error('Failed to send to Gemini.')
      setLoading(false)
      return
    }
    toast.success('Sent to Gemini!')
    setLoading(false)
    setTextArea('')
    setGeminiResponse('') // Clear previous response
    for (let i = 0; i < response.length; i++) {
      setTimeout(() => {
        setGeminiResponse((prev) => prev + response[i])
      }, 10 * i)
    }
  }

  // listen for shift + enter to submit
  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="grid h-full w-full gap-2">
      <Textarea
        placeholder="Type your message here."
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSubmit}>
        {loading ? (
          <Audio height={20} width={20} color="white" />
        ) : (
          'Send to Gemini'
        )}
      </Button>
      <div className="mt-4 max-h-72 overflow-y-scroll">
        <Markdown>{geminiResponse}</Markdown>
      </div>
    </div>
  )
}
