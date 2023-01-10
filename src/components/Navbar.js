import React from "react";
import {RxTextAlignJustify} from 'react-icons/rx'
import seyi from '../image/seyi.jpeg'
import {Link} from 'react-router-dom'



const Navbar = () => {


    const [show,setShow] = React.useState(false);

    return <>
        < div className="container-div">
              <div className="header">
                <h3>portfolio<span className="site-head">site</span></h3>
              </div>
              <div className="icon-divs">
                <button className='icon' onClick={()=> setShow(!show)}><RxTextAlignJustify/></button>
              </div>
             {show ?  <div className="nav-link">
              <ul>
                    <li>
                       
                           <a>About Me</a>
                      
                    </li>
                    <li>
                     
                      <a>Projects</a>
                     
                    </li>
                    <li>
                        
                        <a>Skills</a>
                        
                    </li>
                    <li>
                      
                          <a>Contact Me</a>
                      
                    </li>
                </ul>
              </div> : null}
        </div>
    </>
}


const Content  = () => {
    return <>
        <div className="content-div">
            <div>
            <h1>Hello,I'm <span className="yo">ADEOTI OLUWASEYI</span></h1>
    <p className="content-p">I am Oluwaseyi(Front-end|Software engineer)<br/>
     i build nice,apt and suitable interface for the web<br/>
     I am proficient and comfortable using my technologies for a better UI. </p>
     </div>
     <div>
     <img src={seyi} alt='img' className="img" />
     <a href="tel:+2349079036407">
     <button className="button-hire">Hire Me</button>
     </a>
     </div>
        </div>
    
    </>
}




export default Navbar;
export {Content}