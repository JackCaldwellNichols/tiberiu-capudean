import React from 'react'
import '../styles/naked.css'
import images from '../naked.json'

const Naked = () => {
  return (
    <div className='naked'>
    <h1>THE NAKED COLLECTION</h1>
    <div className='nakedWrapper'>
        <span className='lineNaked'></span>
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
            <a href='http://www.instagram.com' target='_blank'>
                <p className='redirect'>See the full collection...</p>
            </a>
        </footer>
    </div>
    </div>
  )
}

export default Naked