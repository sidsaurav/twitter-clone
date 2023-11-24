import express from "express"
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import {PrismaClient} from "@prisma/client"

const app = express()
app.use(express.json())

const prisma = new PrismaClient()

const typeDefs = ` #graphql
  type Query {
    hello: String!
    hello2(name: String!): String!
  }
`
const resolvers = {
  Query: {
    hello: () => "hello world",
    hello2: (parent, { name }: { name: string }) => "hello " + name
  }
}

const graphqlServer = new ApolloServer({ typeDefs, resolvers })
await graphqlServer.start()

app.use('/graphql', expressMiddleware(graphqlServer))
app.listen(5000, () => { console.log("express server listening on 5000"); })