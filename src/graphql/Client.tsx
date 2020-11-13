import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';


const restLink = new HttpLink({
  uri: 'http://user-api-microlearning.trebol-it.com/graphql'
})

const restLinkPlaybookMicroservice = new HttpLink({
  uri: 'http://main-api-microlearning.trebol-it.com/graphql'
})


export const client = new ApolloClient({
        link: restLink,
        cache: new InMemoryCache()
    })

export const clientPlaybooks = new ApolloClient({
      link: restLinkPlaybookMicroservice,
      cache: new InMemoryCache()
  })
