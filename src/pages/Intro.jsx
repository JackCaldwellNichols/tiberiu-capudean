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
          <div className='icon'>
             <i className="fa-brands fa-instagram"></i>
          </div>
          <div className='icon'>
          <i class="fa-brands fa-facebook"></i>
          </div>
        </div>

        </div>

    </div>
        <div className='down d-flex justify-content-center align-items-center mt-3'>
            <a href='#about'><i class="fa-sharp fa-solid fa-chevron-down fa-beat"></i></a>
        </div>
    </div>
  )
}

export default Intro