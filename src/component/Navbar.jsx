import React, { useState } from "react";
import './style/navbar.css'
import SideBar from "./SideBar";
function Navbar() {
  const [sideBar, setSideBar] = useState('close')
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>Crickbuzz</h2>
        </div>

        {/* Menu-bar */}

        <div className="menu">
          <ul>
            <li>Live Score</li>
            <li>Schedule Match</li>
            <li className="show">
              New
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </label>
              <div className="subNav">
                <ul>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </li>
            <li className="show">
              Series
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </label>
              <div className="subNav">
                <ul>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </li>
            <li className="show">
              Teams
              <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </label>

              <div className="subNav">
                <ul>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Search */}

        <div className="search">
          <label htmlFor="search">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </label>

          <label htmlFor="language">
            EN
            <label htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </label>
          </label>
          <label htmlFor="menu" onClick={() => setSideBar(sideBar === 'close' ? '' : 'close')} >
            <svg className="search-icon menu-bar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
            <SideBar hidden={sideBar} />
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
