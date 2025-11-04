import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { BUSINESS_INFO, NAVIGATION_LINKS } from '../../utils/constants'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{BUSINESS_INFO.name}</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{BUSINESS_INFO.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>{BUSINESS_INFO.hours.weekdays}</p>
                  <p className="mt-1">{BUSINESS_INFO.hours.saturday}</p>
                  <p className="mt-1">{BUSINESS_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
