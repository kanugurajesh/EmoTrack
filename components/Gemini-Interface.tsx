'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import sendGemini from '@/lib/sendGemini'
import { useState } from 'react'
import { Audio } from 'react-loader-spinner'
import Markdown from 'react-markdown'
import toast from 'react-hot-toast'
import { updateValue } from '@/lib/features/textarea/textareaSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'

export function GeminiBot() {
  const dispatch = useDispatch()
  const [textArea, setTextArea] = useState('')
  const geminiResponse = useSelector((state: RootState) => state.textarea.value)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    toast.loading('Sending to Gemini...')
    const response = await sendGemini(textArea, 300)
    toast.dismiss()
    if (!response) {
      toast.error('Failed to send to Gemini.')
      setLoading(false)
      return
    }
    toast.success('Sent to Gemini!')
    setLoading(false)
    setTextArea('')
    // clearing the previous response
    dispatch(updateValue(''))
    // updating the response letter by letter
    for (let i = 0; i < response.length; i++) {
      setTimeout(() => {
        dispatch(updateValue(response.slice(0, i + 1)))
      }, 10 * i)
    }
  }

  // listen for shift + enter to submit
  const handleKeyDown = (e: any) => {
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
