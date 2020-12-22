import React from 'react'
import Nav from '../components/Nav'
import { client } from '../ApolloClient/client'
import { ApolloProvider } from '@apollo/client'

const Home = () => {
  return (
    <>
      Home
      <Nav homeText={'home-text'} />
    </>
  )
}

export default Home
