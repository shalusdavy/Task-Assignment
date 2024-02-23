import React from 'react'
import content from "./Images/Content.png";

function ImgFrames() {
  return (
    <div className='frames'>
       
        <div className='frames-full'>

            <div className='content-img'>
            <img src={content} alt="Instagram" />
            </div>
            <div className='gradient'>
              <button className='gradient-btn'>More Work</button>
            </div>
        </div>

        


    </div>
  )
}

export default ImgFrames