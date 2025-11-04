import React, { useState, useEffect, useRef } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import gsap from 'gsap'
import 'leaflet/dist/leaflet.css'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { BUSINESS_INFO } from '../utils/constants'
import { validateEmail, validatePhone, validateRequired } from '../utils/validation'
import { ContactFormData } from '../types'
import L from 'leaflet'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!validateRequired(formData.service)) {
      newErrors.service = 'Please select a service'
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const position: [number, number] = [BUSINESS_INFO.location.lat, BUSINESS_INFO.location.lng]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions or ready to schedule a pickup? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>
                </Card>

                <Card hover>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <p>{BUSINESS_INFO.hours.weekdays}</p>
                        <p>{BUSINESS_INFO.hours.saturday}</p>
                        <p>{BUSINESS_INFO.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={BUSINESS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                  >
                    <FaFacebook className="text-primary-600 text-xl" />
                  </a>
                  <a
                    href={BUSINESS_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                  >
                    <FaInstagram className="text-primary-600 text-xl" />
                  </a>
                  <a
                    href={BUSINESS_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                  >
                    <FaTwitter className="text-primary-600 text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    error={errors.name}
                  />

                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    error={errors.email}
                  />

                  <Input
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    error={errors.phone}
                  />

                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="laundry">Laundry Service</option>
                      <option value="dry-cleaning">Dry Cleaning</option>
                      <option value="ironing">Ironing & Pressing</option>
                      <option value="commercial">Commercial Laundry</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                  </div>

                  <Input
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your laundry needs..."
                    required
                    multiline
                    rows={5}
                    error={errors.message}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-lg text-gray-600">
              Find us on the map or schedule a free pickup
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="h-[500px] p-0 overflow-hidden">
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-center p-2">
                      <strong className="text-lg">{BUSINESS_INFO.name}</strong>
                      <br />
                      <span className="text-sm">{BUSINESS_INFO.address}</span>
                      <br />
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-primary-600 hover:text-primary-700 text-sm"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
