
import { FormControlProps as RFCFormControlProps } from 'react-form-component'

export interface FormControlProps extends RFCFormControlProps {
  fullWidth?: boolean,
  variant?: 'filled' | 'outlined' | 'standard',
}
