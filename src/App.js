import React from 'react'
import { Container } from './AppStyle'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default () => {
  return (
    <div>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  )
}