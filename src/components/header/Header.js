import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { TiHome } from "react-icons/ti";
import { FaHome, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaUser } from "react-icons/fa";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/";
    const activeStyle = {
      backgroundColor: theme.highlight,
      fontWeight: "bold",
      border: "1px solid",
      borderColor: theme.text + "66",
      borderRadius: "10px"
    };
    return (
      <>
        <SeoHeader />
        <div style={{ "margin-bottom": "40px" }}>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/"
                  exact
                  tag={Link}
                  activeStyle={activeStyle}
                  style={{ color: theme.text, marginLeft: "10px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaHome
                      size={20}
                      style={{ marginRight: "8px", marginBottom: "2px", color: theme.text }}
                    />
                    Home
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={activeStyle}
                  style={{ color: theme.text, marginLeft: "10px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaGraduationCap
                      size={20}
                      style={{ marginRight: "8px", marginBottom: "2px", color: theme.text }}
                    />
                    Education
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={activeStyle}
                  style={{ color: theme.text, marginLeft: "10px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaBriefcase
                      size={20}
                      style={{ marginRight: "8px", marginBottom: "2px", color: theme.text }}
                    />
                    Experience
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={activeStyle}
                  style={{ color: theme.text, marginLeft: "10px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaProjectDiagram
                      size={20}
                      style={{ marginRight: "8px", marginBottom: "2px", color: theme.text }}
                    />
                    Projects
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  tag={Link}
                  activeStyle={activeStyle}
                  style={{ color: theme.text, marginLeft: "10px" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaUser
                      size={20}
                      style={{ marginRight: "8px", marginBottom: "2px", color: theme.text }}
                    />
                    About Me
                  </div>
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </>
    );
  }
}
export default Header;
