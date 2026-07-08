'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import Accordion from '@/components/Accordion'
import FeaturedCarsSection from '@/components/FeaturedCarsSection'
import MapSection from '@/components/MapSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CitiesSection from '@/components/CitiesSection'
import translations from '@/data/translations.json'

export default function PageClient() {
  const faqItems = translations.en.faq.map((item, index) => ({
    id: `faq-${index}`,
    question: item.question,
    answer: item.answer,
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen mt-3.5">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4">
          <AboutSection />
          <Accordion items={faqItems} title={translations.en.home.faqTitle} description={translations.en.home.faqDesc} />
          <FeaturedCarsSection />
        </div>
        <MapSection />
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsSection />
          <CitiesSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
