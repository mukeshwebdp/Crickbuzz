import React from 'react'
import './style/video.css'
function Video() {
  return (
    <>
      <div className="video-box">
        <div className="new-video">
          <p>Latest Videos</p>
        </div>

        <div className="card-box slider">
          {[...Array(5)].map((_,index)=>(
            <>
            <div className="video-info" key={index} style={{backgroundImage: "url('video-bg.png')", backgroundSize: "cover",backgroundPosition: 'center'}}>
            <p>Why franchises opt against Shaw, Thakur even as Suryavanshi creates history</p>
            
          </div>
          
            </>
          ))}
        </div>
        <a>View All</a>
      </div>
    </>
  )
}

export default Video