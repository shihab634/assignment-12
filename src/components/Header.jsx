import { useContext, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
// import useRoleByEmail from "../hooks/useRoleByEmail";

const Header = () => {
  // const {role,loading} = useRoleByEmail()
  // console.log(role,loading);
  
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
// const  menuItems =[]
//   if(loading){
//     return <p className="">loading</p>
//   }
//   if (role == 'admin') {
//     menuItems.push(
//       <li><NavLink to={'/dashboard/profile'}>Dashboard</NavLink></li>
//     )
//   }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setisPageLoad] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",
    },

    
  ];
  return (
    <nav className="overflow-x-clip">
      {user && (
        <p className="text-center text-white bg-black py-2 bg-opacity-90">
          Welcome Mr. {user?.displayName} ❤️‍🔥❤️‍🔥. Now You Can Watch All the
          Recipies🍉🍉
        </p>
      )}
      <div className="text-center bg-slate-400"></div>
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <span className="text-xl font-bold text-stone-700">
            Auth 🍳 Template
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
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/registration">Register</NavLink>
            </>
          )}
          
        </ul>

        <div className="lg:hidden ">
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

                  <NavLink to="/addFood">Add Food</NavLink>
                  <NavLink to="/manageFoods">Manage My Foods</NavLink>
                  <NavLink to="/foodReq">My Food Request</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </>
              ) : (
                <>
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
