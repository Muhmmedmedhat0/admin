import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
