import { createStore, applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { listingReducer } from "./Listing/reducer";
import { cartReducer } from "./Cart/reducer";
import { shippingReducer } from "./Checkout/reducer";
import { registerReducer } from "./Register/reducer";
import { loginReducer } from "./Login/reducer";


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware= [thunk]
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  );
  const rootReducer=combineReducers ({
    listing: listingReducer,
    cartReducer,
    shippingReducer,
    registerReducer,
    loginReducer,

})
export const store = createStore(rootReducer, enhancer);