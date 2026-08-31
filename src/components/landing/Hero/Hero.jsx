import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import WordReveal from '../../common/WordReveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-chalk min-h-[calc(100vh-5rem)] lg:min-h-[640px] flex flex-col justify-center py-16 sm:py-20 lg:py-24">
      {/* Subtle ambient light blue glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10 flex justify-center"
        aria-hidden="true"
      >
        <div className="w-[1000px] h-[450px] bg-blue/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          
          {/* Left Column: Headline */}
          <div className="flex-1 max-w-2xl text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.25rem] font-bold text-navy tracking-tight leading-[1.08]">
              <WordReveal
                text="The Platform That Runs Partnerships End to End."
                fromColor="#94A3B8"
                toColor="#0F172A"
                delay={0.1}
                staggerDuration={0.06}
              />
            </h1>
          </div>

          {/* Right Column: Subtext + CTAs + Trust Metrics */}
          <div className="flex-1 max-w-xl text-left flex flex-col justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-grey-500 font-normal leading-relaxed">
              <WordReveal
                text="Discover vetted growth partners, standardise electronic contracts, track cookieless server-side attribution, screen for fraud, and settle monthly payouts on an auditable double-entry ledger."
                fromColor="#94A3B8"
                toColor="#475569"
                delay={0.25}
                staggerDuration={0.03}
              />
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Vibrant Brand Royal Blue Button */}
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2.5 bg-blue hover:bg-blue-dark active:bg-blue-dark text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 transition-all active:scale-[0.98] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/20 text-white group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>Start Free Trial</span>
              </Link>

              <Link
                to="/register?role=partner"
                className="inline-flex items-center justify-center bg-white border border-grey-300 hover:border-navy hover:bg-grey-100 text-navy text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl shadow-2xs transition-all active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                Join as Partner
              </Link>
            </div>

            {/* Key Trust Highlights (Flex Row) */}
            <div className="mt-8 pt-6 border-t border-grey-200/80 flex flex-row gap-8 sm:gap-12">
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-navy">5-Step Engine</div>
                <div className="text-xs text-grey-500 font-medium mt-0.5">Vet · Match · Contract · Track · Pay</div>
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-navy">Audited Ledger</div>
                <div className="text-xs text-grey-500 font-medium mt-0.5">Monthly USD Payouts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
