import React from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";
import { registerValidator } from "../../Services/AuthValidator";

import { register } from "../../apis";
import { toast } from "react-toastify";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        const { data, error } = await register(value);
        if (error) return toast.error(error?.data?.error || "An Unexpected Error");
        toast.success(data?.success?.message || "Register Successfully");
        navigate("/login");
    };

    const handleCancel = () => {
        navigate("/");
    };
    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            validator={registerValidator}
            initialValue={{
                name: "",
                email: "",
                password: "",
            }}
            fields={[
                { label: "Name", field: "name" },
                { label: "Email ID", field: "email" },
                { label: "Password", field: "password" },
            ]}
            title="Register"
            submitText="Register"
            hideAvatar={true}
        />
    );
}

export default Register;
