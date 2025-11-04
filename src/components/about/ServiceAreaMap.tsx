import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import 'leaflet/dist/leaflet.css'
import { BUSINESS_INFO } from '../../utils/constants'
import { validateZipCode } from '../../utils/validation'
import Button from '../ui/Button'
import Card from '../ui/Card'
import L from 'leaflet'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const ServiceAreaMap: React.FC = () => {
  const [zipCode, setZipCode] = useState('')
  const [checkResult, setCheckResult] = useState<{ inArea: boolean; message: string } | null>(null)

  const handleCheckZipCode = () => {
    if (!validateZipCode(zipCode)) {
      setCheckResult({
        inArea: false,
        message: 'Please enter a valid 5-digit ZIP code'
      })
      return
    }

    // Simulate zip code checking (in real app, this would call an API)
    const serviceZipCodes = ['12345', '12346', '12347', '12348', '12349']
    const inArea = serviceZipCodes.includes(zipCode)

    setCheckResult({
      inArea,
      message: inArea
        ? '✓ Great news! We service your area. Free pickup and delivery available.'
        : '✗ Sorry, we don\'t currently service this ZIP code. Contact us to request service expansion.'
    })
  }

  const position: [number, number] = [BUSINESS_INFO.location.lat, BUSINESS_INFO.location.lng]
  const radiusInMeters = 10000 // 10km radius

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve the greater Fresh City area with free pickup and delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <Card className="h-[400px] p-0 overflow-hidden">
            <MapContainer
              center={position}
              zoom={12}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div className="text-center">
                    <strong>{BUSINESS_INFO.name}</strong>
                    <br />
                    {BUSINESS_INFO.address}
                  </div>
                </Popup>
              </Marker>
              <Circle
                center={position}
                radius={radiusInMeters}
                pathOptions={{
                  color: '#0ea5e9',
                  fillColor: '#0ea5e9',
                  fillOpacity: 0.1
                }}
              />
            </MapContainer>
          </Card>

          {/* ZIP Code Checker */}
          <div>
            <Card>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-primary-600 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Check Your ZIP Code
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Enter your ZIP code to see if we service your area
              </p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter ZIP code"
                  maxLength={5}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button onClick={handleCheckZipCode}>
                  <FaSearch />
                </Button>
              </div>
              {checkResult && (
                <div
                  className={`p-4 rounded-lg ${
                    checkResult.inArea
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <p
                    className={`${
                      checkResult.inArea ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {checkResult.message}
                  </p>
                </div>
              )}
            </Card>

            <Card className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Coverage Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Service radius: 10 miles from our location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Free pickup and delivery within service area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Same-day service available in select zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Expanding to new areas regularly</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaMap
