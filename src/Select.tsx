import React from 'react'
import MUISelect from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import { setValue, value } from 'react-form-component'
import { withFormControl } from './'

const Select = ({
  name,
  value,
  mandatory,
  options = [],
  placeholder,
  setValue,
}: SelectProps) =>
  <MUISelect
    value={value || ''}
    onChange={e => setValue(name, e.target.value, mandatory)}
    inputProps={{
      name,
      id: name,
    }}
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

type option = string | { label: React.ReactNode, value: string, icon: React.ReactNode }

interface SelectProps {
  name: string,
  value: value,
  mandatory: boolean,
  options: option[],
  placeholder?: string,
  setValue: setValue,
}

export default withFormControl(Select)
