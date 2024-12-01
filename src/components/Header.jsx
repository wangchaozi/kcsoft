import React from "react"
import { NavLink } from "react-router-dom"
import logoImage from "../assets/logo.png" // 替换为你的实验室 logo 图片路径
import "../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <div className="logo">
            <NavLink to="/" className="logo-link">
              <img src={logoImage} alt="实验室官网 Logo" />
            </NavLink>
          </div>
          <NavLink to="/" className="logo-link">
          <div className='title'>西安科技大学校软件实验室</div>
          </NavLink>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                校软概况
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                招新
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                竞赛与项目
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/activity" className="nav-link">
                校软活动
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
