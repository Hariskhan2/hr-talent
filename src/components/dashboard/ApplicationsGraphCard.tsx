"use client"
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import type { ApexOptions } from 'apexcharts'
import { SlidersHorizontal } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ApplicationsGraphCard = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 2,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      }
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['13 May', '14 May', '15 May', '16 May', '17 May', '18 May'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '9px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        },
        formatter: (value) => value.toString()
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4
    },
    colors: ['#0A66C2', '#E3F1FF'],
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '12px',
      labels: { colors: '#6B7280' },
      itemMargin: { horizontal: 10 }
    },
    tooltip: { enabled: true },
    fill: { opacity: 1 }
  }

  const series = [
    { name: 'Applied', data: [300, 350, 290, 320, 260, 330] },
    { name: 'Shortlisted', data: [60, 110, 90, 70, 60, 80] }
  ]

  return (
    <div className="bg-white rounded-xl pt-4 shadow-sm border border-gray-100">

      <div className="flex items-start justify-between px-4">
        <h3 className="font-medium text-gray-900">Applications Graph</h3>

        <div className="relative">
          <Select defaultValue="source">
            <SelectTrigger className="w-[140px] border-0 text-left bg-[#F3F3F3] text-gray-600 text-[12px] pl-8">
              <SlidersHorizontal className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              <SelectValue placeholder="By Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="source">By Source</SelectItem>
              <SelectItem value="location">By Location</SelectItem>
              <SelectItem value="department">By Department</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className="h-60">
        {isClient ? (
          <Chart options={chartOptions} series={series} type="bar" height="100%" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Loading chart...
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicationsGraphCard
