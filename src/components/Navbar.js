import React from "react";
import airbnb from "./../airbnb.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={airbnb} className="App-logo" alt="logo" />
    </nav>
  );
}
