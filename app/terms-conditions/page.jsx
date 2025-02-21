'use client'

import React from 'react'
import PageWrapper from '@/components/layout/PageWrapper'

export default function TermsConditions() {
  return (
    <>
      <PageWrapper
        heading='Welcome To Our Company'
        title='Terms & Conditions'
        link={{ href: '/terms-conditions', text: 'Terms & Conditions' }}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8'>
        <h1 className='text-4xl font-bold text-gray-900'>Terms & Conditions</h1>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            1. Acceptance of Terms
          </h2>
          <p className='leading-relaxed text-gray-700'>
            By accessing and using the Vestige Truck & Car website ("the
            Website"), you agree to comply with and be bound by these Terms and
            Conditions. If you do not agree with these terms, please refrain
            from using the Website.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            2. Use of the Website
          </h2>
          <div className='space-y-2'>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>2.1. Eligibility:</span> You must
              be at least 18 years old to use this Website.
            </p>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>2.2. Prohibited Conduct:</span>{' '}
              You agree not to:
            </p>
            <ul className='list-disc pl-5 space-y-1 text-gray-700'>
              <li>Use the Website for any unlawful purposes.</li>
              <li>Interfere with the Website's operation or security.</li>
              <li>
                Attempt to gain unauthorized access to any part of the Website.
              </li>
            </ul>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            3. Service Bookings
          </h2>
          <div className='space-y-2'>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>3.1. Booking Process:</span> The
              Website offers an option to book vehicle services. All bookings
              are subject to confirmation and availability.
            </p>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>3.2. Estimates:</span> Any service
              estimates provided online are based on the information you supply
              and may vary upon physical inspection of the vehicle.
            </p>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>3.3. Final Quotation:</span> A
              definitive quote will be provided after an in-person assessment by
              an authorized Vestige Truck & Car representative.
            </p>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>3.4. Additional Work:</span> If
              further repairs are necessary, you will be contacted for approval
              before any additional work is undertaken.
            </p>
            <p className='leading-relaxed text-gray-700'>
              <span className='font-semibold'>3.5. Validity:</span> Online
              estimates are valid for seven (7) days from the date of issue.
            </p>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            4. Intellectual Property
          </h2>
          <p className='leading-relaxed text-gray-700'>
            All content on the Website, including text, images, logos, and
            trademarks, is the property of Vestige Truck & Car or its licensors
            and is protected by South African and international intellectual
            property laws. Unauthorized use, reproduction, or distribution of
            this content is prohibited.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            5. Privacy and Data Protection
          </h2>
          <p className='leading-relaxed text-gray-700'>
            We are committed to protecting your privacy. Personal information
            collected through the Website will be used in accordance with our
            Privacy Policy and the Protection of Personal Information Act 4 of
            2013.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            6. Limitation of Liability
          </h2>
          <p className='leading-relaxed text-gray-700'>
            While we strive to ensure the accuracy of the information on the
            Website, Vestige Truck & Car makes no warranties, express or
            implied, regarding the content's completeness or reliability. We are
            not liable for any direct or indirect damages arising from your use
            of the Website.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            7. Third-Party Links
          </h2>
          <p className='leading-relaxed text-gray-700'>
            The Website may contain links to third-party websites. These links
            are provided for convenience, and Vestige Truck & Car does not
            endorse or assume responsibility for the content or practices of
            these external sites.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            8. Modifications to Terms
          </h2>
          <p className='leading-relaxed text-gray-700'>
            Vestige Truck & Car reserves the right to modify these Terms and
            Conditions at any time without prior notice. Changes will be
            effective upon posting on the Website. Continued use of the Website
            constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>9. Governing Law</h2>
          <p className='leading-relaxed text-gray-700'>
            These Terms and Conditions are governed by the laws of the Republic
            of South Africa. Any disputes arising from these terms shall be
            subject to the exclusive jurisdiction of South African courts.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-gray-800'>
            10. Contact Information.
          </h2>
          <p className='leading-relaxed text-gray-700'>
            For any questions or concerns regarding these Terms and Conditions,
            please contact us at:
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
            By using the Website, you acknowledge that you have read,
            understood, and agree to these Terms and Conditions.
          </p>
        </div>
      </div>
    </>
  )
}
