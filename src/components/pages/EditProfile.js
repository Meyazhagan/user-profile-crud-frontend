import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { skillOptions, roleOptions, validate } from "../../Services/ProfileServices";
import { UPDATE_PROFILE } from "../../graphql/Mutation";
import { GET_PROFILE } from "../../graphql/Query";
import { setProfile, updateProfile as updateProfileAction } from "../../redux/actions";
import SelectForm from "../common/SelectForm";
import { useDispatch, useSelector } from "react-redux";
import gqlFetch from "../../graphql/gqlFetch";
import { toast } from "react-toastify";

function CreateProfile() {
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.userId;
    const dispatch = useDispatch();
    const { profile } = useSelector((s) => s.profile);

    const fetchProfile = async () => {
        const {
            data: { getUser },
            error,
        } = await gqlFetch({ query: GET_PROFILE, variables: { userId } });
        if (error) return toast.error(error?.data?.error || "An Unexpected Error");
        if (getUser?.ok) {
            dispatch(setProfile({ profile: getUser?.user }));
        } else {
            console.log(getUser);
        }
    };

    useEffect(
        () => {
            fetchProfile();
        },
        // eslint-disable-next-line
        []
    );

    const onUpdate = async (profile) => {
        const {
            data: { updateProfile },
            error,
        } = await gqlFetch({ query: UPDATE_PROFILE, variables: { userId, profile } });

        if (error) return toast.error(error?.data?.error || "An Unexpected Error");

        if (updateProfile?.ok) {
            toast.success("Updated Profile");
            dispatch(updateProfileAction({ profile }));
        } else {
            toast.error(updateProfile?.errors[0].message);
        }
    };

    const handleSubmit = (profile) => {
        onUpdate(profile);
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
                initialValue={{ ...profile }}
                validator={validate}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </div>
    );
}

export default CreateProfile;
