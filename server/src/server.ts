import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import {PrismaClient} from "@prisma/client"
import { User } from "./user/index.js"

const app = express()
app.use(express.json())

const prisma = new PrismaClient()

const typeDefs = ` #graphql

  ${User.types}

  type Query {
    ${User.queries}
  }
`
const resolvers = {
  Query: {
    ...User.resolvers.queries
  }
}

const graphqlServer = new ApolloServer({ typeDefs, resolvers })
await graphqlServer.start()

app.use('/graphql', expressMiddleware(graphqlServer))
app.listen(5000, () => { console.log("express server listening on 5000"); })