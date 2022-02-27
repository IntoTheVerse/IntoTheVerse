import React, { useEffect, useRef, useState } from 'react';

import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Chain from "../../assets/chain.svg"
import { Link, animateScroll as scroll } from "react-scroll";

    const Menu = ({ hActive, setHActive, menuTop }) => {
      const menuRef = useRef(null);

      useEffect(() => {
        menuRef.current.style = `top:${menuTop}px;position:fixed;left:0`;
        return () => {
          return;
        };
      }, []);
      return (
        <div className="menu" ref={menuRef}>
          <div className="menu_nav">
            <div className="menu_items">
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setHActive(!hActive)}
                delay={100}
              >
                HOME
              </Link>
            </div>
            <div className="menu_items">
              <Link
                to="featuresScreen"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick={() => setHActive(!hActive)}
                delay={100}
              >
                FEATURES
              </Link>
            </div>
            <div className="menu_items">
              <Link
                to="roadmapScreen"
                spy={true}
                smooth={true}
                offset={0}
                onClick={() => setHActive(!hActive)}
                duration={2000}
                delay={100}
              >
                ROADMAP
              </Link>
            </div>
            <div className="menu_items">
              <Link
                to="teamInfoScreen"
                spy={true}
                smooth={true}
                offset={0}
                onClick={() => setHActive(!hActive)}
                duration={2000}
                delay={100}
              >
                TEAMS
              </Link>
            </div>
            <div className="menu_items">
              <Link
                to="footerScreen"
                spy={true}
                smooth={true}
                offset={0}
                onClick={() => setHActive(!hActive)}
                duration={2000}
                delay={100}
              >
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      );
    };
const Header = () => {
    const scrollTo = (ele_class) => {
        document.querySelector(ele_class).scrollIntoView({
            behavior: 'smooth'
        });
    }
      const [hActive, setHActive] = useState(false);
      const [menuTop, setMenuTop] = useState(0);

    return (
      <section className="header">
        <header className="homeScreen__header">
          <div className="homeScreen__header__content">
            <section className="homeScreen__header__chainContainer">
              <img src={Chain} alt="" />
              <img src={Chain} alt="" />
            </section>
            <section className="homeScreen__header__main">
              <img src={Logo} alt="logo" />
              <nav className="homeScreen__header__main__nav">
                <p>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    delay={100}
                  >
                    HOME
                  </Link>
                </p>
                <p>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="featuresScreen"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    delay={100}
                  >
                    FEATURES
                  </Link>
                </p>
                <p>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="roadmapScreen"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    delay={100}
                  >
                    ROADMAP
                  </Link>
                </p>
                <p>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="teamInfoScreen"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    delay={100}
                  >
                    TEAMS
                  </Link>
                </p>
                <p>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="footerScreen"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                    delay={100}
                  >
                    ABOUT
                  </Link>
                </p>
              </nav>
                <div className="hamburger" onClick={() => setHActive(!hActive)}>
                  <div className="hamburgerLine"></div>
                  <div className="hamburgerLine"></div>
                  <div className="hamburgerLine"></div>
                </div>
                {hActive && (
                  <Menu
                    menuTop={menuTop}
                    hActive={hActive}
                    setHActive={setHActive}
                  />
                )}
            </section>
          </div>
        </header>
      </section>
    );
}

export default Header