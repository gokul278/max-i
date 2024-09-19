import { useState, useEffect } from "react";
import logo from "../../assets/Img/Home/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  const navigate = useNavigate();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("transparent"); // State for background color

  let location = useLocation();

  // Helper function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBg("black"); // Change to black when scrolled 100px
      } else {
        setHeaderBg("transparent"); // Transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation and close the navbar on mobile
  const handleNavigation = (path) => {
    navigate(path);
    setIsToggleOpen(false); // Close the navbar
  };

  return (
    <>
      <header
        className="border-b-1 fixed z-20 w-full after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden"
        style={{
          backgroundColor: headerBg,
          transition: "background-color 0.3s ease" // Smooth transition for background color
        }}
      >
        <div className="relative mx-auto max-w-full px-8 lg:px-20">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/* Brand logo */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="/"
            >
              <img className="w-[60px]" src={logo} alt="logo" />
            </a>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
    ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
                }`
              }
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/* Navigation links */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-[#000] px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/")}
                >
                  <span>Home</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/aboutus") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/aboutus")}
                >
                  <span>About Us</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/services") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/services")}
                >
                  <span>Our Services</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/works") || isActive("/works/webdesigns") || isActive("/works/logodesigns") || isActive("/works/printposters") || isActive("/works/socialmediaposters") || isActive("/works/videos") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/works")}
                >
                  <span>Our Works</span>
                </a>
              </li>
              {/* <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/blogs") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/blogs")}
                >
                  <span>Our Blogs</span>
                </a>
              </li> */}
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className={`flex items-center gap-2 py-4 cursor-pointer transition-colors duration-300 font-[600] text-[19px] ${isActive("/contact") ? "text-[#ffaa14]" : "text-[#fff]"} hover:text-[#ffaa14] focus:outline-none focus-visible:outline-none lg:px-8`}
                  onClick={() => handleNavigation("/contact")}
                >
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
