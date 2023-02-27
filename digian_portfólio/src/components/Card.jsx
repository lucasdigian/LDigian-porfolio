import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaPython, FaNodeJs, FaFigma } from 'react-icons/fa'
import {SiWebflow, SiJquery} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import '../styles/components/tech.sass'

const Cards = [

    { title: 'HTML5', content: 'Tenho conhecimento profissional em html5', icon: <FaHtml5 /> },
    { title: 'CSS3', content: 'Tenho conhecimento profissional em css3', icon: <FaCss3 /> },
    { title: 'JavaScript', content: 'Tenho conhecimento profissional em javascript', icon: <DiJavascript1 /> },
    { title: 'REACT', content: 'Venho estudando ReactJs a meio ano e me apaixonei por essa linguagem', icon: <FaReact /> },
    { title: 'Python', content: 'Python é a linguagem que mais amo, pois foi com ela que eu programei pela primeira vez', icon: <FaPython /> },
    { title: 'NodeJs', content: 'Possuo um conhecimento nivel baixo/médio em NodeJs', icon: <FaNodeJs /> },
    { title: 'Figma', content: 'Possuo um conhecimento profissional em Figma', icon: <FaFigma /> },
    { title: 'Webflow', content: 'Utilizo webflow a 2 anos e trabalhei 1.6 anos com o mesmo', icon: <SiWebflow /> },
    { title: 'Jquery', content: 'Utilizo jquery a 2 anos e trabalhei 1.6 anos com o mesmo', icon: <SiJquery /> }

]

function Card() {
    return <div id='tech'>
        {Cards.map((conten) => (
            <div className='card-information-tech'>
                    {conten.icon}
                <div>
                    <h3>{conten.title}</h3>
                    <span>{conten.content}</span>
                </div>
            </div>
        ))}
    </div>
}


export default Card