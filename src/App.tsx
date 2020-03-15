import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import rootReducer from './reducers/rootReducer'
import Counter from './components/Counter';

const store = createStore(rootReducer, {});

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
