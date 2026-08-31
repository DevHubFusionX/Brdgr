import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ForPartners() {
  return (
    <section
      id="for-partners"
      className="py-20 sm:py-28 lg:py-32 bg-chalk relative z-10 overflow-hidden border-t border-grey-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Asymmetric Flex Layout (NO grid) */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-16">
          
          {/* Left Column: Top Eyebrow + Bottom Pill Button */}
          <div className="flex flex-col justify-between items-start lg:w-1/4 shrink-0">
            <div>
              <span className="font-tech text-xs font-bold tracking-[0.2em] text-blue uppercase block mb-2">
                GROWTH PARTNER NETWORK
              </span>
              <div className="text-sm font-medium text-grey-500 leading-snug">
                London · Singapore · Dubai
              </div>
            </div>

            <div className="mt-10 lg:mt-auto pt-4">
              <Link
                to="/register?role=partner"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-blue hover:bg-blue-dark active:bg-blue-dark text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 active:scale-[0.98] group cursor-pointer"
              >
                <span>Join as Partner</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Statement Paragraph + 3 Stat Hatched Cards */}
          <div className="flex flex-col flex-1 max-w-4xl">
            
            {/* Elegant Main Headline Paragraph */}
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-normal leading-[1.32] text-navy tracking-tight">
              Monetise your audience where institutional quality seamlessly meets guaranteed execution, pushing boundaries and transforming traffic into predictable revenue. We believe in running partnerships on double-entry ledgers that not only protect agreements but also drive transparent growth.
            </p>

            {/* 3 Graphic Stat Cards (Horizontal Flex Row, NO grid) */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12 sm:mt-16 w-full items-stretch">
              
              {/* Card 1: 92% (Top Hatched Bar with Blue Accent) */}
              <div className="flex-1 bg-white rounded-2xl border border-grey-200/90 overflow-hidden flex flex-col justify-between min-h-[310px] p-6 shadow-2xs hover:border-grey-300 transition-all group">
                {/* Top Deep Navy Hatched Pattern Bar with Blue Top Line */}
                <div
                  className="h-10 w-full rounded-t-xl bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] border-t-2 border-blue"
                  aria-hidden="true"
                />

                <div className="mt-6 flex flex-col justify-end flex-1">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-navy tracking-tight">
                    92<span className="text-blue">%</span>
                  </div>
                  <p className="text-xs text-grey-500 font-normal leading-relaxed mt-4 max-w-[230px]">
                    Of our active growth partners achieve consistent monthly payouts delivered directly on time by the 5th business day.
                  </p>
                </div>
              </div>

              {/* Card 2: 64% (Mid Hatched Block with Glowing Blue Number) */}
              <div className="flex-1 bg-white rounded-2xl border border-grey-200/90 overflow-hidden flex flex-col justify-between min-h-[310px] shadow-2xs hover:border-grey-300 transition-all">
                {/* Upper Deep Navy Hatched Block containing the 64% stat in Blue */}
                <div
                  className="p-6 bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] text-white flex flex-col justify-between flex-1 relative overflow-hidden"
                >
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 bg-blue/25 rounded-full blur-xl pointer-events-none"
                    aria-hidden="true"
                  />
                  
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-light font-bold">
                    Cookieless S2S
                  </span>

                  <div className="font-display text-4xl sm:text-5xl font-bold text-blue-light tracking-tight mt-3">
                    64%
                  </div>
                </div>

                {/* Lower White Description Block */}
                <div className="p-6 bg-white">
                  <p className="text-xs text-grey-500 font-normal leading-relaxed max-w-[230px]">
                    Higher conversion capture rate recorded through our cookieless server-to-server postback attribution engine.
                  </p>
                </div>
              </div>

              {/* Card 3: 0% (Full Deep Navy Hatched Block with Blue Highlight) */}
              <div
                className="flex-1 rounded-2xl border border-grey-800 overflow-hidden flex flex-col justify-between min-h-[310px] p-6 shadow-2xs bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] text-white hover:border-grey-700 transition-all relative"
              >
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-blue/20 rounded-full blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-light font-bold">
                  Zero Clawbacks
                </span>

                <div className="mt-auto">
                  <div className="font-display text-4xl sm:text-5xl font-bold text-blue-light tracking-tight">
                    0%
                  </div>
                  <p className="text-xs text-grey-300 font-normal leading-relaxed mt-4 max-w-[230px]">
                    Payout clawbacks or arbitrary invoice deductions across all digitally signed agreements on the platform.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
