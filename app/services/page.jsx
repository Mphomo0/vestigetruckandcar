import PageWrapper from '@/components/layout/PageWrapper'
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
      <ServiceList />
    </>
  )
}
