const fs = require("fs");
const { UserList, MovieList } = require("./fakeData")

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (_, args) => {
            const id = args.id

            return UserList.find((user) => user.id === Number(id))
        },
        movies: () => {
            return MovieList
        },
        movie: (_, args) => {
            return MovieList.find(movie => movie.name === args.name)
        }
    },
    User: {
        favouriteMovies: () => {
            return MovieList.filter(movie => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
        }
    },
    Mutation: {
        createUser: (_, args) => {
            const { username, name, nationality, age } = args.input
            const res = UserList.push({ name, username, nationality, age, id: UserList.length + 1 })
            const user = UserList.find(user => user.id === res)
            console.log(user)
            return user
        },
        
    }
}

module.exports = resolvers