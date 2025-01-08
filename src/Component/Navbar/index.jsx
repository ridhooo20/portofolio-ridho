import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleNav = () => {
    setIsMenu(!isMenu);
  };

  return (
    <section className="nav">
      <nav className="navbar justify-between flex p-3 top-0 fixed w-full ">
        {/* Logo */}
          <div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="my-auto self-center items-center text-white hover:text-cyan-400 ease-in-out duration-300 cursor-pointer text-xl font-bold ml-3 lg:inline"
          >
            Ridhooo.
          </Link>
          </div>
        {/* Normal Navbar */}
        <div className="navbar-nav flex">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="my-auto self-center items-center text-white hover:text-cyan-400 ease-in-out duration-300 cursor-pointer text-xl font-bold mx-12 lg:inline hidden"
          >
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="my-auto self-center text-white items-center hover:text-cyan-400 ease-in-out duration-300 cursor-pointer text-xl font-bold mx-12 lg:inline hidden">
            About
          </Link>
          <Link
            to="portofolio"
            smooth={true}
            duration={500}
            className="my-auto self-center items-center text-white hover:text-cyan-400 ease-in-out duration-300 cursor-pointer text-xl font-bold mx-12 lg:inline hidden"
          >
            Portofolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="my-auto self-center items-center text-white hover:text-cyan-400 ease-in-out duration-300 cursor-pointer text-xl font-bold mx-12 lg:inline hidden"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex right-0 self-center">
          <p
            onClick={toggleNav}
            className="icons mr-4 right-0 hover:text-cyan-400 text-2xl font-bold  cursor-pointer"
          > &#9776; </p>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-44 bg-white text-black transform ${
            isMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`} 
        >
          <div className="right-0 flex flex-col items-center space-y-8 mt-10 min-h-screen bg-white">
            {/* Close Button */}
            <div
              className="right-0 close-btn cursor-pointer text-right p-4 text-lg"
              onClick={toggleNav}
            >
              <CiMenuBurger
                onClick={toggleNav}
                className="icon mx-[4.5rem] mt-3 hover:text-cyan-400 w-8 h-8 cursor-pointer"
              />
            </div>

            {/* Sidebar Links */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="my-auto mx-auto self-center items-center hover:text-cyan-400 ease-in-out duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="my-auto mx-auto self-center items-center hover:text-cyan-400 ease-in-out duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="portofolio"
              smooth={true}
              duration={500}
              className="my-auto mx-auto self-center items-center hover:text-cyan-400 ease-in-out duration-300 cursor-pointer"
            >
              Portofolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="my-auto mx-auto self-center items-center hover:text-cyan-400 ease-in-out duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
