// page.js this is the entry point of application

'use client'
import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useEffect } from 'react'

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
})

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Mood Score',
      data: [1, 2, 3, 4, 5],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}

const updateDate = (date: any) => {
  const newDate = new Date(date)
  const formattedDate = newDate.toISOString().split('T')[0]
  return formattedDate
}

const LineChart = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/graph')
      const data = await response.json()
      const newData = []
      for (let i = 0; i < data.length; i++) {
        newData.push([updateDate(data[i].date), data[i].value])
      }

      console.log(newData)
    }
    fetchData()
  }, [])

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
