export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface PricingItem {
  id: string
  name: string
  price: string
  unit?: string
  description?: string
}

export interface PricingPackage {
  id: string
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}
