import React from "react";
import {MdFastfood} from 'react-icons/md'
import {AiOutlineBank} from 'react-icons/ai'
import foodCap from '../image/restaurant.png'
import bankify from '../image/bankify.png'
import Clinic from '../image/clinic.png'
import form from '../image/login.png'
import kwaride from '../image/kwaride.png'
import beytify from '../image/beytify.png'
import {BsArrowDownCircleFill} from 'react-icons/bs'




const Project = () => {

    return <>
       
       <div>
        <div className="project-div">
            <h4>Projects</h4>
        </div>
        <div className="phew">
            <section className="one">
                <dt className="project-main">Foodycap</dt>
                <dd className="project-description">Foodycap is a fictional restaurant landing page <br/>
                 built to help business owners see how building a brand site reduce stress of orders</dd>
                 <img src={foodCap} alt='img' className="foody-cap"/>
                 
            </section>
            <section className="two">
                <dt className="project-main">Bankify</dt>
                <dd className="project-description">Bankify is landing page which depicts about saves and investing funds<br/></dd>
                 <img src={bankify} alt='img' className="foody-cap"/>
                
            </section>
            <section className="three">
                <dt className="project-main">Kids & Teens</dt>
                <dd className="project-description">Kids and Teens is a page for a body lotion</dd>
                 <img src={Clinic} alt='img' className="foody-cap"/>

            </section>
            <section className="four">
                <dt className="project-main">Form UI</dt>
                <dd className="project-description">A login UI </dd>
                 <img src={form} alt='img' className="foody-cap"/>
            </section>

           <section className="four">
                <dt className="project-main">Beytify</dt>
                <dd className="project-description">This was inspired by real world challange <br/>
                Beytify is a website i designed to give solutions to stangers in an unknown areas<br/>
                you can thereby go to site to query for the nearest<br/>
                suites to pass the night 
                </dd>
                 <img src={beytify} alt='img' className="foody-cap"/>
                 <a href="http://beytify.netlify.app" className="view">View Me</a>
                 <p className="notice">P.S only desktop view(Mobile under construction)</p>
            </section>
            <section className="four">
                <dt className="project-main">Kwaride</dt>
                <dd className="project-description">Its a web app designed to book for a ride<br/>
                to your desired destinations </dd>
                 <img src={kwaride} alt='img' className="foody-cap"/>
                 <a href="http://kwaride.netlify.app" className="view">View Me</a>
                 <p className="notice">P.S only desktop view(Mobile under construction)</p>
            </section>
            <p className='second-arrow'><BsArrowDownCircleFill/></p>
        </div>
       </div>

    </>
}

export default Project;