'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/lib/hooks'
import { updateValue } from '@/lib/features/textarea/textareaSlice'
import { ChatMessage } from '@/lib/features/chat/chatSlice'
import Image from 'next/image'
import { RootState } from '@/lib/store'

interface Message {
  user: string,
  message: string
}

export default function ChatPage() {
  const [userImage, setUserImage] = useState<string>('')
  const { user } = useUser()
  const chatRef = useRef<HTMLDivElement>(null)
  const chat = useSelector((state: RootState) => state.chat.messages)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setUserImage(user?.imageUrl as string)
  }, [user])

  // const addMessage = (data:ChatMessage) => {
  //   dispatch(updateValue(data))
  // }

  const handleSubmit = () => {
    // chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight)
    const lastMessage = chatRef.current?.lastElementChild as HTMLDivElement
    lastMessage?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="my-10 h-[80vh]">
      <Card className="p-10 h-full w-full flex flex-col items-center justify-between">
        <div
          className="flex flex-col gap-2 w-full h-[70vh] overflow-y-scroll no-scrollbar"
          ref={chatRef}
        >
          {chat.map((message, index) => (
            <div
              key={index}
              className={`${
                message.user === 'model' ? 'text-left' : 'text-right'
              } w-full p-4`}
            >
              <Card className="inline-block p-4">
                <div className="flex gap-4">
                  <Image
                    src={message.user != 'model' ? userImage : '/chat.png'}
                    alt={message.user}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p>{message.message}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex gap-3 w-full">
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black rounded-md p-1 px-3 w-full"
            placeholder="Send Query ..."
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Card>
    </div>
  )
}
