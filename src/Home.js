import React, {useState} from "react";
import "./home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
          </div>
          <div className="navigation pxy__30">

          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#Services">Services</a>
            </li>
            <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#Blog">Skills</a>
            </li>
            <li className="sideNavbar" onClick={() =>setShow(!show)}>
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Laouna Oumar</h2>
              <h3 className="home__text sweet pz__10">Software Engineer.</h3>
              <h4 className="home__text pz__10">based in Ghana.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
