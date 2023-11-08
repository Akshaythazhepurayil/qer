import React from 'react'
import "./BrandLogoCard.css"

const BrandLogoCard = ({brandLogo}) => {
  return (
    <div className='logo-card'>
        <img src={brandLogo} alt="" />
    </div>
  )
}

export default BrandLogoCard