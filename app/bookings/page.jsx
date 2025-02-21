import React from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import PageWrapper from '@/components/layout/PageWrapper'
import dummyData from '@/lib/dummyData.json'

export default function Bookings() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Service Bookings'
        link={{ href: '/bookings', text: 'Service Bookings' }}
      ></PageWrapper>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <DataTable columns={columns} data={dummyData} />
      </div>
    </>
  )
}
