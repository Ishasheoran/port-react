import { useState } from 'react'
import Contact from './Contact.jsx'
import Skill from './Skills.jsx'
import About from './About.jsx'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import './App.css'
import Data from './1.js'
function App() {
  const [count, setCount] = useState(0)
  return (<>
     <div className="header" id='Home'>
      <li><a href="#Home">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="#Proj">Projects</a></li>
      <li><a href="#Cat">Contact</a></li>
    <div className="toggle">  <PiDotsSixVerticalBold /></div>
     </div>+
      <div className="main"><p>
      <h3> Hello <br /></h3>
      <h1> I'm Isha <br />
      Web Developer <br /></h1>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci.<br />
       <button>Hire Me</button>
       <div className="icons">
       <a href=""><FaGithub /></a>
       <a href="ishasheoran46@gmaill.com"><TfiEmail /></a>
       <a href="https://www.linkedin.com/in/isha-sheoran-8a391026b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
       <a href="https://api.whatsapp.com/send?phone=8987657654"><FaWhatsapp /></a>
       </div>
      </p>
      </div>
      <Skill />
      <div className='projects' id='Proj'>
        <div className="head">My Projects</div>
        <div className="card">
        {  Data.map(({id,imgSrc,description,name,explain}) =>{
    return(
        <div key={id} className="single">
    <img src={imgSrc} alt="fuck"/>
    <a href={description}>{name}</a> 
    <p>{explain}</p>
        </div>)})
        }
        </div>
      </div>
      <Contact />
    </>)
}
export default App
