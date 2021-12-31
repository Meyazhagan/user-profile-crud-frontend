import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Data/UserValidator";
import { UserContext } from "../../context/UserContex";

function EditUser() {
  const { onUpdate, getById: getUser } = useContext(UserContext);
  const param = useParams();
  const id = param.id;
  const navigate = useNavigate();
  const initialValue = getUser(id);

  const handleSubmit = (user) => {
    onUpdate(id, user);
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
        { label: "Avatar", field: "avatar" },
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
