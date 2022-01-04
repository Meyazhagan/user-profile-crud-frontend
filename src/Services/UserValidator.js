export const validateEmail =
    // eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validator = (user) => {
    const errors = {};
    if (!user.name) {
        errors.name = "User name is required";
    } else if (!user.avatar) {
        errors.avatar = "Avatar is required";
    } else if (!user.email) {
        errors.email = "Email is required";
    } else if (!validateEmail.test(user.email)) {
        errors.email = "Email is Not Valid";
    } else if (!user.phone) {
        errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(user.phone)) {
        errors.phone = "Invalid digit";
    } else if (!user.location) {
        errors.location = "Location is required";
    }
    return errors;
};
