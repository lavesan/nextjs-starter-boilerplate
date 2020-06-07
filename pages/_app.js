import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import { ToastProvider } from "react-toast-notifications";
// import 'swiper/css/swiper.css';
import axios from 'axios';

import { makeStore } from "../store";
import { AppComponent } from '../app/App';
// import environment from '../public/static/env.json';
import theme from '../app/app.theme';

// axios.defaults.baseURL = environment.API_URL;
axios.interceptors.request.use(req => {
    
  const token = localStorage.getItem('auth');

  if (token) {
    req.headers = {
        ...req.headers,
        authorization: token, 
    }
  }

  
  return req;

})
axios.interceptors.response.use(
  res => new Promise((resolve, reject) => {
    return res && res.data ? resolve(res.data) : resolve(res);
  }),
  err => {

    let error = err ? (err.response ? err.response.data : err.response) : { message: 'Aconteceu um problema interno. Por favor tente mais tarde' };
    
    error = error ? error : { message: 'Aconteceu um problema interno. Por favor tente mais tarde' };

    if (typeof error.message !== 'string') {
      error = {
        message: 'Aconteceu um problema interno. Por favor tente mais tarde',
      }
    }

    return Promise.reject(error);

  })

class MyApp extends App {
  render() {
    const { store, Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <AppComponent
              Component={Component}
              pageProps={pageProps} />
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp);