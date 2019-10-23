const {ApolloServer} = require('apollo-server')

const typeDefs = `
    type Item {
        id: Int
        type: String
        description: String
    }

    type Query {
        prefixes: [Item]
        sufixes: [Item]
    }
`

const prefixes = [
    {id: 1 , type: 'prefix', description: 'Air'},
    {id: 2 , type: 'prefix', description: 'Jet'},
    {id: 3 , type: 'prefix', description: 'Fligh'}
]

const sufixes = [
    {id: 1 , type: 'sufix', description: 'Nobody'},
    {id: 2 , type: 'sufix', description: 'Richies'},
    {id: 3 , type: 'sufix', description: 'Orlando'}
]

const resolvers = {
    Query: {
        prefixes() {
            return prefixes
        },
        sufixes() {
            return sufixes
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen()