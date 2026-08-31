import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-chalk relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Royal Navy Card with Ambient Blue Lighting */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-blue/20 bg-navy-dark p-10 sm:p-16 lg:p-20 text-center shadow-2xl shadow-navy/30">
          
          {/* Subtle Ambient Radial Blue Glow */}
          <div
            className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-light/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Main Headline (White text) */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12]">
              See what Brdgr can do for your partnerships
            </h2>

            {/* Subtitle Description (Light Grey text) */}
            <p className="text-sm sm:text-base md:text-lg text-grey-300 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
              The institutional partner infrastructure built for the complexity of performance trading, cookieless attribution, and guaranteed double-entry settlements.
            </p>

            {/* Centered Pill Action Buttons (Brand Royal Blue Primary) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2.5 bg-blue hover:bg-blue-dark active:bg-blue-dark text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-blue/25 hover:shadow-lg hover:shadow-blue/35 active:scale-[0.98] w-full sm:w-auto group cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/register?role=partner"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-[0.98] w-full sm:w-auto cursor-pointer"
              >
                Join as Partner
              </Link>
            </div>

            {/* Trust Highlights (Grey text with Blue checkmarks) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-grey-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-light" />
                14-Day Free Broker Trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-light" />
                24-Hour Partner Vetting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-light" />
                No Credit Card Required
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
