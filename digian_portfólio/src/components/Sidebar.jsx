import Avatar from '../img/eu5.jpg'
import SocialNetworks from './SocialNetworks'
import Information from './Information'

import '../styles/components/sidebar.sass'





const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Lucas Digian"/>
    <p className='title'>Web Developer</p>

    <SocialNetworks />

    <Information />

    <a href="" className='btn'>Download Curriculo</a>
  </aside>
}

export default Sidebar