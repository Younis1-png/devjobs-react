import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"} className="header__link">
          <h1>DevJobs</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
