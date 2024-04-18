import { useUserSpanish } from '../Userprovider'
import React, { useState } from 'react'

export const Main = () => {

    const Spanish = useUserSpanish()
    return (
        <div className='column'>
            <section className='me' id='about-me'>
                <h2 className='h2'>{Spanish ? "Sobre mi" : "About me"}</h2>

                <p>{Spanish ? `Mi nombre es Jhon Anduz, tengo 20 años, soy de Venezuela, mi objetivo es conseguir mi primer trabajo como desarrollador web front end` :
                    `My name is Jhon Anduz, I am 20 years old, I am from Venezuela, my goal is to get my first job as a front end web developer.`}
                </p>

                <article className='buttons'>
                    <a className='buttons-social' href='#'>github <i class="fa-brands fa-github"></i></a>
                    <a className='buttons-social' href='https://www.linkedin.com/in/jhon-anduz-buriel-b96109280' target='_blank'>LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                </article>
            </section>

            <section className='skills'>
                <h2 className='h2 h2-skills'>Skills</h2>
                <section className='skills-section'>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-js"></i>
                    <i class="fa-brands fa-sass"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>
                    <i class="fa-brands fa-react"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-astro"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39" /><path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0" /></svg>
                </section>
            </section>
        </div>
    )
}
