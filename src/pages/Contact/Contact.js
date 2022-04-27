import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <header className='title'>
             <p className='contact-logo'>Contact</p><br />
             <p className='contact-text'>Get in Touch</p>
        </header>
        
              <div className='container'>
                {/* This section contains all the information in the body, which includes the form and the contact information at the top*/}
                  <div className='contact-information'>
                    <div className='opening-hours'>
                        <p className='text-1'>Address</p><br />
                        <p className='text-2'>Nigeria</p>
                    </div>

                  </div>
                  <div className='mobile-infromation'>
                    <div className='mobile-number'>
                        <p className='mobile-text-1'> Mobile Number</p><br />
                        <p className='mobile-text-2'>+2348000000000</p>
                    </div>

                  </div>
                  <div className='email-information'>
                    <div className='email-address'>
                        <p className='email-text-1'>Email Address</p><br />
                        <p className='email-text-2'>Admin@Africancafe.com</p>
                    </div>

                  </div>
                  
              </div>
            <div className='form-details'>

              
              <form>
                <div className='input'>
                <h2 className='form-title'>Stay connected with us</h2>



                <input type='text' name='username' placeholder='Your Name'/>
                </div>
                
                <div className='input'>
                <input type='email' name='email-address' placeholder='Your Email'/>
                </div>

                <div className='input'>
                <input type='text' name='subject' placeholder='Your Subject'/>
                </div>

                <div className='input'>
                <textarea className='message' rows='8' placeholder='Your Message'></textarea>
                </div>
                
                <button type='submit'>SUBMIT</button>
              </form>
             
            </div>

    </div>
  )
}

export default Contact