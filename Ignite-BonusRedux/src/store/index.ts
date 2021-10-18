import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSagas from './modules/rootSaga'

import { ICartState } from './modules/cart/types'

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSagas)
