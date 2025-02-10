import React from 'react'
import './style/sideBar.css'
function SideBar({hidden}) {
  return (
    <>
        <div className={`side-bar ${hidden}`}>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </div>
    </>
  )
}

export default SideBar