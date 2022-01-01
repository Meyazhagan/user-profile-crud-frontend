import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Data/UserValidator";
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
        if (error) console.log(error);
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

        if (error) console.log(error);
        if (updateUser?.ok) {
            toast.success("Updated User");
            dispatch(updateUsers({ id, user }));
        } else {
            console.log(updateUser);
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
