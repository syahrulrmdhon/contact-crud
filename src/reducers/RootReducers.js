import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const RootReducer = combineReducers({
    contact: contactReducer,
});
export default RootReducer;
