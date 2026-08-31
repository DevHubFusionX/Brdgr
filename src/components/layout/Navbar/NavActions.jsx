import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

export default function NavActions() {
  return (
    <div className="hidden md:flex items-center gap-3 lg:gap-5">
      {/* Login Link with Flip Animation */}
      <Link
        to="/login"
        className="group relative inline-flex items-center font-display text-sm font-semibold tracking-tight px-3.5 py-1.5 rounded-lg text-navy hover:bg-grey-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
      >
        <span className="relative inline-flex flex-col h-[1.35em] overflow-hidden whitespace-nowrap">
          <span className="inline-block whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-full group-hover:opacity-0 group-hover:scale-95 text-navy">
            Login
          </span>
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 inline-block whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)] text-blue font-bold"
          >
            Login
          </span>
        </span>
      </Link>

      {/* Get Started CTA Button in Vibrant Royal Blue */}
      <Link
        to="/register"
        className="inline-flex items-center justify-center font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-blue hover:bg-blue-dark active:bg-blue-dark active:scale-[0.98] transition-all duration-200 px-5 py-2.5 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue cursor-pointer"
      >
        Get started
      </Link>

      {/* Locale / Language Selector */}
      <LanguageSelector />
    </div>
  )
}
