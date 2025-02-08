import React, { useState } from 'react'
import './style/topStories.css'


function TopStories() {
    const [data, setData] = useState({
        img: 'cricket.jpg',
        info: 'CT25: ICC meet adjourned after a brief discussion; to be reconvened soon'

    })
return (
    <>
        <div className="top-stories">
            <div className="stories-line">
                <p>Top Stories</p>
            </div>

            <div className="stories-info">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="card">
                        <div className="img">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="info">
                            <p>{data.info}</p>
                            <a>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <p className='left'>View All</p>
        </div>
    </>
)
}

export default TopStories