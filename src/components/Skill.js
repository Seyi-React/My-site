import React from "react";
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'
import {BiTimeFive} from 'react-icons/bi'
import {FaTeamspeak} from 'react-icons/fa'
import {MdOutlineSyncProblem} from 'react-icons/md'
import {SiJavascript} from 'react-icons/si'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'
import {BsArrowDownCircleFill} from 'react-icons/bs'

const Skill = ()=> {

    const [add,setAdd] = React.useState(false);


    return <>
        <div>
           <div className="skill-div">
             <h4>Skills</h4>
           </div>
           <div className="skill-icon-div">
            <p><AiFillHtml5/> HTML</p>
            <p><IoLogoCss3/> CSS</p>
            <p><GrReactjs/> REACT.JS</p>
            <p><SiJavascript/> JS</p>
            <p><BiTimeFive/> TIME MANAGEMENT</p>
            <p><FaTeamspeak/> GOOD COMMUNICATION SKILL</p>
            <p><MdOutlineSyncProblem/> PROBLEM SOLVER</p>
            <button className="add-btn" onClick={()=> setAdd(!add)}>{add ?  <AiFillMinusCircle/> : < AiOutlinePlusCircle/> }</button>
            {add ?  <p>DESIGN THINKING,CSS GRID,FLEXBOX,MEDIA QUERY,BOOTSRAP,GIT...</p> : null}
            <p className='second-arrow'><BsArrowDownCircleFill/></p>
           </div>

        </div>
    </>
}

export default Skill;