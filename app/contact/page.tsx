'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { sendWhatsAppMessage } from '@/lib/whatsapp'
import { useState } from 'react'

export default function ContactPage() {
  const { language } = useApp()
  const trans = getTrans(language)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = trans.whatsapp.contactMessage
      .replace('{name}', formData.name)
      .replace('{email}', formData.email)
      .replace('{message}', formData.message)
    sendWhatsAppMessage(null, message, language)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 mb-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/contact-hero-bg.png)' }}>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trans.contactPage.heroTitle}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {trans.contactPage.heroSubtitle}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{trans.contactPage.getInTouchTitle}</h2>

              <div className="space-y-6 mb-12">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{trans.contactPage.location}</h3>
                    <p className="text-muted-foreground">
                      Mohamed V International Airport<br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{trans.contactPage.phone}</h3>
                    <a href="tel:+212608652898" className="text-primary hover:text-accent transition">
                      +212 (0)6 08 65 28 98
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{trans.contactPage.email}</h3>
                    <a href="mailto:info@azrentcar.ma" className="text-primary hover:text-accent transition">
                      info@azrentcar.ma
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{trans.contactPage.whatsapp}</h3>
                    <button
                      onClick={() => sendWhatsAppMessage(null, trans.whatsapp.generalInquiry, language)}
                      className="text-primary hover:text-accent transition"
                    >
                      {trans.contactPage.chatWithUs}
                    </button>
                  </div>
                </div>

                {/* Business Hours */}
                {/* <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Map */}
              <div className="h-80 bg-muted rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1439629626277!2d-7.589824!3d33.3734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMohammed%20V%20International%20Airport!5e0!3m2!1sen!2sma!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{trans.contactPage.sendUsMessageTitle}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    {trans.contactPage.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    {trans.contactPage.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    {trans.contactPage.message}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-lg transition-colors active:scale-95"
                >
                  {trans.contactPage.sendViaWhatsApp}
                </button>
              </form>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span dangerouslySetInnerHTML={{ __html: trans.contactPage.tip }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
