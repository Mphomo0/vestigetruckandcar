import Address from '@/components/sections/contact/Address'
import PageWrapper from '@/components/layout/PageWrapper'
import ContactForm from '@/components/forms/ContactForm'
import MapLocation from '@/components/sections/contact/Map'

export default function Contact() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Contact Us'
        link={{ href: '/contact', text: 'Contact' }}
      ></PageWrapper>
      <Address />
      <ContactForm />
      <MapLocation />
    </>
  )
}
