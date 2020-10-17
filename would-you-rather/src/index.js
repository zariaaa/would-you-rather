import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore , compose} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(middleware);
  // other store enhancers if any


const store = createStore(reducer, enhancer);


// const store = createStore(reducer, middleware , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
