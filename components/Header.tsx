'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useApp } from '@/app/context/AppContext'
import { getTrans, LANGUAGES, CURRENCIES, Language, Currency } from '@/lib/i18n'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Header() {
  const { language, currency, setLanguage, setCurrency } = useApp()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const trans = getTrans(language)

  const applyTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  }

  useEffect(() => {
    setIsClient(true)

    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  useEffect(() => {
    if (!isClient) return

    applyTheme(isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark, isClient])

  const toggleDarkMode = () => {
    setIsDark((current) => !current)
  }

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              AZ
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">AZ Rent Car</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              {trans.nav.home}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              {trans.nav.about}
            </Link>
            <Link href="/cars" className="text-foreground hover:text-primary transition">
              {trans.nav.cars}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              {trans.nav.contact}
            </Link>
          </nav>

          {/* Language, Currency & Dark Mode Selectors */}
          <div className="hidden md:flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value as Language)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm dark:bg-slate-900"
            >
              {Object.entries(LANGUAGES).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>

            <select
              value={currency}
              onChange={(e) => handleCurrencyChange(e.target.value as Currency)}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm dark:bg-slate-900"
            >
              {Object.entries(CURRENCIES).map(([key, value]) => (
                <option key={key} value={key}>
                  {key} - {value.name}
                </option>
              ))}
            </select>

            {isClient && (
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-muted rounded-lg border border-border transition"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col p-4 gap-3">
              <Link
                href="/"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {trans.nav.home}
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {trans.nav.about}
              </Link>
              <Link
                href="/cars"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {trans.nav.cars}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {trans.nav.contact}
              </Link>

              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <select
                  value={language}
                  onChange={(e) => {
                    handleLanguageChange(e.target.value as Language)
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm dark:bg-slate-900"
                >
                  {Object.entries(LANGUAGES).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>

                <select
                  value={currency}
                  onChange={(e) => {
                    handleCurrencyChange(e.target.value as Currency)
                    setIsMobileMenuOpen(false)
                  }}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm dark:bg-slate-900"
                >
                  {Object.entries(CURRENCIES).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>

                {isClient && (
                  <button
                    onClick={() => {
                      toggleDarkMode()
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm hover:bg-muted transition flex items-center justify-center gap-2 dark:bg-slate-900"
                    title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDark ? (
                      <>
                        <Sun className="w-4 h-4 text-yellow-500" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 text-slate-600" />
                        Dark Mode
                      </>
                    )}
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
