import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "../assets/analytics.svg";
import { FaBars } from "react-icons/fa";
import { on } from "react-use/lib/util";
import { useToggle } from "react-use";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useToggle(false);
  const changenavbar = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changenavbar);
  return (
    <header className={navbar ? "header-area sticky" : "header-area"}>
      <a href="#" className="logo mb-2">
        <Link to="/" className="text-decoration-none main-logo">
          EISI
        </Link>
      </a>
      <ul className={active ? "active" : null}>
        <li>
          <a>
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/About" className="text-decoration-none">
              About
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/Features" className="text-decoration-none">
              Features
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/Services" className="text-decoration-none">
              AMC & Services
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/SignUp" className="text-decoration-none btn">
              Signup
            </Link>
          </a>
        </li>
      </ul>
      <input type="checkbox" id="check" />
      <label for="check">
        <FaBars className="bars" onClick={setActive} />
      </label>
      {/* <div className="bg-primary grid-3 p-2">
      <div>
        <Image src={logo} width="100px" height="50px" className="position-relative" />
      </div>
      <div>
          <h2 className="text-center text-white container position-relative">
              EISI
          </h2>
      </div>
      <div>
        <nav className="nav container position-relative">
          <Link to="/" className="text-white ml-4 p-1 link text-decoration-none">
            Home
          </Link>
          <Link to="/About" className="text-white ml-4 p-1 link text-decoration-none">
            About
          </Link>
          <Link to="/Features" className="text-white ml-4 p-1 link text-decoration-none">
            Features
          </Link>
          <Link to="/Services" className="text-white ml-4 p-1 link text-decoration-none">
            Services
          </Link>
          <Link to="/SignUp" className="text-white ml-4 p-1 text-decoration-none btn">
            Sign Up
          </Link>
        </nav>
      </div>
    </div> */}
    </header>
  );
}

export default Navbar;
