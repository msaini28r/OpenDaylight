import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import odl_light_logo from '../../images/odl_light_logo.png'
import odl_dark_logo from '../../images/odl_dark_logo.png'

const Header = ({ theme, toggleTheme, rotation }) => {
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const [isOpen, SetIsOpen] = useState(false)
  const navtogg = () => {
    SetIsOpen(!isOpen)
  }

  return (
    <div className="container mx-auto py-5">
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <Link to="/">
            {theme === 'dark-theme' ? (
              <img
                src={odl_light_logo}
                alt="ODL Dark Logo"
                style={{ width: 200 }}
              />
            ) : (
              <img
                src={odl_dark_logo}
                alt="ODL Light Logo"
                style={{ width: 200 }}
              />
            )}
          </Link>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/governance">Governance</Link>
            </li>
            <li>
              <Link to="/user-stories">User Stories</Link>
            </li>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to="/getting-started">Getting Started</Link>
            </li>
            <li>
              <Link to="/automated-service-delivery">Platfrom Overview</Link>
            </li>
            <li>
              <a href="https://www.opendaylight.org/">
                <span className="join-button">Join</span>
              </a>
            </li>
            <li>
              <svg
                style={{
                  height: 20,
                  marginTop: 1,
                  fill: theme === 'dark-theme' ? 'gray' : 'black',
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </li>
            <li>
              <svg
                style={{
                  width: 30,
                  fill: theme === 'dark-theme' ? 'gray' : 'black',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 0.7s ease',
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={toggleTheme}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </li>
          </ul>
        </div>
        <div
          className="nav-toggle"
          onClick={navtogg}
          style={{ fill: theme === 'dark-theme' ? 'gray' : 'black' }}
        >
          <svg
            className="hamburger-icon"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="12"></rect>
            <rect y="30" width="100" height="12"></rect>
            <rect y="60" width="100" height="12"></rect>
          </svg>
        </div>
      </nav>
    </div>
  )
}

export default Header
