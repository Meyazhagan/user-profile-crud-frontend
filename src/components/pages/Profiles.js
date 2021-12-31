import React, { useContext } from "react";
import ProfileCard from "../app/ProfileCard";
import { useNavigate, useParams } from "react-router";
import { ProfileContext } from "../../context/ProfileContex";

function Profiles() {
  const { onDelete, getProfile } = useContext(ProfileContext);
  const navigation = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const user = getProfile(userId);

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
        hover:bg-accent hover:text-dark"
        >
          back to user
        </button>
      </div>
      <ProfileCard {...user} onDelete={onDelete} />
    </div>
  );
}

export default Profiles;
