import React from 'react'
import ContactForm from '../components/ContactForm.jsx'
import image from '../images/contact.png'
import '../styles/contact.css'

const Contact = () => {
  return (

    <div className='contactContainer' id='family'>
        <div className='down d-flex justify-content-center align-items-center mt-4'>
            <a href='#family'><i class="fa-sharp fa-solid fa-chevron-up fa-beat"></i></a>
        </div>
        <div className='about'>
            <div className='left'>
                <ContactForm />
            </div>
            <div className='rightContact'>
                <div className='tibWrapperContact'>
                    <img src={image} alt='' className='tiberiu'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact