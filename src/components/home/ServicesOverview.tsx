import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTshirt, FaSprayCan, FaIcons, FaBoxOpen } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../ui/Card'
import Button from '../ui/Button'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FaTshirt,
    title: 'Laundry Service',
    description: 'Professional washing, drying, and folding of your everyday clothes with premium detergents.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: FaSprayCan,
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate fabrics, suits, dresses, and special garments.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: FaIcons,
    title: 'Ironing & Pressing',
    description: 'Crisp, wrinkle-free clothes with professional ironing and steam pressing services.',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: FaBoxOpen,
    title: 'Commercial Laundry',
    description: 'Bulk laundry solutions for businesses including hotels, restaurants, and salons.',
    color: 'from-orange-400 to-orange-600'
  }
]

const ServicesOverview: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry and dry cleaning solutions tailored to your needs
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
