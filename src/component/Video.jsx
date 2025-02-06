import React from 'react'
import './style/video.css'
function Video() {
  return (
    <>
        <div className="video-container">
            <div className='video-heading'>
                <p>Latest Videos</p>
            </div>
            <div className="card-info">
            <div className="card"
             style={{ backgroundImage: "url('/cricket-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet qui </p>
            </div>
            <div className="card"
             style={{ backgroundImage: "url('/cricket-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet qui </p>
            </div>
            <div className="card"
             style={{ backgroundImage: "url('/cricket-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet qui </p>
            </div>
            <div className="card"
             style={{ backgroundImage: "url('/cricket-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet qui </p>
            </div>
            </div>

        </div>
    </>
  )
}

export default Video