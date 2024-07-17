'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ChatPage() {
  const [userImage, setUserImage] = useState<string>('')
  const { user } = useUser()

  useEffect(() => {
    setUserImage(user?.imageUrl as string)
  }, [user])

  const chat = [
    {
      user: 'model',
      message: 'hello',
    },
    {
      user: 'rajesh',
      message: 'hello I am rajesh',
    },
    {
      user: 'rajesh',
      message: 'hello I am rajesh',
    },
    {
      user: 'rajesh',
      message: 'hello I am rajesh',
    },
    {
      user: 'rajesh',
      message: 'hello I am rajesh',
    },
  ]

  return (
    <div className="my-10 h-[80vh]">
      <Card className="p-10 h-full w-full flex flex-col items-center justify-between">
        <div className="flex flex-col gap-2 w-full h-[70vh] overflow-y-scroll no-scrollbar">
          {chat.map((message, index) => (
            <div
              key={index}
              className={`${
                message.user === 'model' ? 'text-left' : 'text-right'
              } w-full p-4`}
            >
              <Card className="inline-block p-4">
                <div className='flex gap-4'>
                  <Image
                    src={message.user != "model" ? userImage : '/chat.png'}
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
          <Button>Submit</Button>
        </div>
      </Card>
    </div>
  )
}
