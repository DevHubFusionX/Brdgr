// Reusable rolling/flipping text navigation link
export default function NavLinkItem({ label, href, onClick, className = '' }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center font-display text-sm font-semibold tracking-tight px-3 py-1.5 rounded-lg text-navy cursor-pointer hover:bg-grey-100 hover:shadow-xs transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue ${className}`}
    >
      {/* Overflow-hidden container masking the 3D rolling text */}
      <span className="relative inline-flex flex-col h-[1.35em] overflow-hidden whitespace-nowrap">
        {/* Primary text */}
        <span className="inline-block whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-full group-hover:opacity-0 group-hover:scale-95 text-navy/90">
          {label}
        </span>
        {/* Secondary text (rolls in from top with bright blue glow) */}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 inline-block whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)] text-blue font-bold"
        >
          {label}
        </span>
      </span>
    </a>
  )
}
