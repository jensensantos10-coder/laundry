import React from 'react'

interface InputProps {
  type?: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  error?: string
  multiline?: boolean
  rows?: number
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  multiline = false,
  rows = 4
}) => {
  const baseStyles = 'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200'
  const errorStyles = error ? 'border-red-500' : 'border-gray-300'

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseStyles} ${errorStyles}`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseStyles} ${errorStyles}`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input
