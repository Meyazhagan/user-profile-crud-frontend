const initialProfile = {
    userId: "",
    name: "",
    avatar: "",
    email: "",
    profile: { skill: [], role: [] },
};

const profileReducer = (state = initialProfile, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            return { ...action.profile };
        case "UPDATE_PROFILE":
            return { ...state, ...action.profile };
        case "DELETE_PROFILE":
            return initialProfile;
        default:
            return state;
    }
};

export default profileReducer;
