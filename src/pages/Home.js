import React from 'react'
import Nav from '../components/Nav'
import { client } from '../ApolloClient/client'
import { ApolloProvider } from '@apollo/client'

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Home <Nav />
      </div>
    </ApolloProvider>
  )
}

export default Home
