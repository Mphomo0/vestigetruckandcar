import Testimonials from '@/components/sections/about/Testimonials'
import AboutSection from '@/components/sections/home/AboutSection'
import ClientsLogo from '@/components/sections/home/ClientsLogo'
import Hero from '@/components/sections/home/Hero'
import OurServices from '@/components/sections/home/OurServices'
import WhyChooseUs from '@/components/sections/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <ClientsLogo />
    </>
  )
}
