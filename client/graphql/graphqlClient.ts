import {GraphQLClient} from "graphql-request"

const isClient = typeof window !== "undefined"

const token = isClient ? window.localStorage.getItem("token") : ""
console.log(token, typeof token);
const graphqlClient = new GraphQLClient("http://localhost:5000/graphql",
{
  headers: {
    Authorization: "Bearer " + token
  }
})

export {graphqlClient}