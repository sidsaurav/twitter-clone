import { graphql } from '../../gql'

export const verifyGoogleToken = graphql(`#graphql
query Query($token: String!){
  verifyGoogleToken(token: $token)
}`)