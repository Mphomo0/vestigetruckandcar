import PageWrapper from '@/components/layout/PageWrapper'

export default function Services() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Our Services'
        link={{ href: '/services', text: 'Our Services' }}
      ></PageWrapper>
    </>
  )
}
