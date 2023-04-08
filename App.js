import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './MovieList';

const App = () => {
  return (
    <Provider store={store}>
      <MovieList />
    </Provider>
  );
};

export default App;
