import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MUISelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { setValue, value, validation } from 'react-form-component'
import { withFormControl } from './'

const Select = ({
  name,
  value,
  validation,
  label,
  help,
  disabled,
  mandatory,
  options = [],
  placeholder,
  setValue,
}: SelectProps) =>
  <FormControl disabled={disabled} error={(validation === 'error')}>
    {label && <InputLabel id={`${name}-label`}>{label}</InputLabel>}
    <MUISelect
      labelId={`${name}-label`}
      label={label}
      id={name}
      name={name}
      value={value || ''}
      onChange={e => setValue(name, e.target.value, mandatory)}
    >
      {!mandatory &&
        <MenuItem value=''>
          <em>{placeholder || (mandatory ? 'Select' : 'All')}</em>
        </MenuItem>
      }
      {options.map((item, index) =>
        typeof item === 'string'
          ? <MenuItem key={index} value={item}>{item}</MenuItem>
          : <MenuItem key={index} value={item.value}>
            {item.icon
              ? <>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant='inherit'>{item.label}</Typography>
              </>
              : item.label
            }
          </MenuItem>
      )}
    </MUISelect>
    {help && <FormHelperText>{help}</FormHelperText>}
  </FormControl>

type option = string | { label: React.ReactNode, value: string, icon: React.ReactNode }

interface SelectProps {
  name: string,
  value: value,
  validation: validation,
  label?: React.ReactNode,
  help?: React.ReactNode,
  disabled?: boolean,
  mandatory: boolean,
  options: option[],
  placeholder?: string,
  setValue: setValue,
}

export default withFormControl(Select)
