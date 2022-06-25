import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import setupInterceptors from './services/auth/setupInterceptors';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);

setupInterceptors(store);
