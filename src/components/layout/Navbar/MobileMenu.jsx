import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Globe, Menu, X, ArrowRight, ChevronRight } from 'lucide-react'
import Logo from '../../common/Logo'
import { NAV_LINKS, SUPPORTED_LANGUAGES } from '../../../constants/navigation'

export default function MobileMenu({
  links = NAV_LINKS,
  languages = SUPPORTED_LANGUAGES,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  const toggleMenu = () => {
    if (!isOpen) {
      setIsRendered(true)
      requestAnimationFrame(() => {
        setIsOpen(true)
      })
    } else {
      closeMenu()
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsRendered(false)
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeMenu()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="p-2 text-navy hover:bg-grey-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue cursor-pointer"
        aria-label="Open mobile navigation sidebar"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Render Backdrop & Sidebar directly in document.body via Portal */}
      {isRendered &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[9999] md:hidden font-display">
            {/* Backdrop Blur Overlay */}
            <div
              className={`fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Slide-out Sidebar Drawer */}
            <aside
              className={`fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-sm bg-chalk shadow-2xl flex flex-col justify-between z-10 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              aria-label="Mobile navigation sidebar"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-grey-200 bg-white">
                <Logo className="h-7 w-auto" variant="navy" />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 text-navy hover:text-blue hover:bg-blue-50 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue cursor-pointer"
                  aria-label="Close navigation sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Navigation Body */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-grey-400 px-3">
                    Menu
                  </span>
                  <nav className="mt-2 flex flex-col space-y-1.5">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold tracking-tight text-navy hover:text-blue hover:bg-blue-50 active:bg-blue-100 transition-colors group cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-grey-400 group-hover:text-blue group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Sidebar Footer (Language + Login + CTA) */}
              <div className="px-5 py-5 border-t border-grey-200 space-y-4 bg-chalk-dark">
                {/* Language Switcher */}
                <div className="flex items-center justify-between text-xs text-grey-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Globe className="w-4 h-4 text-grey-400" /> Language
                  </span>
                  <div className="flex gap-1 bg-white p-1 rounded-lg border border-grey-200 shadow-2xs">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => setCurrentLang(lang.code)}
                        className={`px-2 py-0.5 text-xs rounded font-bold transition-all cursor-pointer ${
                          currentLang === lang.code
                            ? 'bg-blue text-white shadow-xs'
                            : 'text-grey-500 hover:text-navy'
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="w-full text-center py-2.5 text-sm font-semibold tracking-tight text-navy bg-white border border-grey-200 rounded-xl hover:bg-grey-100 active:scale-[0.99] transition-all shadow-xs"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="w-full flex items-center justify-center gap-2 text-center py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-blue hover:bg-blue-dark active:bg-blue-dark rounded-xl shadow-md shadow-blue/20 hover:shadow-lg transition-all active:scale-[0.99]"
                  >
                    <span>Get started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </div>
  )
}
