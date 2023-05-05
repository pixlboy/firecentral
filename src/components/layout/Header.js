import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  const [isShowProjectMenu, setIsShowProjectMenu] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  const toggleProjectMenu = () => {
    const val = !isShowProjectMenu;
    setIsShowProjectMenu(val);
  };

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li className="services-menu">
                      <div className="link-wrapper">
                        <div
                          onMouseEnter={toggleProjectMenu}
                          onMouseLeave={toggleProjectMenu}
                          className="cursor-pointer"
                        >
                          <span>Services</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="7"
                            viewBox="0 0 13 7"
                            fill="#9CA9B3"
                            className="d-inline ml-4"
                          >
                            <path d="M12 0.5L6.5 5.5L1 0.5" />
                          </svg>
                        </div>
                        <div className={`item-link-menu`}>
                          <Link to="/fdas" className="item-link">
                            Fire Alarm Systems
                          </Link>
                          <Link to="/sprinkler" className="item-link">
                            Fire Sprinkler Systems
                          </Link>
                          <Link to="/supression" className="item-link">
                            Fire Suppression Systems
                          </Link>
                          <Link to="/hydrant" className="item-link">
                            Fire Hydrant Systems
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="services-menu-mobile">
                      <Link to="/fdas" onClick={closeMenu}>
                        Fire Alarm Systems
                      </Link>
                    </li>
                    <li className="services-menu-mobile">
                      <Link to="/sprinkler" onClick={closeMenu}>
                        Fire Sprinkler Systems
                      </Link>
                    </li>
                    <li className="services-menu-mobile">
                      <Link to="/supression" onClick={closeMenu}>
                        Fire Suppression Systems
                      </Link>
                    </li>
                    <li className="services-menu-mobile">
                      <Link to="/hydrant" onClick={closeMenu}>
                        Fire Hydrant Systems
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={closeMenu}>
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" class="pl-0 pr-0" onClick={closeMenu}>
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
