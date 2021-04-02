import React, { useState } from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

const Home = () => {
  const [hello] = useState('Hello gatsby')
  return (
    <>
      <Header text="This is index" />
      <div style={{ color: 'purple', fontSize: '72px' }}>
        <p>{hello}</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <ul>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
