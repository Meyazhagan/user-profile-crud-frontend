import { validateEmail } from "./UserValidator";

export const registerValidator = (value) => {
    const errors = {};

    if (!value.name) {
        errors.name = "Name is required";
    } else if (value.name.length < 5) {
        errors.name = "Name should have more than 5 characters";
    } else if (!value.email) {
        errors.email = "Email is required";
    } else if (!validateEmail.test(value.email)) {
        errors.email = "Email is Not Valid";
    } else if (!value.password) {
        errors.password = "Password is required";
    }

    return errors;
};
export const loginValidator = (value) => {
    const errors = {};

    if (!value.email) {
        errors.email = "Email is required";
    } else if (!validateEmail.test(value.email)) {
        errors.email = "Email is Not Valid";
    } else if (!value.password) {
        errors.password = "Password is required";
    }

    return errors;
};
