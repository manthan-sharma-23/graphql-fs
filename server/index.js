const { ApolloServer } = require("apollo-server");
const resolvers = require("./schemas/resolvers");
const typeDefs = require("./schemas/typeDefs");

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });


server.listen().then(({ url }) => {
    console.log(`Api is running ${url}`);
})
