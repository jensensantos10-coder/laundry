import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 ${
        hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
