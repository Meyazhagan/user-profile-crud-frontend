import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import profileReducer from "./ProfileReducer";

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
});

export default reducer;
