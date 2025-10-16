"use client"
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Calendar } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TopJobRolesbyApplicationsCard = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  const chartOptions = {
    chart: {
      type: 'donut' as const,
      fontFamily: 'Inter, sans-serif',
      toolbar: { show: false }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
          labels: {
            show: true,
            name: { show: false },
            value: { show: false },
            total: {
              show: true,
              label: 'Total Applications',
              fontSize: '13px',
              fontWeight: 500,
              color: '#6B7280',
              formatter: () => '525'
            }
          }
        }
      }
    },
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    colors: ['#E3F1FF', '#97BCE1', '#E3F1FF', '#0A66C2'],
    legend: { show: false },
    tooltip: { enabled: false }
  }

  const series = [160, 140, 120, 105]

  const jobRoles = [
    { name: 'Engineering', count: 120, color: '#0A66C2' },
    { name: 'Marketing', count: 110, color: '#E3F1FF' },
    { name: 'Sales', count: 95, color: '#E3F1FF' },
    { name: 'Customer Support', count: 85, color: '#97BCE1' },
    { name: 'Finance', count: 65, color: '#E3F1FF' },
    { name: 'Human Resources', count: 50, color: '#E3F1FF' },
  ]

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-gray-900">
          Top Job Roles by Applications
        </h3>

        <div className="relative">
          <Select defaultValue="today">
            <SelectTrigger className="w-[120px] border-0 text-left bg-[#F3F3F3] text-gray-600 text-[12px] pl-8 rounded-md">
              <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center">

        <div>
          <div className="flex justify-center h-40">
            {isClient ? (
              <Chart
                options={chartOptions}
                series={series}
                type="donut"
                height="100%"
                width="100%"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Loading chart...
              </div>
            )}
          </div>
          <p className='font-semibold text-[24px] text-center pt-5'>525</p>
          <p className='text-[10px] text-[#6D6E75] text-center'>Total Applications</p>
        </div>

        <div className="border-l border-gray-100 pl-4 space-y-4">
          {jobRoles.map((role, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 shrink-0 rounded-[2px]"
                  style={{ backgroundColor: role.color }}
                />
                <span className="text-[11px] text-gray-600">{role.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {role.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopJobRolesbyApplicationsCard
