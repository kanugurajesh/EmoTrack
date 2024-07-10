'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const sendGemini = async (message: string) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { maxOutputTokens: 300 },
  })

  try {
    const result = await model.generateContent(message)

    const response = result.response

    const text = response.text()

    return text

  } catch (error) {
    return "Unable to generate output"
  }
}

export default sendGemini
