import React from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";

import { login as loginAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginValidator } from "../../Services/AuthValidator";
import { login } from "../../apis";

function Login() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (value) => {
        const { data, error } = await login(value);
        if (error) return toast.error(error?.data?.error || "An Unexpected Error");
        toast.success(data?.success?.message || "Logged In");
        dispatch(loginAction({ token: data?.success?.token }));
        navigate("/users");
    };

    const handleCancel = () => {
        navigate("/");
    };
    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            validator={loginValidator}
            initialValue={{
                email: "",
                password: "",
            }}
            fields={[
                { label: "Email ID", field: "email" },
                { label: "Password", field: "password", type: "password" },
            ]}
            title="Login"
            submitText="Login"
            hideAvatar={true}
        />
    );
}

export default Login;
