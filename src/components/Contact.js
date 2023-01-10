import React from "react";
import {ImTwitter} from 'react-icons/im'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


const Contact = () => {

    return <>
       <div>
          <div className="contact">
            <h4>Get in touch</h4>
          </div>
          <div>
           <p className='p-contact'> I can be contacted via </p>
           <div className="icon-div">
           <p> 
              <ImTwitter/> 
              @ilovreactjs  
            </p>
            <p>
               <AiFillLinkedin/>
               Oluwaseyi Adeoti
            </p>
            <p>
             <AiOutlineMail/>
             oluwaseyiadeoti825@gmail.com
            </p>
           </div>
             
          </div>

       </div>
    
    </>
}

export default Contact;