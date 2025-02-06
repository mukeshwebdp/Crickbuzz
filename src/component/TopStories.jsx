import React from 'react'
import './style/topStories.css'
function TopStories() {
  return (
    <>
        <div className="top-stories">
            <div className="stories-line">
                <p>Top Stories</p>
            </div>

            <div className="stories-info ">
               <div className="card">
                    <div className="img">
                        <img src="cricket.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p>CT25: ICC meet adjourned after a brief discussion; to be reconvened soon</p>
                        <p>Read More</p>
                    </div>
                </div>
               <div className="card">
                    <div className="img">
                        <img src="cricket.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p>CT25: ICC meet adjourned after a brief discussion; to be reconvened soon</p>
                        <p>Read More</p>
                    </div>
                </div>
               <div className="card">
                    <div className="img">
                        <img src="cricket.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p>CT25: ICC meet adjourned after a brief discussion; to be reconvened soon</p>
                        <p>Read More</p>
                    </div>
                </div>
               <div className="card">
                    <div className="img">
                        <img src="cricket.jpg" alt="" />
                    </div>
                    <div className="info">
                        <p>CT25: ICC meet adjourned after a brief discussion; to be reconvened soon</p>
                        <p>Read More</p>
                    </div>
                </div>
            </div>
            <p className='left'>View All</p>
        </div>
    </>
  )
}

export default TopStories