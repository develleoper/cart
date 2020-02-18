import React from 'react'

const App = ({ children, header, ...props }) =>
  <>
    <header {...props}>{header}</header>
    <main {...props}>{children}</main>
  </>

export default App
