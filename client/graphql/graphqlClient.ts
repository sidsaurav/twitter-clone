import {GraphQLClient} from "graphql-request"

const graphqlClient = new GraphQLClient("http://localhost:5000/graphql",
{
  headers: {
    Authorization: (window ? "Bearer " + window.localStorage.getItem("token") : "")
  }
})

export {graphqlClient}