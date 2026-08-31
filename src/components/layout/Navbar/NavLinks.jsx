import NavLinkItem from './NavLinkItem'
import { NAV_LINKS } from '../../../constants/navigation'

export default function NavLinks({ links = NAV_LINKS, className = '' }) {
  return (
    <nav className={`hidden md:flex items-center gap-4 lg:gap-6 ${className}`}>
      {links.map((link) => (
        <NavLinkItem
          key={link.label}
          label={link.label}
          href={link.href}
        />
      ))}
    </nav>
  )
}
