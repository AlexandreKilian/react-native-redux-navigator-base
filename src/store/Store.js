import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
});


export default function configureStore(onComplete) {
    const store = createStore(rootReducer,applyMiddleware(loggerMiddleware,thunkMiddleware));
    onComplete();
    return store;
}
