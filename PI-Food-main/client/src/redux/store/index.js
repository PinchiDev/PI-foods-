// import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import { composeWithDevtools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "../reducer";



// export const store = createStore(rootReducer);

/////////////////////////////////////////////////////////////////////////////

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducer';
// import thunk  from 'redux-thunk';

// const composeEnhancers = (window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store


/////////////////////////////////////////////////////////////////////////////


// import { createStore, applyMiddleware,  compose } from "redux";
// import {rootReducer} from "../reducer";
// import thunk from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer,
//     composeEnhancer(applyMiddleware(thunk)));

// export default store;

///////////////////////////////////////////////////////////////////////////////////////


import {applyMiddleware , compose, createStore,} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()),
  )
export default store;