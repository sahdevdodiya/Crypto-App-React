import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <ChakraProvider theme={theme}>
  <ColorModeSwitcher />
      <App />
  </ChakraProvider>
</BrowserRouter>

    

);
// aa atlu badha ma common and next if you want anything just make / and write
export const server = `https://api.coingecko.com/api/v3`;


