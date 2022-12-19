import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { FormWrapper } from '../FormWrapper'
import { FormInput } from '../Inputs'
import { InterfaceFormData } from './_typesafe'

type UserFormProps = {
  register: UseFormRegister<any>
  errors: FieldErrorsImpl<Partial<InterfaceFormData>>
}

export function UserForm({ register, errors }: UserFormProps) {
  return (
    <FormWrapper title='User Information'>
      <FormInput
        autoFocus
        type='text'
        label={'First Name'}
        placeholder={''}
        error={errors.firstName?.message}
        {...register('firstName', {
          required: 'This field is required',
        })}
      />
      <FormInput
        type='text'
        label={'Last Name'}
        placeholder={''}
        error={errors.lastName?.message}
        {...register('lastName', {
          required: 'This field is required',
        })}
      />
      <FormInput
        min={1}
        type='number'
        label={'Age'}
        placeholder={''}
        error={errors.age?.message}
        {...register('age', {
          required: 'This field is required',
        })}
      />
    </FormWrapper>
  )
}
