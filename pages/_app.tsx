import {Provider} from 'react-redux'
import {store} from "../redux/store";

import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

import '../styles/globals.scss'

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
