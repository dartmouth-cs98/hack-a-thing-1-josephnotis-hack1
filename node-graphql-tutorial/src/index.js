const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { PubSub } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const pubsub = new PubSub()

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

// 1
let idCount = links.length

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote
}

// 3
const prisma = new PrismaClient()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))