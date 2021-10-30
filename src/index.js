const { ApolloServer } = require('apollo-server')
const Query = require('./resolvers/Query.js')
const Mutation = require('./resolvers/Mutation.js')

const resolvers = { Query, Mutation }
const fs = require('fs')
const path = require('path')

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

server
    .listen()
    .then(({url}) => 
        console.log(`Server is running on ${url}`)
    );


