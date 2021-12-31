import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/app/NavBar";
import Profiles from "./components/pages/Profiles";
import Users from "./components/pages/Users";
import CreateUser from "./components/pages/CreateUser";
import CreateProfile from "./components/pages/CreateProfile";
import EditProfile from "./components/pages/EditProfile";
import EditUser from "./components/pages/EditUser";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UserProvider from "./context/UserContex";
import ProfileProvider from "./context/ProfileContex";

function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        <NavBar />
        <div className="py-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="edit-user/:id" element={<EditUser />} />
            <Route path="/profile/:userId" element={<Profiles />} />
            <Route path="create-profile/:userId" element={<CreateProfile />} />
            <Route path="edit-profile/:userId" element={<EditProfile />} />
          </Routes>
        </div>
      </ProfileProvider>
    </UserProvider>
  );
}

export default App;
