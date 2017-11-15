import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import { ItemsListContainer } from './containers/ItemsListContainer';
import reducer from './reducers/items';
import './app.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <div>
            <ItemsListContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
