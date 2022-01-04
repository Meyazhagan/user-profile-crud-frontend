import React from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Services/UserValidator";
import { CREATE_USER } from "../../graphql/Mutation";
import { createUser as createUserAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import gqlFetch from "../../graphql/gqlFetch";
import { toast } from "react-toastify";

function CreateUser() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onCreate = async (user) => {
        const {
            data: { createUser },
            error,
        } = await gqlFetch({
            query: CREATE_USER,
            variables: {
                user,
            },
        });

        if (error) return toast.error(error?.data?.error || "An Unexpected Error");

        if (createUser.ok) {
            toast.success("User Created");
            dispatch(createUserAction({ user: createUser?.user }));
        } else {
            toast.error(createUser?.errors[0].message);
        }
    };

    const handleSubmit = (user) => {
        onCreate(user);
        navigate("/users");
    };

    const handleCancel = () => {
        navigate("/users");
    };
    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            validator={validator}
            initialValue={{
                avatar: "",
                name: "",
                email: "",
                phone: "",
                location: "",
            }}
            fields={[
                { label: "Name", field: "name" },
                { label: "Email ID", field: "email" },
                { label: "Phone No", field: "phone" },
                { label: "Location", field: "location" },
            ]}
            title="Create User"
            submitText="Create"
        />
    );
}

export default CreateUser;
