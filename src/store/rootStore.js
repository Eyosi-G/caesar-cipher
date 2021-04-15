import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import rootSaga from './redux/saga'
import reducer from './redux/reducer'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(reducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
