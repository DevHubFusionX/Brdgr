import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Logo from '../../common/Logo'
import NavLinks from './NavLinks'
import NavActions from './NavActions'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Smart Navbar: Hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, 'change', (current) => {
    const prev = scrollY.getPrevious() ?? 0
    const diff = current - prev

    if (current <= 20) {
      setIsVisible(true)
      setIsScrolled(false)
    } else {
      setIsScrolled(true)
      if (diff > 5 && current > 80) {
        // Scrolling down -> hide navbar
        setIsVisible(false)
      } else if (diff < -5) {
        // Scrolling up -> show navbar
        setIsVisible(true)
      }
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full border-b border-grey-200/80 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBFBFA]/90 backdrop-blur-md shadow-xs'
          : 'bg-[#FBFBFA]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left section: Navy Logo + Primary Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0 flex items-center">
              <Logo className="h-7 md:h-8 w-auto" variant="navy" />
            </div>

            {/* Desktop Navigation Links */}
            <NavLinks />
          </div>

          {/* Right section: Login + CTA Button + Language Selector */}
          <NavActions />

          {/* Mobile Menu & Drawer */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  )
}
