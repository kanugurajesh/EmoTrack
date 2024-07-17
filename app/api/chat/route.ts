import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const scores = await prisma.score.findMany()

    console.log(scores)

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'Hello, I have 2 dogs in my house.' }],
        },
        {
          role: 'model',
          parts: [{ text: 'Great to meet you. What would you like to know?' }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 50,
      },
    })

    // Fetch the request body
    const reqBody = await req.json()

    // Get the userPrompt from the request body
    const { userPrompt } = reqBody

    // Send the user's message to the chat model
    const result = await chat.sendMessage(userPrompt + "Give me the answer in 50 tokens")

    // Extract the text from the response
    const text = result.response?.text() || "Sorry, I don't understand."

    return NextResponse.json({ text })
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}
