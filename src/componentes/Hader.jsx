import React, { useState } from 'react'
import { useUserSpanish, useUserSpanishTogle } from '../Userprovider'

export const Hader = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const Spanish = useUserSpanish();
  const handleSpanish = useUserSpanishTogle()

  return (
    <header className="header">
      <nav className='navbar'>
        <ul className={show ? "visible" : ""}>
          <li onClick={handleShow} className='listas'><i class="fa-regular fa-x"></i></li>
          <li className='listas home'><a href='#about-me'>{Spanish ? "Sobre mi" : "About me"}</a></li>
          <li className='listas'><a href='#project'>{Spanish ? "Proyectos" : "Projects"}</a></li>
          <li className='listas'><a href='#certificados'>{Spanish ? "Certificaciones" : "Certifications"}</a></li>
        </ul>
        <button onClick={handleShow} className='btn-header'><i class="fa-solid fa-bars"></i></button>
        <div className='header-div-container'>
          <button onClick={handleSpanish} className='en'>{Spanish ? "EN" : "ES"}</button>
        </div>
      </nav>
    </header>
  )
}