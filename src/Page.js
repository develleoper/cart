import React from 'react'

function App(props) {
  const { children, title } = props
  return (
    <>
      <header>{title}</header>
      <main>{children}</main>
    </>
  )
}

export default App
