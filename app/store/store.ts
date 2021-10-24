import { createStore, combineReducers } from "redux";
import searchMapReducer from "./SearchMap/SearchMap.reducer";

const rootReducer = combineReducers({
  searchMap: searchMapReducer,
});

const store = createStore(rootReducer);

export default store;
