import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

interface Attribute extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  id?: string
  name?: string
  type: string
  value?: string
  error?: string
  className?: string
  ref?: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Attribute> = (
  { label, type, id, name, placeholder, value, error, ...otherProps },
  ref
) => {
  let borderColor = 'border-gray-200 focus:border-black'
  if (error) {
    borderColor = 'border-red-500 focus:border-red'
  }
  return (
    <div>
      <label className='block mb-2 text-sm text-gray-600 '>{label}</label>
      <input
        type={type}
        name={name}
        ref={ref}
        placeholder={placeholder}
        defaultValue={value}
        {...otherProps}
        className={
          'block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md focus:outline-none ' +
          borderColor
        }
      />
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  )
}

const FormInput = React.forwardRef(Input)

export { FormInput }
