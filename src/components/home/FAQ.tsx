import React from 'react'
import Accordion from '../ui/Accordion'
import { FAQ as FAQType } from '../../types'

const faqs: FAQType[] = [
  {
    id: '1',
    question: 'What is your typical turnaround time?',
    answer: 'Our standard turnaround time is 24-48 hours. We also offer same-day service for an additional fee if you need your items back urgently. Express service is available for pickup before 9 AM with delivery by 6 PM the same day.',
    category: 'turnaround'
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, cash, and digital payment methods including Apple Pay and Google Pay. Payment can be made at pickup, delivery, or through our online portal.',
    category: 'payment'
  },
  {
    id: '3',
    question: 'How do you handle special fabrics like silk and wool?',
    answer: 'We have specialized cleaning processes for delicate fabrics. Silk, wool, cashmere, and other special materials are hand-washed or dry-cleaned using gentle, fabric-specific detergents. Our experienced staff inspects each item and applies the appropriate care method.',
    category: 'fabric-care'
  },
  {
    id: '4',
    question: 'Do you offer pickup and delivery services?',
    answer: 'Yes! We offer free pickup and delivery within our service area. You can schedule a pickup through our website, app, or by calling us. We typically offer morning (7-10 AM) and evening (5-8 PM) pickup windows.',
    category: 'service'
  },
  {
    id: '5',
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Customer satisfaction is our top priority. If you\'re not completely satisfied with our service, please contact us within 48 hours of delivery. We\'ll re-clean the items at no additional charge or provide a full refund.',
    category: 'satisfaction'
  },
  {
    id: '6',
    question: 'How do you price your services?',
    answer: 'We offer both weight-based pricing (per pound) and per-item pricing. Weight-based is typically more economical for regular laundry, while per-item pricing is used for dry cleaning and special items. Check our Pricing page for detailed rates.',
    category: 'payment'
  },
  {
    id: '7',
    question: 'Can you remove tough stains?',
    answer: 'Yes, we specialize in stain removal! Our team is trained to handle various types of stains including wine, oil, ink, and more. We use professional-grade stain removers and techniques. While we can\'t guarantee 100% removal of all stains, we have a very high success rate.',
    category: 'fabric-care'
  },
  {
    id: '8',
    question: 'Do you offer commercial laundry services?',
    answer: 'Absolutely! We provide commercial laundry services for restaurants, hotels, salons, gyms, and other businesses. We offer competitive bulk pricing, flexible pickup schedules, and dedicated account management. Contact us for a custom quote.',
    category: 'service'
  }
]

const FAQ: React.FC = () => {
  const categories = [
    { id: 'turnaround', label: 'Turnaround Times' },
    { id: 'payment', label: 'Payment & Pricing' },
    { id: 'fabric-care', label: 'Fabric Care' },
    { id: 'service', label: 'Services' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and policies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category) => {
            const categoryFaqs = faqs.filter((faq) => faq.category === category.id)
            if (categoryFaqs.length === 0) return null

            return (
              <div key={category.id} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-primary-600 mr-3"></span>
                  {category.label}
                </h3>
                {categoryFaqs.map((faq, index) => (
                  <Accordion key={faq.id} title={faq.question} defaultOpen={index === 0}>
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
