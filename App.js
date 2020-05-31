import React from 'react';
import { Home } from './src/Home';
import { Provider } from 'react-redux';

import { configureStore } from './src/store/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
