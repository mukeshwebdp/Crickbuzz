import React, { useState } from 'react'
import './style/video.css'
function Video() {
  const [view, setView] = useState('')

  return (
    <>
      <div className="video-box">
        <div className="new-video">
          <p>Latest Videos</p>
        </div>

        <div className={`card-box slider ${view}`}>
          {[...Array(6)].map((_,index)=>(
            <>
            <div className="video-info" key={index} style={{backgroundImage: "url('video-bg.png')", backgroundSize: "cover",backgroundPosition: 'center'}}>
            <p>Why franchises opt against Shaw, Thakur even as Suryavanshi creates history</p>
            
          </div>
          
            </>
          ))}
        </div>
        <button onClick={() => setView(view ? '' : 'view')}>View All</button>
      </div>
    </>
  )
}

export default Video