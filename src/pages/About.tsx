import React, { useEffect, useRef } from 'react'
import { Award, Leaf, Clock, Heart, Users, Shield } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../components/ui/Card'
import ServiceAreaMap from '../components/about/ServiceAreaMap'
import { TeamMember } from '../types'

gsap.registerPlugin(ScrollTrigger)

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Jennifer Martinez',
    role: 'Founder & CEO',
    bio: 'With 15 years of experience in the laundry industry, Jennifer founded FreshPress to bring professional care and convenience to every household.'
  },
  {
    id: '2',
    name: 'David Kim',
    role: 'Operations Manager',
    bio: 'David ensures smooth operations and maintains our high quality standards. His attention to detail keeps our customers satisfied.'
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    role: 'Customer Service Lead',
    bio: 'Sarah leads our customer service team with passion and dedication, ensuring every customer has an exceptional experience.'
  },
  {
    id: '4',
    name: 'Michael Rodriguez',
    role: 'Quality Control Specialist',
    bio: 'Michael\'s expertise in fabric care and stain removal ensures that every item receives the perfect treatment.'
  }
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Expert Care',
    description: 'Our trained professionals handle each item with expertise and attention to detail.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally safe detergents and energy-efficient equipment.',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: '24-48 hour standard service with same-day options available.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: '100% satisfaction guarantee. We\'re not happy until you are.',
    color: 'from-red-400 to-red-600'
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    description: 'Join our community of satisfied customers who trust us with their laundry.',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Insured & Bonded',
    description: 'Your items are protected with our comprehensive insurance coverage.',
    color: 'from-teal-400 to-teal-600'
  }
]

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      const whyCards = whyRef.current?.children
      if (whyCards) {
        gsap.from(whyCards, {
          scrollTrigger: {
            trigger: whyRef.current,
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

      const teamCards = teamRef.current?.children
      if (teamCards) {
        gsap.from(teamCards, {
          scrollTrigger: {
            trigger: teamRef.current,
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
              About FreshPress Laundry
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your trusted partner for professional laundry and dry cleaning services since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, FreshPress Laundry began with a simple mission: to provide 
                  professional laundry services that combine quality, convenience, and care. 
                  What started as a small neighborhood laundromat has grown into a trusted 
                  service provider for thousands of satisfied customers.
                </p>
                <p className="text-gray-700 mb-4">
                  We understand that your clothes are more than just fabric—they're an investment 
                  in your appearance and confidence. That's why we treat every item with the same 
                  care and attention we'd give our own.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to offer comprehensive laundry and dry cleaning services 
                  with free pickup and delivery, making professional care more accessible than ever.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">14+ Years</h3>
                    <p className="text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-gray-700 text-center">
                To provide exceptional laundry and dry cleaning services that exceed expectations, 
                while maintaining our commitment to environmental sustainability and customer satisfaction. 
                We strive to make professional fabric care convenient, affordable, and accessible to everyone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes FreshPress Laundry the preferred choice for thousands of customers
            </p>
          </div>

          <div ref={whyRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} hover className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals behind your clean clothes
            </p>
          </div>

          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member) => (
              <Card key={member.id} hover className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <ServiceAreaMap />

      {/* Shop Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art equipment and a clean, organized workspace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">
                      {i === 1 ? '🏢' : i === 2 ? '🧼' : '✨'}
                    </div>
                    <p className="text-lg font-semibold">
                      {i === 1 ? 'Modern Facility' : i === 2 ? 'Professional Equipment' : 'Quality Service'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
