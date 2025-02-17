import PageWrapper from '@/components/layout/PageWrapper'
import About1 from '@/components/sections/about/About1'
import ApprovedInsurer from '@/components/sections/about/ApprovedInsurer'
import CTA1 from '@/components/sections/about/CTA1'
import Skills from '@/components/sections/about/Skills'
import Testimonials from '@/components/sections/about/Testimonials'
import WhyChooseUs2 from '@/components/sections/about/WhyChooseUs2'

export default function About() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='About Us'
        link={{ href: '/about', text: 'About Us' }}
      ></PageWrapper>
      <About1 />
      <WhyChooseUs2 />
      <CTA1 />
      <Skills />
      <Testimonials />
      <ApprovedInsurer />
    </>
  )
}
