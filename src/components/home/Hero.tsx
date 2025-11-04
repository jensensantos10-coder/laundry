import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Truck } from 'lucide-react'
import gsap from 'gsap'
import Button from '../ui/Button'
import { BUSINESS_INFO } from '../../utils/constants'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8
      }, '-=0.5')
      .from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
      }, '-=0.4')
      .from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1
      }, '-=1')

      // Parallax effect on scroll
      const handleScroll = () => {
        const scrollY = window.scrollY
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            y: scrollY * 0.5,
            duration: 0.5
          })
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professional Laundry <span className="text-primary-600">Made Easy</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Experience premium laundry and dry cleaning services with free pickup & delivery. 
              Quick turnaround, affordable pricing, and expert care for all your fabrics.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <Truck size={20} />
                  Order Pickup
                </Button>
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone size={20} />
                  Call Us Now
                </Button>
              </a>
            </div>

            {/* Key Features */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">24h</div>
                <div className="text-sm text-gray-600">Quick Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">Pickup & Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🧺</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Clean Clothes</h3>
                  <p className="text-gray-600">Delivered to Your Door</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero
