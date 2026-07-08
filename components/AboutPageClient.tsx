'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { MapPin, Phone, Mail, Users, Award, Zap } from 'lucide-react'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'

const reasonIcons = [<Award key="award" className="w-8 h-8" />, <Zap key="zap" className="w-8 h-8" />, <Users key="users" className="w-8 h-8" />, <Phone key="phone" className="w-8 h-8" />, <MapPin key="map" className="w-8 h-8" />, <Mail key="mail" className="w-8 h-8" />]

export default function AboutPageClient() {
  const { language } = useApp()
  const trans = getTrans(language)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative py-24 mb-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about-hero-bg.png)' }}>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trans.aboutPage.heroTitle}</h1>
            <p className="text-lg text-white/90 max-w-2xl">{trans.aboutPage.heroSubtitle}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{trans.aboutPage.missionTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{trans.aboutPage.missionText1}</p>
              <p className="text-muted-foreground leading-relaxed">{trans.aboutPage.missionText2}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{trans.aboutPage.visionTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{trans.aboutPage.visionText1}</p>
              <p className="text-muted-foreground leading-relaxed">{trans.aboutPage.visionText2}</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{trans.aboutPage.whyChooseTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trans.aboutPage.reasons.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                    {reasonIcons[index]}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary/5 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{trans.aboutPage.getInTouchTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{trans.aboutPage.location}</h3>
                <p className="text-muted-foreground text-sm">
                  Mohamed V International Airport<br />
                  Casablanca, Morocco
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{trans.aboutPage.phone}</h3>
                <a href="tel:+212608652898" className="text-primary hover:text-accent transition">
                  +212 (0)6 08 65 28 98
                </a>
                <p className="text-muted-foreground text-sm mt-1">{trans.aboutPage.available247}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{trans.aboutPage.email}</h3>
                <a href="mailto:info@azrentcar.ma" className="text-primary hover:text-accent transition">
                  info@azrentcar.ma
                </a>
                <p className="text-muted-foreground text-sm mt-1">{trans.aboutPage.respond24h}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{trans.aboutPage.statsTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trans.aboutPage.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
