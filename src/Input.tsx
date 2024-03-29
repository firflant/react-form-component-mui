import React from 'react'
import { debounce } from 'throttle-debounce'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { setValue, value, validation } from 'react-form-component'
import { withFormControl } from './'

/**
 * A basic input field.
 */
const Input = ({
  name,
  type = 'text',
  value = '',
  validation,
  label,
  help,
  disabled,
  placeholder,
  min,
  debounceTime = 500,
  activateEnterPress,
  mandatory,
  prefix,
  suffix,
  setValue,
  multiline = false,
  ...otherProps
}: InputProps) => {
  const [internalValue, setInternalValue] = React.useState('')
  console.log('help: ', help);

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
    <TextField
      id={name}
      name={name}
      type={type === 'password-novalidation' ? 'password' : type}
      // This allows to add a custom validation rule for password field, while still
      // being able to skip the check where it is not neccessary, eg. on registration forms.
      label={label}
      helperText={help}
      error={(validation === 'error')}
      disabled={disabled}
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
      InputProps={{
        name,
        startAdornment: prefix
          ? <InputAdornment position='start'>{prefix}</InputAdornment>
          : null,
        endAdornment: suffix
          ? <InputAdornment position='end'>{suffix}</InputAdornment>
          : null,
      }}
      multiline={multiline}
      onBlur={e => handleSetValue(e.target.value)}
      {...otherProps}
    />
  )
}

interface InputProps {
  name: string,
  type?: 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search' | 'file' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'postcode' | 'password-novalidation',
  value: value,
  validation: validation,
  label?: React.ReactNode,
  help?: React.ReactNode,
  disabled?: boolean,
  placeholder: string | undefined,
  multiline?: boolean,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  min: number,
  debounceTime: number,
  activateEnterPress?: boolean,
  mandatory: boolean,
  setValue: setValue,
}

export default withFormControl(Input)
