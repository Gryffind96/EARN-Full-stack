import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


//LITTLE EXAMPLE
const getDataReducer = (state=null,action)=>{
    return state;
}

const reducer = combineReducers({
    //ADD all reducers here 
    data: getDataReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}
