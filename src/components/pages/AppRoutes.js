import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Profiles from "./Profiles";
import Users from "./Users";
import CreateUser from "./CreateUser";
import CreateProfile from "./CreateProfile";
import EditProfile from "./EditProfile";
import EditUser from "./EditUser";
import Home from "./Home";
import About from "./About";
import gqlFetch from "../../graphql/gqlFetch";
import { GET_ALL_USERS } from "../../graphql/Query";
import { login, setUsers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

const ProtectedOutlet = ({ auth }) => {
    // if(auth.isLogged)
    return auth.isLogged ? <Outlet /> : <Login />;
};

function AppRoutes() {
    const dispatch = useDispatch();
    const auth = useSelector((s) => s.auth);

    const fetchUsers = async () => {
        const {
            data: { allUsers },
            error,
        } = await gqlFetch({ query: GET_ALL_USERS });

        if (error) return toast.error(error?.data?.error || "An Unexpected Error");

        if (allUsers.ok) {
            dispatch(setUsers({ users: allUsers?.users }));
        } else {
            console.log(allUsers?.errors[0]);
        }
    };

    useEffect(
        () => {
            if (auth.isLogged) fetchUsers();
        },
        // eslint-disable-next-line
        [auth]
    );

    useEffect(() => {
        dispatch(login({}));
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="register" element={<Register />} />
            <Route element={<ProtectedOutlet auth={auth} />}>
                <React.Fragment>
                    <Route path="/users" element={<Users />} />
                    <Route path="create-user" element={<CreateUser />} />
                    <Route path="edit-user/:id" element={<EditUser />} />
                    <Route path="profile/:userId" element={<Profiles />} />
                    <Route path="create-profile/:userId" element={<CreateProfile />} />
                    <Route path="edit-profile/:userId" element={<EditProfile />} />
                </React.Fragment>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
