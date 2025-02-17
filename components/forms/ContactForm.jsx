'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, PencilIcon, Phone, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/schemas'
import AnimatedButton from '../layout/AnimatedButton'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      serviceType: '',
    },
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-2'>
      <div className='border border-gray-200 rounded-lg shadow-lg mb-6'>
        <h1 className='text-2xl font-bold my-12 pl-10'>Get A Quote</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col lg:flex-row mb-6 gap-4 px-10'>
            <div className='relative w-full'>
              <User
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                size={20}
              />
              <Input
                id='fullName'
                type='text'
                placeholder='Enter your name'
                className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 p-8'
                {...register('fullName')}
              />
              {errors.fullName && (
                <p className='text-red-500'>{errors.fullName.message}</p>
              )}
            </div>
            <div className='relative w-full'>
              <Mail
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                size={20}
              />
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 p-8'
                {...register('email')}
              />
              {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col lg:flex-row mb-6 gap-4 px-10'>
            <div className='relative w-full'>
              <Select onValueChange={(value) => setValue('serviceType', value)}>
                <SelectTrigger
                  className={`w-full pl-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 p-8 ${
                    errors.serviceType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <SelectValue placeholder='Select Service Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Car Wash'>Car Wash</SelectItem>
                  <SelectItem value='Engine Repair'>Engine Repair</SelectItem>
                  <SelectItem value='Oil Change'>Oil Change</SelectItem>
                  <SelectItem value='Car Repair'>Car Repair</SelectItem>
                  <SelectItem value='Car Service'>Car Service</SelectItem>
                  <SelectItem value='Truck Repair'>Truck Repair</SelectItem>
                  <SelectItem value='Truck Service'>Truck Service</SelectItem>
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className='text-red-500'>{errors.serviceType.message}</p>
              )}
            </div>
            <div className='relative w-full'>
              <Phone
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                size={20}
              />
              <Input
                id='text'
                type='tel'
                placeholder='Enter your phone number'
                className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 p-8'
                {...register('phone')}
              />
              {errors.phone && (
                <p className='text-red-500'>{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col lg:flex-row mb-6 gap-4 px-10'>
            <div className='relative w-full'>
              <PencilIcon
                className='absolute right-3 top-10 transform -translate-y-1/2 text-gray-500'
                size={20}
              />
              <Textarea
                id='message'
                rows={8}
                placeholder='Enter your message'
                className='w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 p-8'
                {...register('message')}
              />
              {errors.message && (
                <p className='text-red-500'>{errors.message.message}</p>
              )}
            </div>
          </div>
          <div className='px-10 mb-12'>
            <AnimatedButton />
          </div>
        </form>
      </div>
    </div>
  )
}
