import React from 'react'
import { Button } from '@material-ui/core'
import { fieldsData, useSubmit, Loader } from 'react-form-component'


/**
 * A button component to handle form actions, like submit or reset.
 */
const FormButton = ({
  onClick,
  reset,
  loading,
  suppressErrorMessage,
  children,
}: FormButtonProps) => {
  const submit = useSubmit(suppressErrorMessage)
  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => submit(e, onClick, reset)}
    >
      {loading && <><Loader />&nbsp;</>}{children}
    </Button>
  )
}

export interface FormButtonProps {
  /**
   * Submit function
   */
  onClick: (fieldsData: fieldsData) => void,
  /**
   * Turns on loading state
   */
  loading?: boolean,
  /**
   * Clean up whole form after successfull submit
   */
  reset?: boolean,
  /**
   * Disables default notification when form is not filled correctly
   */
  suppressErrorMessage?: boolean,
  children: React.ReactNode,
}

export default FormButton
