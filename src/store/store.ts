import { combineReducers,createStore } from 'redux';

import { heroReducer } from '../reducers';


const rootReducers = combineReducers({
  heroReducer
});

const store = createStore(rootReducers);

export type IRootState = ReturnType<typeof rootReducers>

export { store };