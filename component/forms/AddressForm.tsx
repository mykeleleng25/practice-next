import { useState } from 'react'
import { FormWrapper } from '../FormWrapper'
import { FormInput } from '../Inputs'
import Select from 'react-select'

type UserFormProps = {
  //   updateFields: (fields: Partial<UserData>) => void
  register: any
  errors: any
}

export function AddressForm({ register, errors }: UserFormProps) {
  const [selectedOptions, setSelectedOptions] = useState()

  // Array of all options
  const optionList = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'blue', label: 'Blue' },
    { value: 'white', label: 'White' },
  ]
  // Function triggered on selection
  function handleSelect(data: any) {
    setSelectedOptions(data)
  }

  return (
    <FormWrapper title='Address'>
      <FormInput
        autoFocus
        type='text'
        label={'Street'}
        placeholder={''}
        error={errors.street?.message}
        {...register('street', {
          required: 'This field is required',
        })}
      />
      <FormInput
        autoFocus
        type='text'
        label={'City'}
        placeholder={''}
        error={errors.city?.message}
        {...register('city', {
          required: 'This field is required',
        })}
      />
      <FormInput
        autoFocus
        type='text'
        label={'State'}
        placeholder={''}
        error={errors.state?.message}
        {...register('state', {
          required: 'This field is required',
        })}
      />
      <FormInput
        autoFocus
        type='text'
        label={'Zip code'}
        placeholder={''}
        error={errors.zip?.message}
        {...register('zip', {
          required: 'This field is required',
        })}
      />

      <h2>Choose your color</h2>
      <div className='dropdown-container'>
        <Select
          options={optionList}
          placeholder='Select color'
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          className='bg-black'
        />
      </div>
    </FormWrapper>
  )
}
