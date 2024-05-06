import React from 'react'
import { useUserSpanish } from '../Userprovider'

export const Projects = () => {
    const Spanish = useUserSpanish()
    return (
        <div className='projects' id='project'>
            <section className='project-section' >
                <h2 className='h2 center'>{Spanish ? "Proyectos" : "Projects"}</h2>
                <article className='project-column'>
                    <Calculator />
                </article>
            </section>
        </div>
    )
}

export const Calculator = () => {
    const Spanish = useUserSpanish()
    return (
        <article className='project'>
            <h3>{Spanish ? "Calculadora" : "Calculator"}</h3>
            <a href='https://danuz05.github.io/calculadora2.github.io/' target='_blank'>
                <img alt='imagen de una calculadora gris con un fondo azul' src='https://github.com/Danuz05/jhon-anduz.github.io/blob/main/calculadora-2.png?raw=true'></img>
            </a>
            <p className='margin-project'>{Spanish ? `Calculadora que permite sumar, restar, dividir y multiplicar,
                         inspirada en la calculadora de un videojuego llamado Dave the Diver.` : `Calculator that allows you to add,
                          subtract, divide and multiply, inspired by the calculator in a video game called Dave the Diver.`}
            </p>
            <section className='skills-flex'>
                <li className=' buttons-descripcion'>HTML </li>
                <li className=' buttons-descripcion'>CSS </li>
                <li className=' buttons-descripcion'>javaScript </li>
            </section>
        </article>
    )
}
