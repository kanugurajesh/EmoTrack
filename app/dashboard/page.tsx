// page.js this is the entry point of application
'use client'

import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useEffect, useState } from 'react'

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
})

const updateDate = (date: any) => {
  const newDate = new Date(date)
  const formattedDate = newDate.toISOString().split('T')[0]
  return formattedDate
}

const LineChart = () => {
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/graph')
      const data = await response.json()
      const newData = []

      for (let i = 0; i < data.length; i++) {
        newData.push([updateDate(data[i].date), data[i].value])
      }

      // average all the values with the same date
      const finalData = []

      for (let i = 0; i < newData.length; i++) {
        let sum = newData[i][1]
        let count = 1
        for (let j = i + 1; j < newData.length; j++) {
          if (newData[i][0] === newData[j][0]) {
            sum += newData[j][1]
            count++
          }
        }
        finalData.push([newData[i][0], sum / count])
      }

      const labels = []
      const values = []

      for (let i = 0; i < finalData.length; i++) {
        labels.push(finalData[i][0])
        values.push(finalData[i][1])
      }

      // @ts-ignore
      setLabels(labels)
      // @ts-ignore
      setValues(values)
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
    <main className="flex flex-col items-center">
      <div style={{ width: '700px', height: '700px', marginTop: '40px' }}>
        <h1>Mood Analysis</h1>
        <Line data={data} />
      </div>
    </main>
  )
}
export default LineChart
