import React, { useEffect } from 'react'
import { About } from '../components';

const AboutPage = () => {

  useEffect(() => {
    document.title = 'About'
  }, [])
  return (
    <About />
  )
}

export default AboutPage