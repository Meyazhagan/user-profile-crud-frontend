import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, label, classes }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${classes} ${!isActive ? "text-white" : "text-accent"}`}>
            {label}
        </NavLink>
    );
};

function NavBar() {
    const [toggled, setToggled] = useState(false);
    const auth = useSelector((s) => s.auth);

    return (
        <>
            <div className="flex w-full py-6 fixed bg-alpha shadow-lg backdrop-filter backdrop-blur-xl z-10 md:justify-around justify-start">
                <div className="font-oleo text-3xl ml-6 md:mx-0">User and Profile</div>
                <div className="hidden md:flex md:gap-10">
                    <MyNavLink to="/" label="Home" classes="font-bold text-md" />
                    {auth.isLogged && (
                        <>
                            <MyNavLink to="/users" label="Users" classes="font-bold text-md" />
                            <div className="font-bold text-md">{auth?.user?.name}</div>
                            <MyNavLink to="/logout" label="Logout" classes="font-bold text-md" />
                        </>
                    )}
                    {!auth.isLogged && (
                        <>
                            <MyNavLink to="/login" label="Login" classes="font-bold text-md" />
                            <MyNavLink
                                to="/register"
                                label="Register"
                                classes="font-bold text-md"
                            />
                        </>
                    )}
                </div>
            </div>
            <div
                className={classNames(
                    "flex flex-col gap-10 fixed backdrop-filter backdrop-blur-md z-10 bottom-24 bg-alpha p-4 items-center rounded-lg right-4 md:hidden",
                    { hidden: !toggled }
                )}>
                <MyNavLink to="/" label="Home" classes="font-bold text-md" />
                {auth.isLogged && (
                    <>
                        <MyNavLink to="/users" label="Users" classes="font-bold text-md" />
                        <div>{auth?.user?.name}</div>
                        <MyNavLink to="/logout" label="Logout" classes="font-bold text-md" />
                    </>
                )}
                {!auth.isLogged && (
                    <>
                        <MyNavLink to="/login" label="Login" classes="font-bold text-md" />
                        <MyNavLink to="/register" label="Register" classes="font-bold text-md" />
                    </>
                )}
            </div>
            <div
                onClick={() => setToggled((t) => !t)}
                className="text-red-200 backdrop-filter backdrop-blur-md z-10 fixed bottom-6 right-4 bg-alpha p-4 rounded-md md:hidden ">
                <img src={`/icons/${toggled ? "cancel" : "toggle"}.svg`} alt="..." />
            </div>
        </>
    );
}

export default NavBar;
