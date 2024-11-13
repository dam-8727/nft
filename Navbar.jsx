import { useState, useEffect } from "react";
import logo from "./assets/Zori_logo.png";
import "./assets/css/Navbar.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useConnect } from "@connect2ic/react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { isConnected, disconnect } = useConnect();
  const [isOpen, setIsOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isOpenn, setIsOpenn] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isConnected) {
      const randomAvatar = `https://robohash.org/${Math.random()}.png?size=50x50`;
      setAvatarUrl(randomAvatar);
    }
  }, [isConnected]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpenn(true);
  };

  const handleMouseLeave = () => {
    setIsOpenn(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div>
          <RouterLink to="/">
            <img className="logo" src={logo} alt="Zori" />
          </RouterLink>
        </div>
        <div className="flex gap-6">
          <div className={`links ${isOpen ? "open" : ""}`}>
            {isHomePage ? (
              <ScrollLink
                to="firstpage"
                spy={true}
                smooth={true}
                duration={1500}
                className="cursor-pointer"
                onClick={toggleSidebar}
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={toggleSidebar}
                className="cursor-pointer"
              >
                Home
              </RouterLink>
            )}
            <RouterLink
              to="/about"
              className="cursor-pointer"
              onClick={toggleSidebar}
            >
              About Us
            </RouterLink>
            <ScrollLink
              to="faqs"
              spy={true}
              smooth={true}
              duration={1500}
              className="cursor-pointer"
              onClick={toggleSidebar}
            >
              FAQs
            </ScrollLink>
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              duration={1500}
              className="cursor-pointer"
              onClick={toggleSidebar}
            >
              Features
            </ScrollLink>
            {/* New Collection Button */}
            <RouterLink
              to="/collection"
              className="cursor-pointer"
              onClick={toggleSidebar}
            >
              Collection
            </RouterLink>
          </div>
          {isConnected ? (
            <div
              className="dropdown get-started-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={avatarUrl} className="user-image" alt="User Avatar" />

              <div className={`dropdown-content ${isOpenn ? "show" : ""}`}>
                <a className="logout" href="/profile">
                  Profile
                </a>
                <button onClick={disconnect} className="logout">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <RouterLink className="get-started-wrapper" to="/login">
              <button className="get-started">Get Started ✨</button>
            </RouterLink>
          )}
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
