import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import type { ApexOptions } from 'apexcharts'
import { Ellipsis } from 'lucide-react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AICandidateQualityOverviewCard = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        expandOnClick: false,
        donut: {
          size: '68%',
          labels: {
            show: false
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD'],
    stroke: {
      width: 6,
      colors: ['#F4F8FC'],
      lineCap: 'round',
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    labels: [
      'Avg Technical Score',
      'Avg Cultural Fit',
      'Avg Leadership Potential',
      'Proctoring Pass Rate'
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          }
        }
      }
    ]
  }

  const series = [30, 30, 25, 15]

  const legendData = [
    { label: 'Avg Technical Score', score: "30", color: '#1E40AF' },
    { label: 'Avg Cultural Fit', score: "30", color: '#3B82F6' },
    { label: 'Avg Leadership Potential', score: "25", color: '#60A5FA' },
    { label: 'Proctoring Pass Rate', score: "15", color: '#93C5FD' }
  ]

  return (
    <div className="bg-[#F4F8FC] rounded-xl p-4 shadow-sm border border-gray-100 w-full">
      <div className='flex justify-between items-center text-[#0C0D19]'>
        <h3 className="text-base font-medium">
          AI Candidate Quality Overview
        </h3>
        <Ellipsis />
      </div>

      <div className="relative flex items-center justify-center my-3 h-60 w-full">

          {isClient ? (
            <Chart options={chartOptions} series={series} type="donut" height="100%" />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Loading chart...
            </div>
          )}

        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-gray-900">100%</span>
          <span className="text-sm text-gray-500">Total Applicants</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3">
        {legendData.map((item, index) => (
          <div key={index}>
            <div className='flex items-center gap-2'>
              <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: item.color }} />
              <p className='text-[22px] font-medium'>{item.score}%</p>
            </div>
            <p className="text-[10px] text-gray-700 pl-5">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AICandidateQualityOverviewCard
