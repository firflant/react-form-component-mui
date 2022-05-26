import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const FormActions = ({ children }: FormActionsProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>{children}</div>
  )
}

interface FormActionsProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: -theme.spacing(2),
    '& > *': {
      margin: theme.spacing(2),
    },
  },

}))

export default FormActions
