import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Services/UserValidator";
import gqlFetch from "../../graphql/gqlFetch";
import { GET_USER } from "../../graphql/Query";
import { UPDATE_USER } from "../../graphql/Mutation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUsers } from "../../redux/actions";

function EditUser() {
    const param = useParams();
    const id = param.id;
    const navigate = useNavigate();
    const [initialValue, setInitialValue] = useState({});
    const dispatch = useDispatch();

    const fetchInitialValue = async () => {
        const {
            data: { getUser },
            error,
        } = await gqlFetch({ query: GET_USER, variables: { id } });
        if (error) return toast.error(error?.data?.error || "An Unexpected Error");
        if (getUser?.ok) {
            setInitialValue(getUser?.user);
        } else {
            console.log(getUser);
        }
    };

    useEffect(
        () => {
            fetchInitialValue();
        },
        // eslint-disable-next-line
        []
    );

    const onUpdate = async (user) => {
        const {
            data: { updateUser },
            error,
        } = await gqlFetch({ query: UPDATE_USER, variables: { id, user } });

        if (error) return toast.error(error?.data?.error || "An Unexpected Error");
        if (updateUser?.ok) {
            toast.success("Updated User");
            dispatch(updateUsers({ id, user }));
        } else {
            toast.error(updateUser?.errors[0].message);
        }
    };

    const handleSubmit = (user) => {
        onUpdate(user);
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
            initialValue={initialValue}
            fields={[
                { label: "Name", field: "name" },
                { label: "Email ID", field: "email" },
                { label: "Phone No", field: "phone" },
                { label: "Location", field: "location" },
            ]}
            title="Edit User"
            submitText="Edit"
        />
    );
}

export default EditUser;
