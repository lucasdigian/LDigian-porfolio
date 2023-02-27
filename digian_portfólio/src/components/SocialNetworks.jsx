import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

import '../styles/components/socialnetworks.sass'


const socialNetworks = [

    {name:'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ldigian/'},
    {name:'github',icon: <FaGithub />, link: 'https://github.com/lucasdigian'},
    {name:'wpp',icon: <FaWhatsapp />, link: 'https://wa.me/+5598985500094?text=Olá%20vim%20através%20do%20seu%20portifólio.%20Gostaria%20de%20conversar%20com%20você%20sobre%20um%20job%20'},

];

function SocialNetworks() {
  return <section id="social-networks">

    {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target='_blank'>
          {network.icon}
        </a>
    ))}

  </section>
}

export default SocialNetworks