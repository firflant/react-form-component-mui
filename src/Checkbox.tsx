import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MUICheckbox from '@material-ui/core/Checkbox'
import { setValue, value } from 'react-form-component'
import { withFormControl } from './'


const Checkbox = ({
  name,
  value,
  text,
  mandatory,
  setValue,
}: CheckboxProps) => {
  const safeValue = !!value
  return (
    <FormControlLabel
      control={
        <MUICheckbox
          checked={safeValue}
          onChange={e => setValue(name, e.target.checked, mandatory)}
        />
      }
      label={text}
      key={name}
    />
  )
}

interface CheckboxProps {
  name: string;
  value: value;
  text: React.ReactNode;
  mandatory: boolean;
  setValue: setValue;
}

export default withFormControl(Checkbox)
