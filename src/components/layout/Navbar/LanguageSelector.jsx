import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { SUPPORTED_LANGUAGES } from '../../../constants/navigation'

export default function LanguageSelector({
  languages = SUPPORTED_LANGUAGES,
  defaultLang = 'EN',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(defaultLang)

  return (
    <div className="relative font-display">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-sm font-medium tracking-tight text-navy px-2.5 py-1.5 rounded-lg hover:bg-grey-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select language"
      >
        <Globe className="w-4 h-4 text-grey-500" />
        <span className="text-xs font-bold tracking-wider text-navy uppercase">
          {currentLang}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-grey-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-grey-200 py-1.5 z-20 animate-in fade-in zoom-in-95 duration-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setCurrentLang(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between hover:bg-grey-100 transition-colors cursor-pointer ${
                  currentLang === lang.code
                    ? 'text-blue bg-blue-50 font-bold'
                    : 'text-navy hover:text-blue'
                }`}
              >
                <span>{lang.name}</span>
                <span className="text-[10px] text-grey-400 uppercase">
                  {lang.code}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
