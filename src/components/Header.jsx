import React from "react"
import { Link } from "react-router-dom"
import logoImage from "../assets/logo.png" // 替换为你的实验室 logo 图片路径
import "../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="实验室官网 Logo" />
            </Link>
          </div>
          <div className='title'>西安科技大学校软件实验室</div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                校软概况
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                招新
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/services" className="nav-link">服务</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                竞赛与项目
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                校软活动
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
