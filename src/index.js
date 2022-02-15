import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});


function BookList() {
  const { loading, error, data } = useQuery(gql`
    query {
      books {
        id
        name
        author {
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.books.map(book => (
        <li key={book.id}>{book.name} - {book.author.name}</li>
      ))}
    </ul>
  );
}


function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <BookList />
    </div>
  );
}

render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
