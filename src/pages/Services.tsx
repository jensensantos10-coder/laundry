import React, { useEffect, useRef } from 'react'
import { FaTshirt, FaSprayCan, FaIcons, FaBoxOpen, FaShoePrints, FaBed, FaCheck } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../components/ui/Card'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FaTshirt,
    title: 'Laundry Service',
    description: 'Complete wash, dry, and fold service for your everyday clothing needs.',
    features: [
      'Premium detergents and fabric softeners',
      'Separate washing for colors and whites',
      'Professional folding and packaging',
      'Hypoallergenic options available',
      'Eco-friendly cleaning solutions'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: FaSprayCan,
    title: 'Dry Cleaning',
    description: 'Expert care for delicate fabrics and special garments that require professional attention.',
    features: [
      'Suits, dresses, and formal wear',
      'Delicate fabrics (silk, wool, cashmere)',
      'Stain removal expertise',
      'Hand-finishing for perfect results',
      'Protective garment bags included'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: FaIcons,
    title: 'Ironing & Pressing',
    description: 'Professional ironing and steam pressing for crisp, wrinkle-free clothes.',
    features: [
      'Steam pressing for dress shirts',
      'Professional creasing for pants',
      'Delicate fabric handling',
      'Hanging or folding options',
      'Quick turnaround available'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    icon: FaBoxOpen,
    title: 'Commercial Laundry',
    description: 'Bulk laundry solutions for businesses with high-volume needs.',
    features: [
      'Hotels and hospitality',
      'Restaurants and cafes',
      'Salons and spas',
      'Gyms and fitness centers',
      'Medical facilities'
    ],
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: FaShoePrints,
    title: 'Shoe Cleaning',
    description: 'Professional cleaning and care for all types of footwear.',
    features: [
      'Sneaker deep cleaning',
      'Leather shoe polishing',
      'Suede and nubuck care',
      'Odor removal treatment',
      'Water-resistant protection'
    ],
    color: 'from-red-400 to-red-600'
  },
  {
    icon: FaBed,
    title: 'Household Items',
    description: 'Cleaning services for larger household items and linens.',
    features: [
      'Bedding and comforters',
      'Curtains and drapes',
      'Tablecloths and napkins',
      'Blankets and throws',
      'Pillow cleaning and fluffing'
    ],
    color: 'from-teal-400 to-teal-600'
  }
]

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      const cards = cardsRef.current?.children
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From everyday laundry to specialized dry cleaning, we offer comprehensive 
              solutions for all your fabric care needs. Professional quality, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} hover>
                  <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Service Details
            </h2>
            
            <Accordion title="How does pickup and delivery work?" defaultOpen>
              <p className="mb-3">
                Our pickup and delivery service is designed for maximum convenience:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Schedule a pickup online, via phone, or through our app</li>
                <li>We arrive at your specified time and location</li>
                <li>Your items are tagged and processed at our facility</li>
                <li>We deliver your clean items back to you within 24-48 hours</li>
              </ol>
              <p className="mt-3">
                Pickup and delivery are completely free within our service area!
              </p>
            </Accordion>

            <Accordion title="What items can you clean?">
              <p className="mb-3">
                We can clean almost any fabric item, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Everyday clothing (shirts, pants, dresses, etc.)</li>
                <li>Delicate items (silk, wool, cashmere)</li>
                <li>Formal wear (suits, gowns, tuxedos)</li>
                <li>Household items (bedding, curtains, tablecloths)</li>
                <li>Shoes and accessories</li>
                <li>Commercial linens and uniforms</li>
              </ul>
              <p className="mt-3">
                If you're unsure about a specific item, just give us a call and we'll be happy to advise!
              </p>
            </Accordion>

            <Accordion title="Do you offer same-day service?">
              <p>
                Yes! We offer same-day service for an additional fee. Items must be picked up 
                before 9 AM to qualify for same-day delivery by 6 PM. This service is perfect 
                for urgent needs like business trips or special events. Contact us to confirm 
                availability in your area.
              </p>
            </Accordion>

            <Accordion title="How do you handle stains and special care items?">
              <p className="mb-3">
                Our experienced team follows a thorough process:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Each item is inspected for stains and damage</li>
                <li>Stains are pre-treated with specialized solutions</li>
                <li>Delicate items are hand-washed or dry-cleaned</li>
                <li>Special care instructions on labels are always followed</li>
                <li>Items are quality-checked before delivery</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Professional Care?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your first pickup today and discover why thousands of customers trust us with their laundry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Schedule Pickup
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
