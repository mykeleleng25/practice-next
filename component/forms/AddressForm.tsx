import { useState } from 'react'
import { FormWrapper } from '../FormWrapper'
import { FormInput } from '../Inputs'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { InterfaceFormData } from './_typesafe'

type UserFormProps = {
  register: UseFormRegister<any>
  errors: FieldErrorsImpl<Partial<InterfaceFormData>>
}

export function AddressForm({ register, errors }: UserFormProps) {
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
    </FormWrapper>
  )
}
