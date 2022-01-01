import React, { useEffect } from "react";
import { Route, Routes } from "react-router";

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
import { setUsers } from "../../redux/actions";
import { useDispatch } from "react-redux";

function AppRoutes() {
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const {
            data: { allUsers },
            error,
        } = await gqlFetch({ query: GET_ALL_USERS });

        if (error) console.log(error);

        if (allUsers.ok) {
            dispatch(setUsers({ users: allUsers?.users }));
        } else {
            console.log(allUsers?.errors[0]);
        }
    };

    useEffect(
        () => {
            fetchUsers();
        },
        // eslint-disable-next-line
        []
    );

    return (
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
    );
}

export default AppRoutes;
