import React from "react";
import { useNavigate, useParams } from "react-router";
import { skillOptions, roleOptions, validate } from "../../Services/ProfileServices";
import gqlFetch from "../../graphql/gqlFetch";
import SelectForm from "../common/SelectForm";
import { CREATE_PROFILE } from "../../graphql/Mutation";
import { useDispatch } from "react-redux";
import { setProfile } from "../../redux/actions";
import { toast } from "react-toastify";

function CreateProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.userId;

    const onCreate = async (userId, profile) => {
        const {
            data: { createProfile },
            error,
        } = await gqlFetch({
            query: CREATE_PROFILE,
            variables: {
                userId,
                profile,
            },
        });

        if (error) return toast.error(error?.data?.error || "An Unexpected Error");

        if (createProfile.ok) {
            toast.success("Profile Created");
            dispatch(setProfile({ profile: createProfile?.user }));
        } else {
            toast.error(createProfile?.errors[0].message);
        }
    };

    const handleSubmit = (profile) => {
        onCreate(userId, profile);
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
                submitText="Create"
                initialValue={{ skill: [], role: [] }}
                validator={validate}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </div>
    );
}

export default CreateProfile;
