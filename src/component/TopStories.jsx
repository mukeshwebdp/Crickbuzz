import React, { useState, version } from 'react'
import './style/topStories.css'


function TopStories() {
    const [view, setView] =useState('')
console.log(view)
    const [data, setData] = useState({
        img: 'cricket.png',
        info: 'CT25: ICC meet adjourned after a brief discussion; to be reconvened soon'

    })
return (
    <>
        <div className="top-stories">
            <div className="stories-line">
                <p>Top Stories</p>
            </div>

            <div className={`stories-info ${view}`}>
                {[...Array(4)].map((_, i) => (
                    <div key={`card-${i}`} className="card">
                        <div className="img">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="info">
                            <p>{data.info}</p>
                            <a>Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> </a>
                        </div>
                    </div>
                ))}
            </div>
            <button className='left' onClick={() => setView(view ? '' : 'view')}>View All</button>
        </div>
    </>
)
}

export default TopStories