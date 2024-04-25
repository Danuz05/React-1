import React from 'react'
import { useUserSpanish } from '../Userprovider'

export const Contact = () => {
  const Spanish = useUserSpanish()
  return (
    <div className='contact-container' >
      <div className='contact'>
        <footer className='footer'>
          <h2 className='h2 center'>{Spanish ? "Contáctame":"Contact me"}</h2>
          <article className='contact-article'>
            <li className='email'>
              <p className='email-p'>jhonanduz95@gmail.com</p>
              <a className='contact-a hover-contact' href="mailto:jhonanduz95@gmail.com"><i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <a className='contact-a' href="https://www.linkedin.com/in/jhon-anduz-buriel-b96109280" target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </article>
        </footer>
      </div>
    </div>

  )
}
