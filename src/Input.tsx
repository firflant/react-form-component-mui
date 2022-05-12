import React from 'react'
import { debounce } from 'throttle-debounce'
import MUIInput from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { setValue, value } from '../typings'
import { withFormControl } from '../.'

/**
 * A basic input field.
 */
const Input = ({
  name,
  type = 'text',
  value = '',
  placeholder,
  min,
  debounceTime = 500,
  activateEnterPress,
  mandatory,
  prefix,
  suffix,
  setValue,
  multiline,
  ...otherProps
}: InputProps) => {
  const [internalValue, setInternalValue] = React.useState('')

  // Apply initial value and react on initialValue change.
  React.useEffect(() => {
    if (value !== internalValue) {
      setInternalValue(value)
    }
  }, [value])

  const handleSetValue = (val: value) => {
    if (val !== value) {
      setValue(name, val, mandatory, { touched: true, type, min })
    }
  }

  const debouncedSetValue = React.useCallback(
    debounce(debounceTime, nextValue => handleSetValue(nextValue)),
    [],
  )

  return (
    <MUIInput
      className='rfc-input'
      name={name}
      type={type === 'password-novalidation' ? 'password' : type}
      // This allows to add a custom validation rule for password field, while still
      // being able to skip the check where it is not neccessary, eg. on registration forms.
      placeholder={placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value)
        debouncedSetValue(e.target.value)
      }}
      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (activateEnterPress && e.code === 'Enter') {
          e.preventDefault()
          setValue(name, internalValue, mandatory, { type, min, forceSubmit: true })
        }
      }}
      value={type !== 'file' ? internalValue : undefined}
      startAdornment={prefix
        ? <InputAdornment position='start'>{prefix}</InputAdornment>
        : null
      }
      endAdornment={suffix
        ? <InputAdornment position='end'>{suffix}</InputAdornment>
        : null
      }
      onBlur={e => handleSetValue(e.target.value)}
      multiline={multiline}
      {...otherProps}
    />
  )
}

export interface InputProps {
  name: string,
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'file' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'postcode' | 'password-novalidation',
  value: value,
  placeholder: string | undefined,
  min: number,
  debounceTime: number,
  accept: string,
  activateEnterPress?: boolean,
  mandatory: boolean,
  setValue: setValue,
}

export default withFormControl(Input)
