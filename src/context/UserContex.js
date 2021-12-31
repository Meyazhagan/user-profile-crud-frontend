import { createContext, useEffect, useState } from "react";
import User from "../Data/UserServices";
import React from "react";
import { Toastify } from "../components/common/Toastify";
import ToastMessage from "../components/common/Toast";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getIndex = (id) => users.findIndex((u) => u.id === id);

  const getALlUser = async () => {
    const { data: users } = await User.getALl();
    setUsers(users);
  };

  const getUser = (id) => {
    const index = getIndex(id);
    return { ...users[index] };
  };

  const handleCreateUser = async (newUser) => {
    const prevUsers = users;
    const addInfo = {
      skill: [],
      profile: [],
    };
    newUser = { ...addInfo, ...newUser };

    Toastify(User.create(newUser), {
      pending: "Creating the new user",
      onSuccess: ({data}) => {
          const newUsers = [data, ...users];
    setUsers(newUsers);
        
        return <ToastMessage
          messaage="Created The New User"
          onUndo={() => setUsers(prevUsers)}
        />
    },
      onError: (data) => {
        setUsers(prevUsers);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const handleUpdateUser = (id, user, message) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = getIndex(id);

    newUsers[index] = { ...newUsers[index], ...user };
    setUsers(newUsers);

    Toastify(User.update(id, newUsers[index]), {
      pending: "Updating the user or profile",
      onSuccess: () => (
        <ToastMessage
          messaage={message || `Updated The User`}
          onUndo={() => setUsers(prevUsers)}
        />
      ),
      onError: (data) => {
        setUsers(prevUsers);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };
  const handleDeleteUser = (id) => {
    const prevUsers = users;
    const newUsers = [...users];
    const index = getIndex(id);
    newUsers.splice(index, 1);
    setUsers(newUsers);
    Toastify(User.remove(id), {
      pending: "Deleting the user",
      onSuccess: () => (
        <ToastMessage
          messaage="Deleted The User"
          onUndo={() => setUsers(prevUsers)}
        />
      ),
      onError: (data) => {
        setUsers(prevUsers);
        return data?.response?.data?.message || "An Unexpected Error";
      },
    });
  };

  useEffect(() => {
    getALlUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        getAll: getALlUser,
        getById: getUser,
        onCreate: handleCreateUser,
        onUpdate: handleUpdateUser,
        onDelete: handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
