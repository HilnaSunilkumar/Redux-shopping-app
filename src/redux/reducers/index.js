import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product : selectedProductReducer

});
export default reducers;

// export const reducersType = typeof reducers;
// console.log(reducersType)
