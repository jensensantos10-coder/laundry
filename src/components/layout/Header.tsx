import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAVIGATION_LINKS, BUSINESS_INFO } from '../../utils/constants'
import Button from '../ui/Button'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{BUSINESS_INFO.name}</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{BUSINESS_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Phone className="text-primary-600" size={18} />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <Link to="/contact">
              <Button size="sm">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors pt-4 border-t border-gray-200">
                <Phone className="text-primary-600" size={18} />
                <span className="font-semibold">{BUSINESS_INFO.phone}</span>
              </a>
              <Link to="/contact">
                <Button className="w-full">Book Now</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
