import { FormWrapper } from '../FormWrapper'
import { FormInput } from '../Inputs'

type UserFormProps = {
  //   updateFields: (fields: Partial<UserData>) => void
  register: any
  errors: any
}

export function UserForm({
  //   firstName,
  //   lastName,
  //   age,
  //   updateFields,
  register,
  errors,
}: UserFormProps) {
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
