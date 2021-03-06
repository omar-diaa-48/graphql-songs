import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import './style/style.css'

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id // it makes the client aware of every object, only works when all ids are unique to each other,
});

const Root = () => {
  return (
    <ApolloProvider client={client} >
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>  
  )
};

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <Root />,
    document.querySelector('#root')
  );
}

