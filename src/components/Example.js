import React from 'react'
import { Child } from './Child'
import './Example.css'

const Example = () => {
  return (
    <>
      <Child />;
      <Child color="red" />;
    </>
  )
}

export { Example }