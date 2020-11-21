import React, { useEffect, useState } from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-custom">
      <a class="navbar-brand" href="/">
        TypeRacer
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/">
            Sign In
          </a>
          <a id="button" class="nav-item nav-link" href="/">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
