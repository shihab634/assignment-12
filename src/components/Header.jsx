import { useContext } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
// import useRoleByEmail from "../hooks/useRoleByEmail";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

 
  return (
    <div className="navbar sticky top-0 z-2 text-red-700 bg-red-100  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn hover:bg-red-400 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  bg-red-100 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user && user?.email ? (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/search">Search Page</NavLink>
                </li>
                <li>
                  <NavLink to="/donation-requests">
                    Blood Donation Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/funding">Funding</NavLink>
                </li>

                <div className="avatar">
                  <div className="w-10">
                    <img src={user.photoURL} alt="user" />
                  </div>
                </div>

                <li>
                  <button className="cursor-pointer" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/search">Search Page</NavLink>
                </li>
                <li>
                  <NavLink to="/donation-requests">
                    Blood Donation Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/funding">Funding</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="logo">
          <span className="text-xl font-bold text-stone-700">
            Serve Humanity
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu text-[16px]  menu-horizontal px-1">
          {user && user?.email ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search Page</NavLink>
              </li>
              <li>
                <NavLink to="/donation-requests">
                  Blood Donation Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/funding">Funding</NavLink>
              </li>

              <div className="avatar">
                <div className="w-10">
                  <img src={user.photoURL} alt="user" />
                </div>
              </div>

              <li>
                <button className="cursor-pointer" onClick={logOut}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search Page</NavLink>
              </li>
              <li>
                <NavLink to="/donation-requests">
                  Blood Donation Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/funding">Funding</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/registration">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
