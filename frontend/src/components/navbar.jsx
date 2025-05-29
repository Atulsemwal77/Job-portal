import React, { useState } from "react";
import logo from '/images/Linear.png';
import { NavLink , Link } from "react-router-dom";
import {FaBarsStaggered, FaX} from "react-icons/fa6"

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salery Estimate" },
    { path: "/post-job", title: "Post Job" },
  ];
  return (
    <>
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center gap-2 text-xl ">
            <img src={logo }  alt="logo" style={{ width: "30px" }} />
            <span>JobPortal</span>
          </a>
          {/**NAv items */}
          <ul className=" md:flex gap-12 hidden "> { /** */}
          {navItem.map(({ path, title }) => (
            <li key={path} className="flex text-[#141414]">
              <NavLink
                to={path}
                className={({ isActive}) =>
                  isActive ? "active"  : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          </ul>

          {/**Sign Up and Login  */}
          <div className="taxt-base text-[#141414] font-medium space-x-5 hidden lg:block">
            <Link to = '/login'className="py-2 px-5 border rounded">Log In</Link>
            <Link to = '/sign-up' className=" text-white py-2 px-5 border rounded bg-[#3575E2] ">Sign Up</Link>

          </div>
          
          {/**Mobile menu  */}
          <div className="md:hidden block ">
            <button onClick={handleMenuToggler}>
              {
                isMenuOpen ? (
                  <>
                  <FaX className="w-7 h-5 text-[#141414]" />
                  </>
                ) : (
                  <>
                  <FaBarsStaggered className="w-5 h-5 text-[#141414]" />
                  </>
                )
              }
              
            </button>
            
          </div>

        </nav>

        {/**Nav itesm for mobile */}
        <div className={`px-4 bg-black py-5 rounded ${isMenuOpen ? "" : "hidden" }`}>
          <ul>
            
            {navItem.map(({ path, title }) => (
            <li key={path} className=" text-white">
              <NavLink
                to={path}
                className={({ isActive}) =>
                  isActive ? "active"  : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-2"> <Link to = '/login'className="">Log In</Link></li>
          </ul>

        </div>
      </header>
    </>
  );
};

export default Navbar;
