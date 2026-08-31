import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ShieldCheck,
  GitMerge,
  FileSignature,
  Activity,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImage from '../../../assets/images/Hero.jpeg'

const STEPS = [
  {
    number: '01',
    name: 'Vet',
    title: 'Vetting & Verification',
    shortDesc: 'Audit partner authenticity and compliance risk before matching.',
    detail:
      'We audit partner channels across YouTube, Telegram, Discord, and trading communities for genuine audience engagement, regulatory compliance, and past fraud history.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    name: 'Match',
    title: 'Intelligent Matching',
    shortDesc: 'Algorithmic brief scoring with sealed counterparty contact details.',
    detail:
      'Client campaign briefs are algorithmically matched to vetted partner profiles. Counterparty contact details remain strictly sealed until mutual acceptance.',
    icon: GitMerge,
  },
  {
    number: '03',
    name: 'Contract',
    title: 'Standardized Contracts',
    shortDesc: 'Mutual click-to-sign agreements locking in CPA & RevShare rates.',
    detail:
      'Deploy tamper-evident digital agreements with CPA, RevShare, or hybrid tiers. Mutual in-platform e-signatures release tracking assets and binding terms.',
    icon: FileSignature,
  },
  {
    number: '04',
    name: 'Track',
    title: 'Cookieless S2S Tracking',
    shortDesc: 'Signed server postbacks capturing every funded trader accurately.',
    detail:
      'Cookieless server-to-server attribution captures every conversion via signed postback endpoints with idempotency protection, immune to iOS ad blockers.',
    icon: Activity,
  },
  {
    number: '05',
    name: 'Pay',
    title: 'Double-Entry Settlements',
    shortDesc: 'Immutable ledger balance with guaranteed 5th-day USD payouts.',
    detail:
      'Approved commissions post to an auditable double-entry balance sheet. Monthly USD manifests disburse automatically without delay by the 5th business day.',
    icon: Wallet,
  },
]

const AUTO_SWITCH_INTERVAL = 4500
const MANUAL_PAUSE_DURATION = 9000

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const pauseTimeoutRef = useRef(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length)
    }, AUTO_SWITCH_INTERVAL)

    return () => clearInterval(interval)
  }, [isAutoPlaying, activeStep])

  const handleStepClick = (index) => {
    setActiveStep(index)
    setIsAutoPlaying(false)

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, MANUAL_PAUSE_DURATION)
  }

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 lg:py-32 bg-chalk relative z-10 overflow-hidden border-t border-grey-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Left Content Card + Right Visual Card with Glassmorphism Step Indicator (Flex Row, NO grid) */}
        <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
          
          {/* Top Left Card: Clean Chalk Card with Headline, Step Flow, Subtext, and CTA */}
          <div className="flex-1 lg:flex-[5] bg-[#F1F3F5] rounded-3xl p-8 sm:p-12 flex flex-col justify-between min-h-[480px]">
            <div>
              <span className="font-tech text-xs font-bold tracking-[0.2em] text-blue uppercase block mb-3">
                HOW IT WORKS · 5-STEP LIFECYCLE
              </span>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-navy tracking-tight leading-[1.15]">
                The complete five-step engine running partnerships from discovery to guaranteed settlement.
              </h2>

              {/* Interactive Step Sequence Breadcrumb (Flex Row) */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-grey-500">
                {STEPS.map((s, idx) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-blue text-white border-blue shadow-xs'
                        : 'bg-white text-grey-600 border-grey-200 hover:border-grey-400'
                    }`}
                  >
                    <span>{s.number} {s.name.toUpperCase()}</span>
                    {idx < STEPS.length - 1 && (
                      <ArrowRight className={`w-3 h-3 ${activeStep === idx ? 'text-white' : 'text-grey-400'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm sm:text-base text-grey-600 font-normal leading-relaxed">
                Brdgr replaces manual affiliate chaos with institutional rails — ensuring every growth partner is pre-screened, every conversion is tracked server-side, and every payout is settled on an immutable double-entry ledger.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-blue hover:bg-blue-dark active:bg-blue-dark active:scale-[0.98] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30"
                >
                  Start Free Trial
                </Link>
                <a
                  href="#for-clients"
                  className="text-xs font-semibold text-grey-600 hover:text-blue transition-colors"
                >
                  View Client Solutions →
                </a>
              </div>
            </div>
          </div>

          {/* Top Right Card: Photo Background + Floating Glassmorphism Active Step Inspector */}
          <div className="flex-1 lg:flex-[5] rounded-3xl overflow-hidden relative min-h-[480px] flex items-end justify-end p-6 sm:p-8 bg-grey-100 border border-grey-200/60 shadow-2xs">
            {/* Background Image */}
            <img
              src={heroImage}
              alt="Brdgr 5-Step Engine Infrastructure"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Blue Tint Gradient Overlay for contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating Frosted Glassmorphism Card */}
            <div className="relative z-10 backdrop-blur-xl bg-white/85 border border-white/60 rounded-2xl p-6 sm:p-7 shadow-xl shadow-navy/20 max-w-sm w-full text-left overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={STEPS[activeStep].number}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-blue bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                      STEP {STEPS[activeStep].number} OF 05
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Fully Automated
                    </span>
                  </div>

                  <div className="font-display text-2xl font-bold text-navy tracking-tight mt-3">
                    {STEPS[activeStep].title}
                  </div>

                  <p className="text-xs text-grey-600 font-normal leading-relaxed mt-2 min-h-[48px]">
                    {STEPS[activeStep].detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar showing active step countdown */}
              <div className="mt-5 pt-4 border-t border-grey-200/80 flex items-center justify-between">
                <span className="text-[11px] text-grey-400 font-mono">
                  {isAutoPlaying ? 'Auto-Advancing...' : 'Paused on Interaction'}
                </span>
                <button
                  type="button"
                  onClick={() => handleStepClick((activeStep + 1) % STEPS.length)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-blue transition-colors cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: 5 Numbered Step Cards in a Horizontal Flex Rail (Pure Flexbox, NO grid) */}
        <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mt-6 w-full items-stretch">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStep === idx

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => handleStepClick(idx)}
                className={`flex-1 rounded-2xl p-5 text-left flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-2xs relative overflow-hidden group ${
                  isActive
                    ? 'bg-navy text-white shadow-md scale-[1.02] border-transparent'
                    : 'bg-[#F1F3F5] text-navy hover:bg-[#E5E9EE] border border-transparent'
                }`}
              >
                {/* Auto-play Animated Progress Bar on Active Card */}
                {isActive && isAutoPlaying && (
                  <motion.div
                    key={`progress-${step.number}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTO_SWITCH_INTERVAL / 1000, ease: 'linear' }}
                    className="absolute top-0 left-0 h-1 bg-blue-light"
                  />
                )}

                {/* Step Top: Number Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-navy border border-grey-200'
                      }`}
                    >
                      {step.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-blue-light' : 'text-grey-400 group-hover:text-navy'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-display text-sm font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {step.name}
                  </h3>

                  <p
                    className={`text-[11px] font-normal leading-relaxed mt-1.5 transition-colors ${
                      isActive ? 'text-grey-300' : 'text-grey-500'
                    }`}
                  >
                    {step.shortDesc}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider transition-colors ${
                      isActive ? 'text-blue-light font-bold' : 'text-grey-400'
                    }`}
                  >
                    {isActive ? (isAutoPlaying ? 'Step Active' : 'Step Selected') : `Stage ${step.number}`}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-blue-light animate-pulse' : 'bg-grey-300'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
