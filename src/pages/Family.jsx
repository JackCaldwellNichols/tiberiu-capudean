import React from 'react'
import '../styles/family.css'
import images from '../family.json'

const Family = () => {
  return (
    <div className='family' id='family'>
    <h1 className='ms-3'>THE FAMILY COLLECTION</h1>
    <div className='nakedWrapper'>
        <span className='lineFamily ms-3'></span>
        <div className='mx-auto px-3'>
            <div className='grid container d-flex justify-content-center align-items-center flex-wrap'>
                {images.map(image => (
                    <div class="card ms-2 mt-4" style={{width: '18rem'}}>
                        <img src ={image.image} class="card-img-top" alt="..."/>
                        <div className='overlay'>
                            <span className='hoverText'>{image.text}</span>
                        </div>
                </div>
                ))}
            </div>
        </div>
        <footer className='footer d-flex justify-content-center mt-5'>
            <a href='https://tiberiucapudean.wixsite.com/naked/family' target='_blank'>
                <p className='familyRedirect'>See the full collection...</p>
            </a>
        </footer>
    </div>
    </div>
  )
}


export default Family