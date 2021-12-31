import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ProfileContext } from "../../context/ProfileContex";
import {
  skillOptions,
  roleOptions,
  validate,
} from "../../Data/ProfileServices";
import SelectForm from "../common/SelectForm";

function CreateProfile() {
  const { onUpdate, getProfile } = useContext(ProfileContext);

  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const user = getProfile(userId);

  const handleSubmit = (profile) => {
    onUpdate(userId, profile);
    navigate(`/profile/${userId}`);
  };
  const handleCancel = () => {
    navigate(`/profile/${userId}`);
  };
  return (
    <div className="w-md">
      <SelectForm
        selectList={[
          {
            label: "Skill",
            multiple: true,
            listItems: skillOptions,
            field: "skill",
          },
          {
            label: "Role",
            multiple: false,
            listItems: roleOptions,
            field: "role",
          },
        ]}
        submitText="Edit"
        initialValue={{ skill: user.skill, role: user.role }}
        validator={validate}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default CreateProfile;
