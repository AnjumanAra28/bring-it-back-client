import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-600 text-white" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-600 text-white" : ""
          }
          to={"/allItems"}
        >
          Lost & Found Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-600 text-white" : ""
          }
          to={"/addItems"}
        >
          Add Items
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-black text-white fixed z-50 bg-opacity-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to={"/"} className="btn btn-ghost text-2xl">
            Bring It Back
          </Link>
        </motion.div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/allItems"}>Lost & Found Items</Link>
                </li>
                <li>
                  <Link to={"/recoveredItems"}>All Recovered Items</Link>
                </li>
                <li>
                  <Link to={`/myItems/${user?.email}`}>Manage My Items</Link>
                </li>
              </ul>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={logOut}
              className="btn btn-sm bg-cyan-600 text-white"
            >
              Logout
            </motion.button>
          </div>
        ) : (
          // Login Button
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Link to="/login" className="btn bg-cyan-600 text-white mr-2">
              Login
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
