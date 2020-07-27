// Core
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

// GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({
  uri
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  connectToDevTools: true,
})