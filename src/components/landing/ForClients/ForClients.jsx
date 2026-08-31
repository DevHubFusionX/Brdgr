import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap, Receipt, CheckCircle2 } from 'lucide-react'

export default function ForClients() {
  return (
    <section
      id="for-clients"
      className="py-20 sm:py-28 lg:py-32 bg-chalk relative z-10 overflow-hidden border-t border-grey-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Flex layout: Headline on left, Eyebrow & Button on right, NO grid) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 sm:pb-16 border-b border-grey-200/80">
          
          {/* Left: Bold Steve Jobs Style Headline & Subtext */}
          <div className="max-w-3xl text-left">
            <span className="font-tech text-xs font-bold tracking-[0.2em] text-blue uppercase block mb-3">
              FOR BROKERS & PROPRIETARY TRADING FIRMS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
              Scale your partner volume.
            </h2>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-grey-400 tracking-tight mt-1.5 leading-[1.05]">
              Without the operational chaos.
            </p>
            <p className="text-base sm:text-lg text-grey-500 font-normal leading-relaxed mt-5 max-w-2xl">
              Brdgr provides institutional infrastructure to recruit pre-screened growth partners, stop fraud in real time, and settle monthly payouts on an immutable double-entry ledger.
            </p>
          </div>

          {/* Right: Vibrant Brand Royal Blue Pill CTA Button */}
          <div className="shrink-0">
            <Link
              to="/register?role=client"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-blue hover:bg-blue-dark active:bg-blue-dark text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 active:scale-[0.98] group cursor-pointer"
            >
              <span>Get Started as Client</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-white" />
            </Link>
          </div>

        </div>

        {/* Feature Cards Structure (Built with Flexbox, NO grid) */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6 w-full">
          
          {/* Hero Feature Split Card (Flex Row: 60% Left White / 40% Right Hatched Deep Navy) */}
          <div className="flex flex-col lg:flex-row rounded-3xl border border-grey-200/90 overflow-hidden bg-white shadow-2xs hover:border-grey-300 transition-all">
            
            {/* Left 60%: Feature Details */}
            <div className="flex-1 lg:flex-[6] p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue mb-6 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-snug">
                  100% Pre-Vetted Growth Partners
                </h3>
                <p className="text-sm sm:text-base text-grey-500 font-normal leading-relaxed mt-3 max-w-xl">
                  Eliminate fake leads and unqualified affiliates. Every partner in your matching pool undergoes rigorous compliance screening, audience authenticity auditing, and historical conversion verification before brief matching.
                </p>
              </div>

              {/* 3 Value Points (Flex Row with Royal Blue checkmarks) */}
              <div className="mt-8 pt-6 border-t border-grey-200/80 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-xs font-medium text-navy">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                  <span>Zero Bot / VPN Traffic</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-navy">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                  <span>Audited Channel History</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-navy">
                  <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                  <span>Sealed Counterparty Matching</span>
                </div>
              </div>
            </div>

            {/* Right 40%: Graphic Diagonal Hatched Deep Navy Block with Glowing Blue Metric */}
            <div className="flex-1 lg:flex-[4] p-8 sm:p-12 bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] text-white flex flex-col justify-between min-h-[280px] relative overflow-hidden">
              {/* Subtle Blue Glow Ambient Corner */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 bg-blue/25 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-light">
                  Compliance Benchmark
                </span>
                <div className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight mt-4">
                  <span className="text-blue-light">&lt;</span> 0.2%
                </div>
              </div>

              <p className="relative z-10 text-xs text-grey-300 font-normal leading-relaxed mt-6 max-w-xs">
                Average partner chargeback and dispute rate across all active institutional broker campaigns.
              </p>
            </div>

          </div>

          {/* Bottom Row: Two Equal Flex Cards (Flex Row, NO grid) */}
          <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
            
            {/* Left Card: Cookieless S2S Attribution */}
            <div className="flex-1 bg-white rounded-3xl border border-grey-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:border-grey-300 transition-all">
              <div>
                {/* Top Deep Navy Hatched Accent Bar */}
                <div
                  className="h-9 w-full rounded-t-xl bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] mb-6"
                  aria-hidden="true"
                />
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue">
                    Tracking Infrastructure
                  </span>
                </div>

                <div className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-3">
                  100% Server Attribution
                </div>

                <p className="text-sm text-grey-500 font-normal leading-relaxed mt-3">
                  Signed S2S postbacks record every funded trader directly from your backend — immune to iOS ad blockers, browser privacy restrictions, and cookie clears.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-grey-100 flex items-center justify-between text-xs">
                <span className="text-grey-400">Idempotent Postback Engine</span>
                <span className="font-semibold text-blue">Zero Dropped Conversions</span>
              </div>
            </div>

            {/* Right Card: Double-Entry Ledger Settlements */}
            <div className="flex-1 bg-white rounded-3xl border border-grey-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-2xs hover:border-grey-300 transition-all">
              <div>
                {/* Top Deep Navy Hatched Accent Bar */}
                <div
                  className="h-9 w-full rounded-t-xl bg-[repeating-linear-gradient(-45deg,#0B192C,#0B192C_2px,#1E293B_2px,#1E293B_6px)] mb-6"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center text-blue">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue">
                    Financial Settlement
                  </span>
                </div>

                <div className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-3">
                  Double-Entry Ledger
                </div>

                <p className="text-sm text-grey-500 font-normal leading-relaxed mt-3">
                  Every commission passes automated fraud screening before posting to an immutable ledger. Execute monthly USD manifests with 1-click precision.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-grey-100 flex items-center justify-between text-xs">
                <span className="text-grey-400">Monthly Automated Payouts</span>
                <span className="font-semibold text-blue">By the 5th Business Day</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
