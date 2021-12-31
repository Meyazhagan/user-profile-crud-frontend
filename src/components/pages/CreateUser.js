import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Form from "../common/Form";
import { validator } from "../../Data/UserValidator";
import { UserContext } from "../../context/UserContex";

function CreateUser() {
  const { onCreate } = useContext(UserContext);
  const navigate = useNavigate();

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
        { label: "Avatar", field: "avatar" },
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
