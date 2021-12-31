import React from "react";
import { useNavigate, useParams } from "react-router";
import IconButton from "../common/IconButton";

const Tag = ({ children }) => {
  return (
    <div
      className="text-accent uppercase
        m-1 text-xs border-2 
        border-accent rounded-md 
        py-1 px-3 w-min
        hover:bg-accent hover:text-dark"
    >
      {children}
    </div>
  );
};

function ProfileCard(props) {
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;
  const { avatar, name, email, skill, role, onDelete } = props;
  if (skill?.length <= 0 || role?.length <= 0)
    return (
      <div className="flex justify-start p-6">
        <button
          onClick={() => {
            navigate(`/create-profile/${userId}`);
          }}
          className="flex gap-2 
          capitalize
          border-2 border-accent 
          text-accent 
          py-2 px-4 rounded-md 
          hover:bg-accent hover:text-dark"
        >
          Create New Profile
        </button>
      </div>
    );

  return (
    <div
      className="w-full
    grid grid-cols-6 lg:grid-cols-10 gap-5 
    bg-alpha rounded-xl p-6 
    lg:p-4 lg:gap-0 lg:mx-1 
    lg:place-content-center"
    >
      <div className="col-span-2 lg:col-span-1 lg:self-center">
        <img
          src={avatar}
          className="h-24 w-24 object-cover rounded-xl"
          alt={name}
        />
      </div>
      <div className="lg:justify-self-start p-4 col-span-4 lg:col-span-3 ">
        <div className="text-xl text-center uppercase text-light font-bold  truncate">
          {name}
        </div>
        <div className="text-accent font-extralight text-center text-xs truncate">
          {email}
        </div>
      </div>
      <div className="mt-3 col-span-3 lg:col-span-2">
        <div className="text-xl uppercase text-light font-bold ">Skill</div>
        <div className="flex mt-2 w-44 flex-wrap">
          {skill?.map((s, index) => (
            <Tag key={index}>{s}</Tag>
          ))}
        </div>
      </div>
      <div className="mt-3 col-span-3  lg:col-span-2">
        <div className="text-xl uppercase text-light font-bold ">Role</div>
        <div className="flex flex-wrap mt-2">
          {role?.map((p, index) => (
            <Tag key={index}>{p}</Tag>
          ))}
        </div>
      </div>
      <div className="col-span-6 flex justify-around items-center mt-4 lg:mt-0 lg:col-span-2">
        <IconButton
          onClick={() => navigate(`/edit-profile/${userId}`)}
          src="/icons/edit.svg"
          tooltip="Edit"
        />
        <IconButton
          onClick={() => onDelete(userId)}
          src="/icons/delete.svg"
          tooltip="Delete"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
