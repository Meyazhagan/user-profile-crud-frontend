const userReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_USERS":
            return [...action.users];
        case "CREATE_USER":
            return [...state, action.user];
        case "UPDATE_USER": {
            const index = state.findIndex((e) => e.id === action.id);
            if (index === -1) return state;
            return [...state.slice(0, index), action.user, ...state.slice(index + 1)];
        }
        case "DELETE_USER": {
            const index = state.findIndex((e) => e.id === action.id);
            if (index === -1) return state;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        default:
            return state;
    }
};

export default userReducer;
