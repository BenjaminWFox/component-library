import React from 'react'
import { Button as CarbonButton } from 'carbon-components-react'

const Button = function Button({ children, otherText, ...rest }) {
  return (<CarbonButton {...rest}>{children} {otherText}</CarbonButton>)
}

export { Button }