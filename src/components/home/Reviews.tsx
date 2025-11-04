import React, { useState, useEffect } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Card from '../ui/Card'
import { Review } from '../../types'

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely fantastic service! My clothes came back spotless and perfectly folded. The pickup and delivery service is so convenient.',
    date: '2024-10-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best laundry service in town! They handled my delicate fabrics with such care. Highly recommend!',
    date: '2024-10-20'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'Quick turnaround and excellent quality. The staff is friendly and professional. Will definitely use again!',
    date: '2024-10-25'
  },
  {
    id: '4',
    name: 'David Thompson',
    rating: 4,
    comment: 'Great service overall. Prices are reasonable and the quality is top-notch. Very satisfied!',
    date: '2024-10-28'
  }
]

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    )
  }

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            {renderStars(5)}
            <span className="text-2xl font-bold text-gray-900 ml-2">{averageRating}</span>
          </div>
          <p className="text-gray-600">Based on {reviews.length} reviews</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="min-h-[250px]">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentIndex].rating)}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                "{reviews[currentIndex].comment}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(reviews[currentIndex].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <FaChevronLeft className="text-primary-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <FaChevronRight className="text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
