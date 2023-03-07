import React from "react";

export default function Navbar({ brand }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-white  fw-bold" href="#">
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
}
