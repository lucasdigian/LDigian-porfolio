import React from 'react'
import '../styles/components/tech.sass'

const Cards = [

    {img:'../img/yowzaa-3.png', link:'https://www.fluencytv.com/fluency-academy-v2'},
]

function Card_Project() {
    return <div id='cardProject'>
        {Cards.map((conten) => (
            <a href={conten.link} className='card-information-tech'>
                <img src={conten.img}/>
            </a>
        ))}
    </div>
}

export default Card_Project