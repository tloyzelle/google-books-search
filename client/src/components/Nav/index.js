import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <p className="navbar-brand"> Google Books </p>
      <div>
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved
        </a>
      </div>
    </nav>
  );
}

export default Nav;