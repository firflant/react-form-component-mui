import React from 'react'


const FormControl = ({
  className = '',
  children,
}: FormControlProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface FormControlProps {
  className?: string,
  children: React.ReactNode,
}


export default FormControl
