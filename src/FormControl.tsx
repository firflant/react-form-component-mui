import React from 'react'
import classNames from 'classnames'
import MUIFormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControlProps,
} from 'react-form-component'


const FormControl = ({
  name,
  noBottomGutter,
  validation,
  disabled,
  label,
  help,
  className = '',
  children,
}: FormControlProps) => {
  const classes = useStyles()

  return (
    <MUIFormControl
      error={(validation === 'error')}
      className={classNames(classes.root, {
        [classes.noBottomGutter]: noBottomGutter,
        [className]: className,
      })}
      fullWidth={fullWidth}
      variant={variant}
      disabled={disabled}
    >
      {label && <InputLabel htmlFor={name} >{label}</InputLabel>}
      {children}
      {help && <FormHelperText>{help}</FormHelperText>}
    </MUIFormControl>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: `100%`,
    display: 'flex',
  },
  noBottomGutter: {
    marginBottom: 0,
  },
}))

export default FormControl
