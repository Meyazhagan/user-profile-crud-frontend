import React, { useContext } from "react";
import UserCard from "../app/UserCard";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContex";

function Users() {
  const navigate = useNavigate();
  const { users, onDelete } = useContext(UserContext);
  const handleCreateUser = () => {
    navigate("/create-user");
  };
  return (
    // mx-5 sm:mx-10 md:mx-20 lg:mx-30
    // sm:mx-10 md:mx-20 lg:mx-30

    <div
      className="
      mx-10 md:10/12 xl:w-8/12 xl:mx-auto
    "
    >
      <div className="flex justify-end p-6">
        <button
          onClick={handleCreateUser}
          className="flex gap-2 border-2 border-accent text-accent py-2 px-4 rounded-md hover:bg-accent hover:text-dark"
        >
          Add New User
        </button>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            {...user}
            onDelete={onDelete}
            classes="lg:col-span-4 md:col-span-6 col-span-12 w-full"
          />
        ))}
      </div>
    </div>
  );
}

export default Users;
