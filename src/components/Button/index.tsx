import React from 'react'

import { Container } from './styles'

export const Button: React.FC = ({
  ...props
}) => {
  return (
    <Container {...props}/>
  )
}
