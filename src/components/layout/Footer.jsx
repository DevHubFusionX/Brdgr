import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#for-clients' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Integrations', href: '/#how-it-works' },
      { label: 'Updates', href: '/#updates' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Guides', href: '/guides' },
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/#for-partners' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-chalk py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer Framing Rounded Container with Watermark Behind */}
        <div className="bg-[#F1F3F5] rounded-[32px] sm:rounded-[40px] border border-grey-200/90 p-4 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xs">
          
          {/* Inner Floating White Card */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 lg:p-14 border border-grey-200/90 shadow-sm relative z-10">
            
            {/* Top Row: Logo & Tagline on Left, 3 Navigation Columns on Right */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
              
              {/* Left Column: Brand & Mission */}
              <div className="max-w-sm">
                <Logo className="h-7 w-auto" variant="navy" />
                <p className="text-xs sm:text-sm text-grey-500 font-normal leading-relaxed mt-4">
                  Brdgr helps brokers and growth partners run performance partnerships with verified attribution and guaranteed settlements — everything you need in one place.
                </p>
              </div>

              {/* Right Column: 3 Link Groups (Flex Row) */}
              <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-16 lg:gap-20 text-left">
                {FOOTER_COLUMNS.map((col) => (
                  <div key={col.title} className="min-w-[110px]">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-navy mb-4">
                      {col.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-xs sm:text-sm text-grey-500 hover:text-blue transition-colors block font-normal"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Row: Copyright on Left, Legal Links on Right */}
            <div className="mt-12 pt-6 border-t border-grey-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-grey-400">
              <div>
                © {new Date().getFullYear()} Brdgr. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                <Link
                  to="/terms"
                  className="hover:text-blue transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-blue transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

          </div>

          {/* Giant Subtle Watermark Typography ("Brdgr") underneath the floating card */}
          <div
            className="w-full text-center font-display font-bold text-[5.5rem] sm:text-[9rem] md:text-[13rem] lg:text-[17rem] tracking-tighter text-blue/[0.04] select-none pointer-events-none leading-none -mt-8 sm:-mt-16 lg:-mt-20 uppercase overflow-hidden"
            aria-hidden="true"
          >
            Brdgr
          </div>

        </div>

      </div>
    </footer>
  )
}
