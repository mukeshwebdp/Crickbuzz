import React from 'react'
import './style/Ads.css'
function Ads() {
  return (
    <>
        <div className='Ads-info' style={{backgroundImage: "url('bg-img.png')", backgroundSize: "cover",backgroundPosition: 'center'}}>

            <div className="card-1">
              <h3>Advertise With us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas modi nesciunt praesentium? Fugit ullam numquam excepturi dicta reprehenderit, incidunt omnis obcaecati harum mollitia non sunt fuga recusandae accusamus esse?</p> 
              <button>Contact Now </button>         

            </div>

            <div className="card-2">

                <img src="match-info-box-2.png" alt="image" />
            </div>
        </div>
    </>
  )
}

export default Ads