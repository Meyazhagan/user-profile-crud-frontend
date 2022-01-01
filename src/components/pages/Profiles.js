import React, { useEffect } from "react";
import ProfileCard from "../app/ProfileCard";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import gqlFetch from "../../graphql/gqlFetch";
import { toast } from "react-toastify";
import { setProfile } from "../../redux/actions";
import { GET_PROFILE } from "../../graphql/Query";
import { DELETE_PROFILE } from "../../graphql/Mutation";
import { deleteProfile as deleteProfileAction } from "../../redux/actions";

function Profiles() {
    const navigation = useNavigate();

    const userId = useParams().userId;
    const dispatch = useDispatch();
    const profile = useSelector((s) => s.profile);

    const fetchProfile = async () => {
        const {
            data: { getUser },
            error,
        } = await gqlFetch({ query: GET_PROFILE, variables: { userId } });
        if (error) console.log(error);
        if (getUser?.ok) {
            console.log(getUser?.user);
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

    const onDelete = async () => {
        const {
            data: { deleteProfile },
            error,
        } = await gqlFetch({ query: DELETE_PROFILE, variables: { userId } });
        if (error) console.log(error);
        if (deleteProfile?.ok) {
            toast.info("Profile Deleted");
            dispatch(deleteProfileAction());
        } else {
            toast.error(deleteProfile?.errors[0].message);
        }
    };

    return (
        <div className="mx-10 md:10/12 xl:w-8/12 xl:mx-auto">
            <div className="flex justify-start p-6">
                <button
                    onClick={() => {
                        navigation("/users");
                    }}
                    className="flex gap-2 
                    capitalize
                    border-2 border-accent 
                    text-accent 
                    py-2 px-4 rounded-md 
                    hover:bg-accent hover:text-dark">
                    back to user
                </button>
            </div>
            <ProfileCard {...profile} onDelete={onDelete} />
        </div>
    );
}

export default Profiles;
