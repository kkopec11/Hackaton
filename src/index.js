import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import setupInterceptors from './services/auth/setupInterceptors';
import store from './store';
import { extendTheme } from '@chakra-ui/react';
const breakpoints = {
  sm: '320px',
  md: '400px',
  lg: '1000px',
  xl: '1600px',
  '2xl': '2400px',
};
const theme = extendTheme({ breakpoints });
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);

setupInterceptors(store);
