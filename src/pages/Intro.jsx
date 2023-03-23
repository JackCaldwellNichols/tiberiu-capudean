import React from 'react'
import Typewriter from 'typewriter-effect';

import '../styles/intro.css'

const Intro = () => {




  return (
    <div className='introContainer' id='intro'>
    <div className='intro'>
        <div className='introWrapper'>
          <div className='nameWrapper'>
            <h1 className='name'>TIBERIU 
            
            <span>
            <Typewriter options={{
                strings: ['CAPUDEAN.'],
                autoStart: true,
                pauseFor: 2000,
                loop: true,
                
     
              }}
            />
            </span></h1>
          </div>
            <h3 className='job'>PHOTOGRAPHY</h3>
            <div className='iconsWrapper'>
                <a className='icon' href='https://www.instagram.com/tiberiucapudeanphotography/' target='_blank'>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className='icon' href='https://www.facebook.com/tibishor.mereusurprinzator' target='_blank'>
                  <i class="fa-brands fa-facebook"></i>
                </a >
            </div>

        </div>

    </div>
        <div className='downIntro d-flex justify-content-center align-items-center mt-5'>
            <a href='#about'><i class="fa-sharp fa-solid fa-chevron-down fa-beat"></i></a>
        </div>
    </div>
  )
}

export default Intro