import React, { useState } from 'react'
import './app.css'
import { Certification } from './componentes/Certification'
import { Contact } from './componentes/Contact'
import { Hader } from './componentes/Hader'
import { Main } from './componentes/Main'
import { Projects } from './componentes/Projects'
import { Userprovider } from './Userprovider'

function App() {

  return (
    <Userprovider>
      <main className="main">
        <Hader />
        <Main />
        <Projects />
        <Certification />
        <Contact />
      </main>
    </Userprovider>
  )
}
export default App
