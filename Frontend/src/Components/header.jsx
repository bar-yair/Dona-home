import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'בית', to: '/' },
  { label: 'סאונות', to: '/saunas' },
  { label: 'אביזרים לסאונה', to: '/sauna-accessories' },
  { label: 'פרקטים', to: '/parket-deck' },
  { label: 'גזיבו', to: '/gazebos' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50 pointer-events-none" style={{ background: 'transparent' }}>
      <nav
        dir="rtl"
        className="pointer-events-auto mt-4 w-[96vw] max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl bg-white rounded-full shadow-lg flex flex-row items-center px-2 sm:px-6 py-1.5 sm:py-3 border border-gray-200"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Mobile: logo right, hamburger left */}
        <div className="flex flex-row sm:hidden flex-1 items-center justify-between w-full">
          <div className="flex items-center min-w-[44px] mr-2">
            <Link to="/">
              <img src="DONA-HOMES.jpeg" alt="logo" className="object-contain w-10 h-10" />
            </Link>
          </div>
          <button
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="פתח תפריט"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#1e2952]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute top-[70px] left-4 right-4 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col z-50 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  to={item.to}
                  key={item.label}
                  className={`px-6 py-4 text-base font-semibold border-b last:border-b-0 border-gray-100 text-right transition-colors duration-200 ${location.pathname === item.to ? 'text-orange-600' : 'text-[#1e2952] hover:text-orange-700'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Desktop: links in centered row with equal spacing and logo */}
        <div className="hidden sm:flex flex-row items-center justify-center gap-8 w-full">
          <div className="flex items-center min-w-[60px]">
            <Link to="/">
              <img src="DONA-HOMES.jpeg" alt="logo" className="object-contain w-14 h-14" />
            </Link>
          </div>
          {navItems.map((item) => (
            <Link
              to={item.to}
              key={item.label}
              className={`text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap ${location.pathname === item.to ? 'text-orange-600' : 'text-[#1e2952] hover:text-orange-700'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
