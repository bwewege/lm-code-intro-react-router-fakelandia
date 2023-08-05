import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        FakeLandia Justice Deparment
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/misdemeanors">Misdemeanors</a>
          </li>
          <li>
            <a href="/confess">Confess To Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// My original Code
// const Nav = () => (
//   <nav
//     className="is-flex is-flex-grow-1 is-align-items-center"
//     style={{ width: "100%" }}
//   >
//     <ul
//       style={{ width: "100%" }}
//       className="is-flex is-flex-direction-row is-justify-content-space-evenly is-justify-content-space-evenly"
//     >
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/misdemeanors">Misdemeanors</NavLink>
//       </li>
//       <li>
//         <NavLink to="/confess">Confess To Us</NavLink>
//       </li>
//     </ul>
//   </nav>
// );

export default Navbar;
