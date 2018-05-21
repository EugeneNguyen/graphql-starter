import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs, resolvers } from './helpers/graphql'

import GraphQLDefault from './nodes/GraphQLDefault'

const nodes = [
  GraphQLDefault,
]

const schema = makeExecutableSchema({
  typeDefs: typeDefs(nodes),
  resolvers: resolvers(nodes),
})

export default schema