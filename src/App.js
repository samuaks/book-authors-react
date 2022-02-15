import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import './App.css';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  });

  client
    .query({
      query: gql`
        query {
          books {
            id
            name
          }
        }
      `
    })
    .then(result => console.log(result));

  return (
    <div className="App">
      <h2>Apollo 🚀</h2>
    </div>
  );
}

export default App;
