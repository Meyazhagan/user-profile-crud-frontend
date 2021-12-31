import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/users", label: "Users" },
  { to: "/about", label: "About" },
];
const MyNavLink = ({ to, label, classes }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${classes} ${!isActive ? "text-white" : "text-accent"}`
      }
    >
      {label}
    </NavLink>
  );
};

function NavBar() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="flex w-full py-6 fixed bg-alpha shadow-lg backdrop-filter backdrop-blur-xl z-10 md:justify-around justify-start">
        <div className="font-oleo text-3xl ml-6 md:mx-0">User and Profile</div>
        <div className="hidden md:flex md:gap-10">
          {navItems.map((nav, index) => (
            <MyNavLink {...nav} key={index} classes="font-bold text-md" />
          ))}
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col gap-10 fixed backdrop-filter backdrop-blur-md z-10 bottom-24 bg-alpha p-4 items-center rounded-lg right-4 md:hidden",
          { hidden: !toggled }
        )}
      >
        {navItems.map((nav, index) => (
          <MyNavLink {...nav} key={index} />
        ))}
      </div>
      <div
        onClick={() => setToggled((t) => !t)}
        className="text-red-200 backdrop-filter backdrop-blur-md z-10 fixed bottom-6 right-4 bg-alpha p-4 rounded-md md:hidden "
      >
        <img src={`/icons/${toggled ? "cancel" : "toggle"}.svg`} alt="..." />
      </div>
    </>
  );
}

export default NavBar;
