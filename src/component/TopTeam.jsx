import React, { useState } from 'react'
import './style/topTeams.css'
function TopTeam() {
    const [flag, setFlag] = useState([
        {country: 'India',flag: 'india-flag-icon.png'},
        {country: 'United State', flag: 'united-states-flag-icon.png'},
        {country: 'Australia', flag: 'australia-flag-icon.png'},
        {country: 'England', flag: 'united-kingdom-flag-icon.png'},
        {country:'New Zealand',flag: 'new-zealand-flag-icon.png'},
        {country: 'South Africa',flag: 'south-africa-flag-icon.png'},
        {country: 'Pakistan', flag: 'pakistan-flag-icon.png'},
        {country: 'Sri Lanka', flag: 'sri-lanka-flag-icon.png'},
        {country: 'Bangladesh', flag: 'bangladesh-flag-icon.png'},

    ])

  return (
    <>
        <div className="team-container">
            <div className="team-title">
                <p>Top Teams</p>
            </div>
            <div className="flag-info slider">
                {flag.map((item,index)=> (
                    <div className="flag-card" key={index}>
                    <div className="img">
                        <img src={`./flag/${item.flag}`} alt={item.flag} />
                        <p>{item.country}</p>
                    </div>
                </div>
                ))}
                

            </div>
        </div>
    </>
  )
}

export default TopTeam