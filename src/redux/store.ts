import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
import { rootReducer } from './reducers/index'


const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = compose(
    composeEnhancer(applyMiddleware(sagaMiddleware)),
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store;