import * as z from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().regex(/^((\+27|0)[ ]?)[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{4}$/, {
    message:
      'Please enter a valid South African phone number (at least 10 digits).',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  serviceType: z.enum(
    [
      'Car Wash',
      'Engine Repair',
      'Oil Change',
      'Car Repair',
      'Car Service',
      'Truck Repair',
      'Truck Service',
    ],
    {
      required_error: 'Service type is required.',
      invalid_type_error: 'Invalid service type selected.',
    }
  ),
})

const appointmentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^((\+27|0)[ ]?)[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{4}$/, {
    message:
      'Please enter a valid South African phone number (at least 10 digits).',
  }),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .string()
    .regex(/^\d{4}$/, 'Enter a valid year')
    .min(4, 'Year is required'),
  message: z.string().min(1, 'Message is required'),
  firstChoiceDate: z
    .string()
    .min(1, { message: 'First choice date is required' }),
  firstChoiceTime: z.string().refine((value) => value !== '', {
    message: 'First choice time is required',
  }),
  secondChoiceDate: z
    .string()
    .min(1, { message: 'Second choice date is required' }),
  secondChoiceTime: z.string().refine((value) => value !== '', {
    message: 'Second choice time is required',
  }),
})

export { contactFormSchema, appointmentSchema }
