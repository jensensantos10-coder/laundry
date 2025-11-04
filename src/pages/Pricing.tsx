import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaStar, FaTags } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

gsap.registerPlugin(ScrollTrigger)

const weightBasedPricing = [
  { weight: 'Up to 10 lbs', price: '$15.99', savings: '' },
  { weight: '11-20 lbs', price: '$1.49/lb', savings: 'Most Popular' },
  { weight: '21-30 lbs', price: '$1.39/lb', savings: 'Save 7%' },
  { weight: '31+ lbs', price: '$1.29/lb', savings: 'Save 13%' }
]

const perItemPricing = [
  { category: 'Shirts & Tops', items: [
    { name: 'Dress Shirt', price: '$3.99' },
    { name: 'T-Shirt', price: '$2.49' },
    { name: 'Blouse', price: '$4.99' },
    { name: 'Sweater', price: '$6.99' }
  ]},
  { category: 'Pants & Bottoms', items: [
    { name: 'Pants/Slacks', price: '$5.99' },
    { name: 'Jeans', price: '$4.99' },
    { name: 'Skirt', price: '$5.49' },
    { name: 'Shorts', price: '$3.99' }
  ]},
  { category: 'Suits & Formal', items: [
    { name: '2-Piece Suit', price: '$14.99' },
    { name: '3-Piece Suit', price: '$19.99' },
    { name: 'Dress/Gown', price: '$12.99' },
    { name: 'Tuxedo', price: '$16.99' }
  ]},
  { category: 'Household Items', items: [
    { name: 'Comforter (Twin)', price: '$18.99' },
    { name: 'Comforter (Queen)', price: '$24.99' },
    { name: 'Comforter (King)', price: '$29.99' },
    { name: 'Curtains (per panel)', price: '$12.99' }
  ]}
]

const packages = [
  {
    name: 'Basic',
    price: '$79',
    period: '/month',
    description: 'Perfect for individuals',
    features: [
      'Up to 40 lbs per month',
      'Free pickup & delivery',
      'Standard turnaround (48h)',
      'Basic folding',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: '$139',
    period: '/month',
    description: 'Best for families',
    features: [
      'Up to 80 lbs per month',
      'Free pickup & delivery',
      'Priority turnaround (24h)',
      'Premium folding & packaging',
      'Priority support',
      '10% off dry cleaning'
    ],
    popular: true
  },
  {
    name: 'Business',
    price: '$299',
    period: '/month',
    description: 'For commercial needs',
    features: [
      'Up to 200 lbs per month',
      'Free pickup & delivery',
      'Same-day service available',
      'Dedicated account manager',
      '24/7 support',
      '15% off all services',
      'Custom invoicing'
    ],
    popular: false
  }
]

const promotions = [
  {
    title: 'New Customer Special',
    discount: '20% OFF',
    description: 'First order for new customers',
    code: 'WELCOME20'
  },
  {
    title: 'Refer a Friend',
    discount: '$10 Credit',
    description: 'Both you and your friend get $10',
    code: 'REFER10'
  },
  {
    title: 'Monthly Bundle',
    discount: '15% OFF',
    description: 'Subscribe to any monthly package',
    code: 'MONTHLY15'
  }
]

const Pricing: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const packagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      const packageCards = packagesRef.current?.children
      if (packageCards) {
        gsap.from(packageCards, {
          scrollTrigger: {
            trigger: packagesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Choose the pricing model that works best for you. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly Packages
            </h2>
            <p className="text-lg text-gray-600">
              Save more with our convenient monthly subscription plans
            </p>
          </div>

          <div ref={packagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FaStar className="mr-1" /> Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className="w-full"
                    variant={pkg.popular ? 'primary' : 'outline'}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weight-Based Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pay-As-You-Go Pricing
            </h2>
            
            <Card className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weight-Based Pricing</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Weight</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weightBasedPricing.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">{item.weight}</td>
                        <td className="py-3 px-4 text-primary-600 font-semibold">{item.price}</td>
                        <td className="py-3 px-4">
                          {item.savings && (
                            <span className={`text-sm ${item.savings.includes('Popular') ? 'text-accent-600 font-semibold' : 'text-green-600'}`}>
                              {item.savings}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {perItemPricing.map((category, index) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-primary-600 font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Promotions
            </h2>
            <p className="text-lg text-gray-600">
              Take advantage of our special offers and save even more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="text-center border-2 border-accent-200">
                <FaTags className="text-accent-500 text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{promo.title}</h3>
                <div className="text-3xl font-bold text-accent-600 mb-2">{promo.discount}</div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="bg-gray-100 rounded-lg py-2 px-4 inline-block">
                  <span className="text-sm font-mono font-semibold text-gray-900">
                    Code: {promo.code}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your first pickup and experience the convenience of professional laundry service.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Book Your First Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing
