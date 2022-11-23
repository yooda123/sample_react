import React from 'react'
import Container from './Container'
import './Example.css'
import Profile from './Profile'

const Example = () => {
  const profile = [
    {name: "Takashi", age: 19, country: "Japan", color: "red"},
    {name: "Jane", age: 28, country: "UK", color: "blue"},
  ]

  return (
    <>
      <Container title="Childrenとは?">
        <Profile {...profile[0]}/>
        <Profile {...profile[1]} />
      </Container>
    </>
  )
}

export { Example }