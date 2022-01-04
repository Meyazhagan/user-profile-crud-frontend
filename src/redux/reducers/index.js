import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import profileReducer from "./ProfileReducer";
import AuthReducer from "./AuthReducer";

const reducer = combineReducers({
    auth: AuthReducer,
    user: userReducer,
    profile: profileReducer,
});

export default reducer;
