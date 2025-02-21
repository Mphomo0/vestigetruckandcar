import PageWrapper from '@/components/layout/PageWrapper'

export default function PrivacyPolicy() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Privacy Policy'
        link={{ href: '/privacy-policy', text: 'Privacy Policy' }}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8'>
        <h1 className='text-4xl font-bold text-gray-900'>Privacy Policy</h1>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>1. Introduction</h2>
          <p className='leading-relaxed text-gray-700'>
            Vestige Truck & Car ("we," "us," or "our") is committed to
            protecting your privacy. This Privacy Policy outlines how we
            collect, use, disclose, and safeguard your personal information when
            you visit our website www.vestigeauto.co.za or utilize our services,
            including booking services online.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            2. Information We Collect
          </h2>
          <div className='space-y-2'>
            <p className='leading-relaxed text-gray-700'>
              We may collect personal information from you in various ways,
              including:
            </p>
            <ul className='list-disc pl-5 space-y-1 text-gray-700'>
              <li>
                <span className='font-semibold'>
                  Personal Identification Information:
                </span>{' '}
                Name, email address, phone number, and physical address.
              </li>
              <li>
                <span className='font-semibold'>Vehicle Information:</span>{' '}
                Vehicle make, model, registration number, and service history.
              </li>
              <li>
                <span className='font-semibold'>Usage Data:</span> Information
                about your interactions with our website, such as IP address,
                browser type, access times, and referring website addresses.
              </li>
            </ul>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            3. How We Use Your Information
          </h2>
          <div className='space-y-2'>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>Service Provision:</span> To
              schedule and manage vehicle services and repairs
            </p>
            <ul className='list-disc pl-5 space-y-1 text-gray-700'>
              <li>
                <span className='font-semibold'>Communication:</span> To contact
                you regarding your service appointments, provide updates, and
                respond to inquiries.
              </li>
              <li>
                <span className='font-semibold'>Improvement:</span> To enhance
                our website, services, and customer experience.
              </li>
              <li>
                <span className='font-semibold'>Legal Compliance:</span> To
                comply with applicable laws and regulations.
              </li>
            </ul>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            4. Sharing Your Information
          </h2>
          <p className='leading-relaxed text-gray-700'>
            We do not sell or rent your personal information to third parties.
            However, we may share your information with:
          </p>
          <ul className='list-disc pl-5 space-y-1 text-gray-700'>
            <li>
              <span className='font-semibold'>Service Providers:</span> Trusted
              third parties who assist us in operating our website and providing
              our services, subject to confidentiality agreements.
            </li>
            <li>
              <span className='font-semibold'>Legal Authorities:</span> When
              required by law or to protect our rights and safety, or the rights
              and safety of others.
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>5. Data Security</h2>
          <p className='leading-relaxed text-gray-700'>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>6. Your Rights</h2>
          <p className='leading-relaxed text-gray-700'>
            You have the right to:
          </p>
          <ul className='list-disc pl-5 space-y-1 text-gray-700'>
            <li>
              <span className='font-semibold'>Access:</span> Request a copy of
              the personal information we hold about you.
            </li>
            <li>
              <span className='font-semibold'>Correction:</span> Request
              correction of any inaccurate or incomplete information.
            </li>
            <li>
              <span className='font-semibold'>Deletion:</span> Request the
              deletion of your personal information, subject to legal
              obligations.
            </li>
            <li>
              <span className='font-semibold'>Objection:</span> Object to the
              processing of your personal information under certain
              circumstances.
            </li>
          </ul>
          <p className='leading-relaxed text-gray-700'>
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            7. Cookies and Tracking Technologies
          </h2>
          <p className='leading-relaxed text-gray-700'>
            Our website uses cookies to enhance user experience. You can choose
            to accept or decline cookies through your browser settings.
            Declining cookies may affect the functionality of our website.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            8. Changes to This Privacy Policy
          </h2>
          <p className='leading-relaxed text-gray-700'>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>9. Contact Us</h2>
          <p className='leading-relaxed text-gray-700'>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className='leading-relaxed text-gray-700'>
            Vestige Truck & Car
            <br />
            3 Harnas Street, Stormill, Randburg, 1709 <br />
            Tel: (011) 474 7070
            <br />
            Email: info@vestigeauto.co.za
          </p>
          <p className='leading-relaxed text-gray-700'>
            By using our website and services, you consent to the terms outlined
            in this Privacy Policy.
          </p>
        </div>
      </div>
    </>
  )
}
