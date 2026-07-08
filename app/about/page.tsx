import { Metadata } from 'next'
import AboutPageClient from '@/components/AboutPageClient'

export const metadata: Metadata = {
  title: 'About AZ Rent Car - Premium Car Rental Service Since 2018',
  description: 'Learn about AZ Rent Car, Morocco\'s leading car rental company. Serving customers since 2018 with premium vehicles and excellent service across all major cities.',
  keywords: 'about AZ Rent Car, car rental company Morocco, rental service history, premium vehicle rentals',
  openGraph: {
    title: 'About AZ Rent Car - Premium Car Rental Service',
    description: 'Learn about AZ Rent Car, Morocco\'s leading car rental company since 2018.',
    type: 'website',
    url: 'https://azrentcar.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
