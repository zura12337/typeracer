import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="/">
        TypeRacer
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      ></div>
    </nav>
  );
}
