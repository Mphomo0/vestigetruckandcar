import AppointmentForm from '@/components/forms/AppointmentForm'
import PageWrapper from '@/components/layout/PageWrapper'

export default function Appointment() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Book Appointment'
        link={{ href: '/appointment', text: 'Appointment' }}
      ></PageWrapper>
      <AppointmentForm />
    </>
  )
}
