import { combineReducers, createStore } from 'redux';
import { TestReducer } from 'app/reducers/testReducer';



export const rootReducer = combineReducers({
  test:TestReducer
})

export const store = createStore(rootReducer)

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
