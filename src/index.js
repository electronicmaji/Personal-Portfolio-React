import { ChakraProvider, ColorModeProvider, ColorModeScript, ThemeProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import theme from "./theme"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "@fontsource/nunito/400.css"
import "@fontsource/nunito/700.css"



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
        <ThemeProvider theme={theme}>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
