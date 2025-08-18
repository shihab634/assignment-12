import { useContext, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
// import useRoleByEmail from "../hooks/useRoleByEmail";

const Header = () => {
 
  const { user, logOut } = useContext(AuthContext);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setisPageLoad] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",
    },
  ];
  return (
    <nav className="overflow-x-clip bg-red-100 text-red-700">
      {user && (
        <p className="text-center text-white bg-black py-2 bg-opacity-90">
          Welcome Mr. {user?.displayName} ❤️‍🔥❤️‍🔥. Now You Can be a Donor Hero
        </p>
      )}
      <div className="text-center "></div>
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative ">
        <Link to="/" className="logo">
          <span className="text-xl font-bold text-stone-700">
            Serve Humanity
          </span>
        </Link>

        {/* menu-lg start */}
        <ul className="hidden lg:flex items-center gap-5 ">
          {menu.map((item, index) => (
            <NavLink key={index + 1} to={item.path}>
              {item.name}
            </NavLink>
          ))}
          {user && user?.email ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/search">Search Page</NavLink>
              <NavLink to="/donation-requests">Blood Donation Requests</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/funding">Funding</NavLink>

              <div className="avatar">
                <div className="w-10">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button className="cursor-pointer" onClick={logOut}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/search">Search Page</NavLink>
              <NavLink to="/donation-requests">Blood Donation Requests</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/funding">Funding</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/registration">Register</NavLink>
            </>
          )}
        </ul>

        <div className="lg:hidden text-black ">
          {!isMenuOpen ? (
            <RiMenuAddLine
              onClick={() => {
                setIsMenuOpen(true);
                setisPageLoad(true);
              }}
              className="text-2xl cursor-pointer"
            ></RiMenuAddLine>
          ) : (
            <CgMenuMotion
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl cursor-pointer"
            ></CgMenuMotion>
          )}

          {
            <ul
              className={`flex animate__animated bg-white flex-col lg:hidden gap-5 absolute z-50 bg-opacity-70 w-full top-14  left-0 ${
                isMenuOpen
                  ? "animate__fadeInRight "
                  : isPageLoad
                  ? "animate__fadeOutRight flex "
                  : "hidden"
              } `}
            >
              {menu.map((item, index) => (
                <NavLink
                  className="border-b-2 hover:border-orange-500 transition duration-200
                   "
                  key={index}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              ))}
              {user && user?.email ? (
                <>
                  <button className="cursor-pointer" onClick={logOut}>
                    Logout
                  </button>
                  <NavLink to="/search">Search Page</NavLink>
                  <NavLink to="/donation-requests">
                    Blood Donation Requests
                  </NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/">Funding</NavLink>

                  <NavLink to="/dashboard">Dashboard</NavLink>
                </>
              ) : (
                <>
                  
                  <NavLink to="/search">Search Page</NavLink>
                  <NavLink to="/donation-requests">
                    Blood Donation Requests
                  </NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/">Funding</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/registration">Register</NavLink>
                </>
              )}
            </ul>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
