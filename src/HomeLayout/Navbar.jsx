import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
          to={"/lostAndFound"}
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
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //       >
    //         {links}
    //       </ul>
    //     </div>
    //     <Link to={"/"} className="btn btn-ghost text-xl text-cyan-600">
    //       Bring It Back
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">{links}</ul>
    //   </div>
    //   <div className="navbar-end">
    //     <div>
    //       {user && (
    //         <div className="dropdown dropdown-end ">
    //           <div
    //             tabIndex={0}
    //             role="button"
    //             className="btn btn-ghost btn-circle avatar"
    //           >
    //             <div className="w-10 rounded-full">
    //               <img
    //                 alt="Tailwind CSS Navbar component"
    //                 src={user.photoURL}
    //               />
    //             </div>
    //           </div>
    //           <ul
    //             tabIndex={0}
    //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //           >
    //             <li>
    //               <Link to={"/lostAndFound"}>Lost & Found Items</Link>
    //             </li>
    //             <li>
    //               <Link to={"/allRecoveredItems"}>All Recovered Items</Link>
    //             </li>
    //             <li>
    //               <Link to={"/manageMyItems"}>Manage My Items</Link>
    //             </li>
    //           </ul>
    //           <button
    //             onClick={logOut}
    //             className="btn btn-sm mt-2 w-sm bg-rose-500 text-white"
    //           >
    //             Logout
    //           </button>
    //         </div>
    //       ):(
    //         <div className="mr-2">
    //           <Link to="/login" className="btn bg-cyan-600 text-white ">
    //             Login
    //           </Link>
    //         </div>
    //         )
    //       }
    //     </div>
    //   </div>
    // </div>

    <div className="navbar bg-base-100">
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
        <Link to={"/"} className="btn btn-ghost text-xl text-cyan-600">
          Bring It Back
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
        <div className="flex justify-center items-center gap-2">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/lostAndFound"}>Lost & Found Items</Link>
              </li>
              <li>
                <Link to={"/allRecoveredItems"}>All Recovered Items</Link>
              </li>
              <li>
                <Link to={"/manageMyItems"}>Manage My Items</Link>
              </li>
            </ul>
          </div>
             <button
             onClick={logOut}
             className="btn btn-sm bg-cyan-600 text-white"
           >
             Logout
           </button>
        </div>
        ) : (
          // Login Button
          <Link to="/login" className="btn bg-cyan-600 text-white mr-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
