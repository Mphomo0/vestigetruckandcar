import * as z from 'zod'

const contactFormSchema = z.object({
  fullName: z.string().min(3, {
    message: 'full Name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().regex(
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, // Regex for validating international and local phone numbers
    {
      message: 'Invalid phone number.',
    }
  ),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

const appointmentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .string()
    .min(4, 'Year must be 4 digits')
    .max(4, 'Year must be 4 digits'),
  message: z.string().min(1, 'Message is required'),
  firstChoiceDate: z.string().min(1, 'First choice date is required'),
  firstChoiceTime: z.string().min(1, 'First choice time is required'),
  secondChoiceDate: z.string().min(1, 'Second choice date is required'),
  secondChoiceTime: z.string().min(1, 'Second choice time is required'),
})

export { contactFormSchema, appointmentSchema }
