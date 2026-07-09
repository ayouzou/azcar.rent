import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { AppProvider } from '@/app/context/AppContext'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://azcar-rent.vercel.app/'),
  title: 'AZ Rent Car - Premium Car Rental in Morocco | Best Rates & Service',
  description: 'Rent premium cars across Morocco with AZ Rent Car. Available at Mohamed V Airport and major cities. 24/7 support, best rates, and reliable service since 2018.',
  keywords: 'car rental Morocco, rent car Casablanca, car hire airport, vehicle rental, luxury car rental, budget rental cars, car rental Marrakech, car rental Agadir',
  generator: 'by me Ayoub zouine',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azcar-rent.vercel.app/',
    siteName: 'AZ Rent Car',
    title: 'AZ Rent Car - Premium Car Rental in Morocco',
    description: 'Rent premium cars across Morocco with AZ Rent Car. Available at Mohamed V Airport and major cities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AZ Rent Car - Premium Car Rental Service',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@azrentcar',
    creator: '@azrentcar',
    title: 'AZ Rent Car - Premium Car Rental in Morocco',
    description: 'Rent premium cars across Morocco with AZ Rent Car.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://azcar-rent.vercel.app/',
    languages: {
      'en-US': 'https://azcar-rent.vercel.app//en',
      'fr-FR': 'https://azcar-rent.vercel.app//fr',
      'ar-MA': 'https://azcar-rent.vercel.app//ar',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AZ Rent Car',
    image: 'https://azcar-rent.vercel.app//og-image.jpg',
    description: 'Premium car rental service in Morocco with 24/7 support and best rates.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mohamed V International Airport',
      addressLocality: 'Casablanca',
      addressRegion: 'Grand Casablanca',
      postalCode: '20000',
      addressCountry: 'MA',
    },
    telephone: '+212608652898',
    email: 'info@azrentcar.com',
    url: 'https://azcar-rent.vercel.app/',
    sameAs: [
      'https://www.facebook.com/azrentcar',
      'https://www.instagram.com/azrentcar',
      'https://wa.me/212608652898',
    ],
    foundingDate: '2018',
    priceRange: '$$',
  }

  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const storedTheme = localStorage.getItem('theme')
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                  const isDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark

                  document.documentElement.classList.toggle('dark', isDark)
                  document.documentElement.classList.toggle('light', !isDark)
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
                } catch (e) {
                  console.error('Theme initialization failed', e)
                }
              })()
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          suppressHydrationWarning
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AppProvider>
          {children}
        </AppProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
