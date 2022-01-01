// USER Actions
export const setUsers = ({ users }) => ({ type: "SET_USERS", users });
export const createUser = ({ user }) => ({ type: "CREATE_USER", user });
export const updateUsers = ({ user, id }) => ({ type: "UPDATE_USER", user, id });
export const deleteUsers = ({ id }) => ({ type: "DELETE_USER", id });

// PROFILE Actions
export const setProfile = ({ profile }) => ({ type: "SET_PROFILE", profile });
export const updateProfile = ({ profile }) => ({ type: "UPDATE_PROFILE", profile });
export const deleteProfile = () => ({ type: "DELETE_PROFILE" });
