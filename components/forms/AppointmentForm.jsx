'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import { appointmentSchema } from '@/lib/schemas'
import AnimatedButton from '../layout/AnimatedButton'

export default function AppointmentForm() {
  const [firstChoiceDate, setFirstChoiceDate] = useState('')
  const [firstChoiceTime, setFirstChoiceTime] = useState('')
  const [secondChoiceDate, setSecondChoiceDate] = useState('')
  const [secondChoiceTime, setSecondChoiceTime] = useState('')

  const form = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      make: '',
      model: '',
      year: '',
      message: '',
      firstChoiceDate: '',
      firstChoiceTime: '',
      secondChoiceDate: '',
      secondChoiceTime: '',
    },
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-24'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            {/* Personal Information Section */}
            <h2 className='text-2xl font-semibold mb-4 mt-24'>
              Personal Information
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='First name'
                        className='p-8'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Last Name'
                        className='p-8'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Email address'
                        type='email'
                        className='p-8'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Phone number'
                        type='tel'
                        className='p-8'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
            </div>

            {/* Vehicles Information Section */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold mb-4 mt-12'>
                Vehicles Information
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <FormField
                  control={form.control}
                  name='make'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Make</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder='Make' className='p-8' />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='model'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder='Model' className='p-8' />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='Year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder='Year' className='p-8' />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What type of service do you need on your vehicle?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder='Enter Message'
                          rows={8}
                          className='p-8'
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <FormItem>
                  <FormLabel>First Choice Date</FormLabel>
                  <FormControl>
                    <input
                      type='date'
                      value={firstChoiceDate}
                      onChange={(e) => setFirstChoiceDate(e.target.value)}
                      className='w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>First Choice Time</FormLabel>
                  <FormControl>
                    <select
                      value={firstChoiceTime}
                      onChange={(e) => setFirstChoiceTime(e.target.value)}
                      className='w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      <option value=''>Select time</option>
                      {[...Array(10)].map((_, i) => {
                        const hour = i + 8
                        return (
                          <option key={hour} value={`${hour}:00`}>
                            {hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}
                          </option>
                        )
                      })}
                    </select>
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>Second Choice Date</FormLabel>
                  <FormControl>
                    <input
                      type='date'
                      value={secondChoiceDate}
                      onChange={(e) => setSecondChoiceDate(e.target.value)}
                      className='w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Second Choice Time</FormLabel>
                  <FormControl>
                    <select
                      value={secondChoiceTime}
                      onChange={(e) => setSecondChoiceTime(e.target.value)}
                      className='w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      <option value=''>Select time</option>
                      {[...Array(10)].map((_, i) => {
                        const hour = i + 8
                        return (
                          <option key={hour} value={`${hour}:00`}>
                            {hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`}
                          </option>
                        )
                      })}
                    </select>
                  </FormControl>
                </FormItem>
              </div>
            </div>
            <div className='bg-yellow-200 p-6 px-8'>
              Please note that the date and time you requested may not be
              available. We will contact you to confirm your actual appointment
              details.
            </div>
            <AnimatedButton className='mb-24' />
          </form>
        </Form>
      </div>
    </div>
  )
}
