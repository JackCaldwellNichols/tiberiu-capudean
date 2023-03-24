import React from 'react'
import '../styles/About.css'
import photo from '../images/tibs.png'

const About = () => {
  return (
    <div className='aboutContainer mx-auto' id='about'>
        <div className='upAbout d-flex justify-content-center align-items-center mb-4 '>
            <a href='#intro'><i class="fa-sharp fa-solid fa-chevron-up fa-beat"></i></a>
        </div>
        <div className='about'>
            <div className='leftAbout'>
                <h1> ABOUT ME</h1>
                <span className='line'></span>
                <h5 className='desc'>Romanian photographer and LGBTQ+ activist based in Madrid, recipient of the European Tolerance Award 2018.


    "N•A•K•E•D emerged from the need for visibility of the LGBTQ+ community and from my desire to help those who aren’t part of our sexual minority to get to know us. To understand our struggles and strenghts, our fears and victories. <br></br><br></br>

    •FAMILY• was born a year later. I wanted to capture the intimacy and love between men. I hope people will eventually understand that diversity means normality and that we’re not less human, or almost human — therefore, human rights and equal civil rights should apply to us too. 

    I want to give a face and a voice to those that the homophobes hate without even knowing. I want them to understand that we’re not really all that different, and that our sexuality doesn’t define us as people.<br></br><br></br>

    I want N•A•K•E•D and •FAMILY• to be emotional journeys for them. I hope that they feel sadness and joy, fear and hope, shame and courage. I hope that they take a good look at my photos and read all the stories, so they can see what homophobia feels like. By knowing and understanding us, they can become our allies."</h5>
            </div>
            <div className='rightAbout'>
                <div className='tibAboutWrapper'>
                    <img src={photo} alt='' className='tiberiuAbout'/>
                </div>
            </div>
        </div>
       <div className='downAbout d-flex justify-content-center align-items-center mt-4'>
            <a href='#naked'><i class="fa-sharp fa-solid fa-chevron-down fa-beat"></i></a>
        </div>
    </div>
  )
}

export default About