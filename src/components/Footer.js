import React from "react";
import {AiOutlineCopyright} from 'react-icons/ai'


const Footer = ()=> {

    return <>
        <div className="footer-div">
            <p><AiOutlineCopyright/>Copyright by Oluwaseyi {new Date().getFullYear()}</p>
        </div>
    </>
}

export default Footer;