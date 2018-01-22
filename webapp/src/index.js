import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/store'

let { store, persistor } = configureStore()

ReactDOM.render(
<Provider store={store} persistor={persistor}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
