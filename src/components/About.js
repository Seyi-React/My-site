import react from 'react';
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {MdEmail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {BsArrowDownCircleFill} from 'react-icons/bs'



const About = ()=> {

    return <>

     <div className='about'> 
        <h4>About Me</h4>
        <p>Name <MdDriveFileRenameOutline/>: Adeoti Oluwaseyi</p>
        <p>Profile <CgProfile/>: Software Engineer</p>
        <p>Email <MdEmail/>: oluwaseyiadeoti825@gmail.com</p>
        <p>Phone<FiPhoneCall/>:+2349079036407</p>
        <br/>
        <span>I'm Oluwaseyi by name,I am a Software Engineer based in Lagos,Nigeria.<br/>
          I solely build nice UI for web apps,landing pages and many more<br/>
          I have acquired  high level competent courses from Udemy and have practiced them to the upmost level<br/>
          When I don't code? I sort for ways to be a better developer and a good problem solver<br/>
          others time I play Intelligence Quotient games such as Chess games and Scrabble games.
        </span>
        <p className='arrow'><BsArrowDownCircleFill/></p>
     </div>
    </>
}


export default About;