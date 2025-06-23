import { NavLink } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3">
          <img src="DONA-HOMES.jpeg" alt="logo" className="w-30 h-30" />
          <div className="leading-tight">
            <p className="text-base font-semibold text-gray-800"></p>
            {/* <p className="text-xs text-gray-500">Premium Wellness Solutions</p> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <nav dir="rtl" className="hidden lg:flex gap-8 text-base font-medium text-gray-700">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-green-700 border-b-2 border-green-600 pb-2 px-2" 
                : "hover:text-green-700 hover:border-b-2 hover:border-green-600 pb-2 px-2"
            }
          >
            בית
          </NavLink>
          <NavLink 
            to="/saunas" 
            className={({ isActive }) => 
              isActive 
                ? "text-green-700 border-b-2 border-green-600 pb-2 px-2" 
                : "hover:text-green-700 hover:border-b-2 hover:border-green-600 pb-2 px-2"
            }
          >
            סאונות
          </NavLink>
          <NavLink 
            to="/sauna-accessories" 
            className={({ isActive }) => 
              isActive 
                ? "text-green-700 border-b-2 border-green-600 pb-2 px-2" 
                : "hover:text-green-700 hover:border-b-2 hover:border-green-600 pb-2 px-2"
            }
          >
            אביזרים לסאונה
          </NavLink>
          <NavLink 
            to="/parket-deck" 
            className={({ isActive }) => 
              isActive 
                ? "text-green-700 border-b-2 border-green-600 pb-2 px-2" 
                : "hover:text-green-700 hover:border-b-2 hover:border-green-600 pb-2 px-2"
            }
          >
            פרקטים
          </NavLink>
          <NavLink 
            to="/gazebos" 
            className={({ isActive }) => 
              isActive 
                ? "text-green-700 border-b-2 border-green-600 pb-2 px-2" 
                : "hover:text-green-700 hover:border-b-2 hover:border-green-600 pb-2 px-2"
            }
          >
            גזיבו
          </NavLink>
        </nav>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex flex-col items-end text-sm text-gray-600 gap-2">
          <a href="tel:+15551234567" className="hover:text-green-700 flex items-center gap-2">
            <Phone size={18} />
            <span>0544729425</span>
          </a>
          <a href="mailto:info@nordichome.com" className="hover:text-green-700 flex items-center gap-2">
            <Mail size={18} />
            <span>mail@dona-homes.com</span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white shadow-lg z-50">
            <nav dir="rtl" className="flex flex-col p-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-green-700 border-r-4 border-green-600 py-2 px-4" 
                    : "hover:text-green-700 hover:border-r-4 hover:border-green-600 py-2 px-4"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                בית
              </NavLink>
              <NavLink 
                to="/saunas" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-green-700 border-r-4 border-green-600 py-2 px-4" 
                    : "hover:text-green-700 hover:border-r-4 hover:border-green-600 py-2 px-4"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                סאונות
              </NavLink>
              <NavLink 
                to="/sauna-accessories" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-green-700 border-r-4 border-green-600 py-2 px-4" 
                    : "hover:text-green-700 hover:border-r-4 hover:border-green-600 py-2 px-4"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                אביזרים לסאונה
              </NavLink>
              <NavLink 
                to="/parket-deck" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-green-700 border-r-4 border-green-600 py-2 px-4" 
                    : "hover:text-green-700 hover:border-r-4 hover:border-green-600 py-2 px-4"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                פרקטים
              </NavLink>
              <NavLink 
                to="/gazebos" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-green-700 border-r-4 border-green-600 py-2 px-4" 
                    : "hover:text-green-700 hover:border-r-4 hover:border-green-600 py-2 px-4"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                גזיבו
              </NavLink>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <a href="tel:+15551234567" className="hover:text-green-700 flex items-center gap-2 py-2 px-4">
                  <Phone size={18} />
                  <span>0544729425</span>
                </a>
                <a href="mailto:info@nordichome.com" className="hover:text-green-700 flex items-center gap-2 py-2 px-4">
                  <Mail size={18} />
                  <span>mail@dona-homes.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
