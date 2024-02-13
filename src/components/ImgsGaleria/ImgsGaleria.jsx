import React from 'react'
import "./index.scss"
const ImgsGaleria = ({imgPath}) => {
  return (
    <div className='imgGaleria'>
        <img src={imgPath} alt="" />
    </div>
  )
}

export default ImgsGaleria