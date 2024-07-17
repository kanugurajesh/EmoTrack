import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col gap-3 items-center">
      <Card className='p-10 flex flex-col gap-3 items-center'>
        <Image
          src="/wellbeing.png"
          alt="EmoTrack Logo"
          width={100}
          height={100}
        />
        <p className="mt-5">
          EmoTrack is an app designed to track depression and provide remedies
          to patients. 🌟 Depression often begins with subtle symptoms and
          gradually intensifies. Many people may not even realize they&apos;re
          experiencing it until it&apos;s severe, potentially leading to serious
          consequences, including suicide. 😔
        </p>
        <p>
          However, depression has a straightforward solution: early treatment.
          If individuals can identify depression in its early stages and seek
          proper care, it can be easily prevented. 🛡️ Unfortunately, many can&apos;t
          afford psychologists, don&apos;t have access to them, or hesitate to seek
          help without confirmation or proof. 💸🚫
        </p>
        <p>
          That&apos;s why I built EmoTrack. This app helps users take a standard
          PHQ-9 test to understand their mental condition. 📋 It also features a
          Gemini bot for asking questions, making it easier for people to get
          the support they need. 🤖💬
        </p>
      </Card>
    </div>
  )
}
