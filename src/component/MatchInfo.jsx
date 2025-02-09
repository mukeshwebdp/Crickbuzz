import React, { useState } from 'react'
import './style/match-info.css'
function MatchInfo() {
    const [matchData, setMatchData] = useState({
        img: 'match-info.png',
        title: 'ILT20 2025 begin on january 11 amid jam-packed schedule',
        details: 'A total of 34 matches will staged in the month-log tournament which will conclude with the final in Dubai on February 9'
    })
  return (
    <>
        <div className="match-info">
            <div className="info">
                <p>Match Info</p>
            </div>

            <div className="match-info-2 slider">
                {[...Array(5)].map((_,index)=>(
                    <div className="match-box" key={index}>
                    <div className="img">
                        <img src={matchData.img} alt="Match-img" />
                    </div>
                    <div className="match-box-info">
                        <div className="title">
                            <h3>{matchData.title}</h3>
                            <p>{matchData.details}</p>
                        </div>
                    </div>
                    <a href="#">Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> </a>
                </div>
                ))}
                
                
            </div>
        </div>
    </>
  )
}

export default MatchInfo