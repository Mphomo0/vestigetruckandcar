import PageWrapper from '@/components/layout/PageWrapper'
import CTA1 from '@/components/sections/about/CTA1'
import Testimonials from '@/components/sections/about/Testimonials'
import ClientsLogo from '@/components/sections/home/ClientsLogo'
import ServiceList from '@/components/sections/services/ServiceList'
import ServicesSection from '@/components/sections/services/ServiceSection'

export default function Services() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Our Services'
        link={{ href: '/services', text: 'Our Services' }}
      ></PageWrapper>
      <ServicesSection />
      <CTA1 />
      <ServiceList />
      <Testimonials />
      <ClientsLogo />
    </>
  )
}
