const { gql } = require("apollo-server")

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:nationality!
        friends:[User]
        favouriteMovies:[Movie]
    }

    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!
    }

    input CreateUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:nationality!
    }

    type Query{
        users:[User!]!
        user(id:ID!):User
        movies:[Movie!]!
        movie(name:String!):Movie!
    }

    type Mutation {
        createUser(input:CreateUserInput):User
    }

    enum nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`

module.exports = typeDefs