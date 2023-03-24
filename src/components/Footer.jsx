import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='bottom'>
      <div className='footerIconWrapper'>
          <a className='icon' href='https://www.instagram.com/tiberiucapudeanphotography/' target='_blank'>
              <i className="fa-brands fa-instagram"></i>
          </a>
          <a href='https://tiberiucapudean.wixsite.com/naked/press' className='press' target='_blank'>PRESS</a>
          <a className='icon' href='https://www.facebook.com/tibishor.mereusurprinzator' target='_blank'>
              <i class="fa-brands fa-facebook"></i>
          </a >
      </div>
    </div>
  )
}

export default Footer