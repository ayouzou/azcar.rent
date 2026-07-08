'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useApp } from '@/app/context/AppContext'
import { getTrans } from '@/lib/i18n'
import { WHATSAPP_NUMBER, sendWhatsAppMessage } from '@/lib/whatsapp'

export default function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false)
  const { language } = useApp()
  const trans = getTrans(language)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <button
      onClick={() => sendWhatsAppMessage(null, trans.whatsapp.generalInquiry, language)}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      title={`Contact us on WhatsApp: ${WHATSAPP_NUMBER}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}
