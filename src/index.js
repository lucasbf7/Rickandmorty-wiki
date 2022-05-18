import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App';
import Header from './pages/Header';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';

import client from './service/index';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)


reportWebVitals();
