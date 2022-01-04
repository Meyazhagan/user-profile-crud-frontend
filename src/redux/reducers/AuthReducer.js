import jwt_decoder from "jwt-decode";
import { getToken, removeToken, setToken } from "../../Services/TokenServices";

const initialValue = {
    isLogged: false,
    user: {},
};

const login = (action) => {
    try {
        const token = action.token || getToken();
        const user = jwt_decoder(token);
        setToken(token);
        return {
            isLogged: true,
            user,
        };
    } catch (err) {
        removeToken();
        return initialValue;
    }
};

const AuthReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN":
            return login(action);

        case "LOGOUT":
            removeToken();
            return initialValue;

        default:
            return state;
    }
};

export default AuthReducer;
