import React from 'react'
import Header from '../components/Header'

export default function About() {
  return (
    <>
      <Header text="Hello About" />
      <div style={{ color: 'teal' }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
    </>
  )
}
