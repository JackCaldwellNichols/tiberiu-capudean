import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/contactform.css'



const ContactForm = () => {
  const [success, setSuccess] = useState(false)


  const publicAPI = 'fkPYJiAz6s6u3ETUU'
  const service = 'service_mxv6f59'
  const template = 'template_rw3ecjj'

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const toastifySuccess = () => {
    toast("We'll be in touch soon!", {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    })
  }

  const onSubmit =  async (data) => {
    const {name, email, subject, message} = data

    try {
      const emailParams = {
        name, email, subject, message
      }
      await emailjs.send(
        service,
        template,
        emailParams,
        publicAPI
      );
      reset()
      toastifySuccess()
      setSuccess(true)
      console.log('Message sent')
      
    }catch(error) {
      console.log(error)
    }
  } 


  return (

    <div className='ContactForm' id='contact'>
                <h1 className='mb-3'>CONTACT</h1>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='first'>
                  <div className=''>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {value: true, message: 'Please enter your name'},
                        maxLength: {value: 30, message: 'Please use 30 characters or less'}
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage' style={{color:'red'}}>{errors.name.message}</span>}
                  </div>
                  <div className=''>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: {value: true, 
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        }})}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && <span className='errorMessage' style={{color:'red'}}>
                      Please enter a valid email address
                    </span>}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow mb-3'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                      {errors.subject && (
                      <span className='errorMessage' style={{color: 'red'}}>{errors.subject.message}</span>
                      )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow mb-4'>
                  <div className='col'>
                    <textarea
                      rows={5}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                     {errors.message && <span className='errorMessage' style={{color: 'red'}}>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn mb-4' type='submit'>
                  Send
                </button>
              </form>
              {success && (<span style={{color: 'green'}}>Message sent</span>)}
            <ToastContainer />
          </div>

  )
}

export default ContactForm