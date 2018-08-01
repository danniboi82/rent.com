import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import {BrowserRouter} from 'react-router-dom';


const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>HELLO WORLD!!</div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
