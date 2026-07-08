'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language, Currency } from '@/lib/i18n'

interface AppContextType {
  language: Language
  currency: Currency
  setLanguage: (lang: Language) => void
  setCurrency: (curr: Currency) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [currency, setCurrencyState] = useState<Currency>('MAD')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    const savedCurrency = localStorage.getItem('currency') as Currency | null
    if (savedLanguage) setLanguageState(savedLanguage)
    if (savedCurrency) setCurrencyState(savedCurrency)
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr)
    localStorage.setItem('currency', curr)
  }

  return (
    <AppContext.Provider value={{ language, currency, setLanguage, setCurrency }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
