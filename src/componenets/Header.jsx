import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="Header">
    <nav>
      <div className="header-title">
      <h1 onClick={()=>(
        window.scrollTo(0,0)
      )}>Sarhan</h1>
      </div>

      <main>
        <HashLink smooth to={"/#home"}>Home</HashLink>
        <HashLink smooth to={"/#about"}>About</HashLink>
        <HashLink smooth to={"/#skills"}>Skills</HashLink>
        <HashLink smooth to={"/#projects"}>Projects</HashLink>
        <HashLink smooth to={"/#services"}>Services</HashLink>

      </main>
    </nav>
    </div>
  );
};

export default Header;
