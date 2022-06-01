import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import MUICheckbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import { setValue, value, validation } from 'react-form-component'
import { withFormControl } from './'


const Checkbox = ({
  name,
  value,
  text,
  validation,
  label,
  help,
  disabled,
  mandatory,
  setValue,
}: CheckboxProps) => {
  const safeValue = !!value
  return (
    <FormControl error={(validation === 'error')}>
      {label && <FormLabel component='legend'>{label}</FormLabel>}
      <FormControlLabel
        control={
          <MUICheckbox
            checked={safeValue}
            onChange={e => setValue(name, e.target.checked, mandatory)}
            name={name}
          />
        }
        label={text}
        disabled={disabled}
      />
      {help && <FormHelperText>{help}</FormHelperText>}
    </FormControl>
  )
}

interface CheckboxProps {
  name: string;
  value: value;
  text: React.ReactNode;
  validation: validation,
  label?: React.ReactNode,
  help?: React.ReactNode,
  disabled?: boolean,
  mandatory: boolean;
  setValue: setValue;
}

export default withFormControl(Checkbox)
