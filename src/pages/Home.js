import React from 'react'
import Nav from '../components/Nav'
import Page from '../template/page'
const Home = () => {
  return (
    <Page bgColour="red" home={true}>
      Home
      <Nav homeText={'home-text'} />
    </Page>
  )
}

export default Home
