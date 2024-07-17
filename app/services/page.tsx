"use client";

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function ServicesPage() {
  const [imageClicked, setImageClicked] = useState(false)
    return (
      <div className="flex flex-wrap gap-10 items-center justify-center my-10">
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/phq.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/gemini-explain.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/gemini-message.png" alt="" width={400} height={200} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/personalized-response.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/mental-track.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/complete-analysis.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/contact-form.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/chat-gemini.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
        <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
          <Image src="/services/clerk-auth.png" alt="" width={400} height={400} className="cursor-pointer w-full h-52" />
          <p>what is programming</p>
        </Card>
      </div>
    )
  }
  