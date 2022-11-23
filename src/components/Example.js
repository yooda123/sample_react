import React from 'react'
import { Child } from './Child'
import './Example.css'

const Example = () => {
  const hello = (arg) => `Hello ${arg}`
  const o = {
      color: "red",
      num: 123
  }

  return (
    <>
      <Child 
        // color="red"
        // num={123}
        {...o}
        fn={hello}
        bool
        obj={{ name: "Tom", age: 18}}
      />;
      {/* <Child color="red" />; */}
    </>
  )
}

export { Example }