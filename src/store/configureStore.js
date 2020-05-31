import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "../reducers/rootReducer";
import { rootSaga } from "../sagas/rootSaga";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, (applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga);
    store.subscribe(() => {
        console.log("updated store", store.getState())
    })
    return store
}