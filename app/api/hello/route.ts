import { NextResponse } from 'next/server'
import { inngest } from '../../../inngest/client' // Import our client

// Opt out of caching; every request should send a new event
export const dynamic = 'force-dynamic'

// Create a simple async Next.js API route handler
// export async function GET() {
//   // Send your event payload to Inngest
//   await inngest.send({
//     name: "test/hello.world",
//     data: {
//       email: "testFromNext@example.com",
//     },
//   });

//   return NextResponse.json({ name: "Hello Inngest from Next!" });
// }

export async function POST(req: any) {
  const body = await req.json()

  const { email } = body

  // Send your event payload to Inngest
  await inngest.send({
    name: 'test/hello.world',
    data: {
      email: email,
    },
  })

  return NextResponse.json({ name: 'Hello Inngest from Next!' })
}
