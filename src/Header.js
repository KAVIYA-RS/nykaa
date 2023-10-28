import React from "react";

function Header() {
  const logoStyle = {
    width: "150px",
    height: "auto",
  };

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a><img src="nyk.png" style={logoStyle} />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse ml-2 navbar-collapse justify-content-end"
      id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <h3><a class="nav-link">Home</a></h3>
        </li>
        <li class="nav-item">
          <h3><a class="nav-link">About</a></h3>
        </li>
        <li class="nav-item">
          <h3><a class="nav-link">Tours</a></h3>
        </li>
      </ul>
    </div>
  </nav>
  
  );
}
export default Header;