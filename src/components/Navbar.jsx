import React from "react";
import { Link, NavLink } from "react-router";
import logo from "./../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai';
import { FaAppStore } from 'react-icons/fa';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}> <div className="flex items-center px-1.5 "><AiOutlineHome></AiOutlineHome>
        <li className="mx-1"> Home</li>
      </div> 
      </NavLink>
      <NavLink to={"/apps"}>
        <div className="flex items-center px-1.5 "><FaAppStore></FaAppStore>
        <li className="mx-1"> Apps</li>
      </div> 
      </NavLink>
      <NavLink to={"/installation"}>
        <div className="flex items-center px-1.5 "><MdInstallDesktop></MdInstallDesktop>
        <li className="mx-1"> Installation</li>
      </div> 
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex items-center md:justify-around gap-x-14 md:w-11/12 mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center gap-1.5">
              <img className="w-[35px]" src={logo} alt="logo" />
              <h1 className="text-2xl font-semibold">MJH.IO</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn px-5 bg-gradient-to-br text-white from-[#6630e4] to-[#bb8bff]
        "
            href="https://github.com/mjh-shikder"
          >
            <FaGithub></FaGithub> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
