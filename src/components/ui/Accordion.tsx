import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 hover:border-primary-300 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center text-left group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{title}</span>
        <ChevronDown
          className={`text-primary-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-white text-gray-700">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
