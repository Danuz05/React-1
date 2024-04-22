import { useUserSpanish } from '../Userprovider'
import React from 'react'
import { BiLogoTypescript } from "react-icons/bi";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiAstro } from "react-icons/si";

export const Main = () => {
    return (
        <div className='column'>
            <AboutMe />
            <Skills />
        </div>
    )
}

export const AboutMe = () => {
    const Spanish = useUserSpanish()
    return (
        <section className='me' id='about-me'>
            <h2 className='h2'>{Spanish ? "Sobre mi" : "About me"}</h2>
            <p>{Spanish ? `Mi nombre es Jhon Anduz, tengo 20 años, soy de Venezuela, mi objetivo es conseguir mi primer
             trabajo como desarrollador web front end` :
                `My name is Jhon Anduz, I am 20 years old, I am from Venezuela, my goal is to get my first job 
                as a front end web developer.`}
            </p>
            <article className='buttons'>
                <a className='buttons-social' href='https://github.com/Danuz05' target='_blank'>github
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className='buttons-social' href='https://www.linkedin.com/in/jhon-anduz-buriel-b96109280' target='_blank'>LinkedIn
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </article>
        </section>
    )
}

export const Skills = () => {
    return (
        <section className='skills'>
            <h2 className='h2 h2-skills'>Skills</h2>
            <section className='skills-section'>
                <DiHtml5 className='html5' />
                <FaCss3Alt className='css3' />
                <RiJavascriptFill className='js' />
                <FaSass className='sass' />
                <BiLogoTypescript className='type' />
                <FaReact className='react' />
                <SiAstro className='astro' />
            </section>
        </section>
    )
}