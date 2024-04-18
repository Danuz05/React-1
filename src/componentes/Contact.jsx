import React from 'react'
import { useUserSpanish } from '../Userprovider'

export const Contact = () => {
  const Spanish = useUserSpanish()
  return (
    <div className='contact-container' >
      <div className='contact'>
        <footer className='footer'>
          <h2 className='h2 center'>{Spanish ? "Contáctame" : "Contact me"}</h2>
          <p>{Spanish ? "Teléfono" : "Phone number"}: +58-412-1818892</p>
          <article className='contact-article'>
            <a className='contact-a hover-contact' href="mailto:jhonanduz95@gmail.com"><i class="fa-solid fa-envelope"></i>
            </a>
            <a className='contact-a' href="https://www.linkedin.com/in/jhon-anduz-buriel-b96109280" target='_blank'>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </article>
        </footer>
      </div>
    </div>

  )
}
