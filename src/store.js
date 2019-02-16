import { createStore, applyMiddleware, compose} from 'redux';
import  thunk from 'redux-thunk';
import rootReducer from './reducers/promoCodeReducer';

const initialState = {
    total: 100,
    pickupSavings: -3.85,
    taxRate: 0.0875,
    promoCode: ''
};

const middleWare = [thunk];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.devToolsExtension ? window.devToolsExtension : f=>f
    )
)

export default store;