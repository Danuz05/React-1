import React from 'react'
import freecodecamp from "../imagenes/Captura de pantalla (37).png"
import egg from "../imagenes/Programación Web desde Cero. .webp"
import { useUserSpanish } from '../Userprovider'

export const Certification = () => {
    const Spanish = useUserSpanish()
    return (
        <div className='certification' id='certificados'>
            <div>
                <h2 className='h2 center'>{Spanish ? "Certificaciones" : "Certifications"}</h2>
                <section className='certification-section'>
                    <article className='certification-article'>
                        <a href='https://www.freecodecamp.org/espanol/certification/jhon-anduz/responsive-web-design' target='_blank'>
                            <img className='certification-img' alt='Responsive wev design freeCodeCamp camp 300 horas' src={freecodecamp} ></img></a>
                    </article>
                    <article className='certification-article'>
                        <a href='https://production-egg-certificates.s3.amazonaws.com/JhonAnduz/ProgramacionWebdesdeCero/thumbnail_9228c779b2634d47cad120d0e250b8ace3d9fd5225551a81f01c75beef01176f.jpeg' target='_blank'>
                            <img className='certification-img' src={egg} alt="curso de egg 32 horas" ></img></a>
                    </article>
                </section>
            </div>
        </div>
    )
}
