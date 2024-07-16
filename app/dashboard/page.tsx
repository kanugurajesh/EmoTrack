// page.js this is the entry point of application
'use client'

import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useEffect, useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import Markdown from 'react-markdown'
import { Card } from '@/components/ui/card'
import sendGemini from '@/lib/sendGemini'

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
})

const updateDate = (date: any) => {
  const newDate = new Date(date)
  const formattedDate = newDate.toISOString().split('T')[0]
  return formattedDate
}

const LineChart = () => {
  const [labels, setLabels] = useState<string[]>([])
  const [values, setValues] = useState<number[]>([])
  const [response, setResponse] = useState<string>('')
  const chartRef = useRef(null)

  const downloadImage = () => {
    // @ts-ignore
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'chart.png'
      link.click()
    })
  }

  const slowResponse = (response: string) => {
    setResponse(response)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/graph')
      const data = await response.json()
      const newData = []

      for (let i = 0; i < data.length; i++) {
        newData.push([updateDate(data[i].date), data[i].value])
      }

      const finalMap = {}

      for (let i = 0; i < newData.length; i++) {
        let sum = newData[i][1]
        let count = 1 // Start count at 1 to include the initial element

        if (!finalMap.hasOwnProperty(newData[i][0])) {
          for (let j = i + 1; j < newData.length; j++) {
            if (newData[i][0] === newData[j][0]) {
              sum += newData[j][1]
              count++
            }
          }
          // @ts-ignore
          finalMap[newData[i][0]] = sum / count
        }
      }

      const labels1 = Object.keys(finalMap)
      const values1 = Object.values(finalMap)

      setLabels(labels1)
      // @ts-ignore
      setValues(values1)

      const prompt = `The following are the PHQ-9 assessment scores over time:\nDates: ${labels1.join(
        ', '
      )}\nScores: ${values1.join(
        ', '
      )} can you explain the score to the patient this is a project please be free to provide any suggestion`

      const geminiResponse = await sendGemini(prompt, 1000)

      // setResponse(geminiResponse)
      slowResponse(geminiResponse)
    }
    fetchData()
  }, [])

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Mood Score',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-between">
        <div className="w-[800px] h-[800px] flex flex-col items-center gap-10 mt-10">
          <h1 className="font-bold text-xl">Mood Analysis</h1>
          <div ref={chartRef} className="w-full">
            <Line data={data} />
          </div>
          <button
            className="p-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition-all ease-in-out duration-300 w-full"
            onClick={downloadImage}
          >
            Download as PNG
          </button>
        </div>
        <Card className="w-full p-8 font-semibold mt-[-160px] mb-10">
          <Markdown>{response}</Markdown>
        </Card>
      </div>
    </main>
  )
}

export default LineChart
