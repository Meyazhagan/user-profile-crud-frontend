import { createContext, useContext } from "react";
import { UserContext } from "./UserContex";

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const { onUpdate, getById } = useContext(UserContext);

  const handleCreateProfile = (userId, newProfile) => {
    const messaage = `Created The Profile`;
    onUpdate(userId, newProfile, messaage);
  };
  const handleUpdateProfile = (userId, profile) => {
    const messaage = `Updated The Profile`;
    onUpdate(userId, profile, messaage);
  };
  const handleDeleteProfile = (userId) => {
    const messaage = `Deleted The Profile`;
    onUpdate(userId, { skill: [], role: [] }, messaage);
  };
  return (
    <ProfileContext.Provider
      value={{
        getProfile: getById,
        onCreate: handleCreateProfile,
        onUpdate: handleUpdateProfile,
        onDelete: handleDeleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
