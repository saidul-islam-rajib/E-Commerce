import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box face">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio quis voluptas quam eveniet magnam inventore illum ea, aperiam a.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nesciunt?</p>
      </div>
    </div>
  )
}
