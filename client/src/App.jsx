import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DisplayData from "./DisplayData";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", // Use http:// instead of https:// and uri instead of url
    cache: new InMemoryCache(), // Initialize cache
  });

  return (
    <div className="text-black bg-white h-screen w-screen">
      <ApolloProvider client={client}>
        <DisplayData />
      </ApolloProvider>
    </div>
  );
}

export default App;
