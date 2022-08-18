import Grid from '@material-ui/core'
import Paper  from '@material-ui/core'
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';

import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiOutlineGlobal , AiFillFacebook ,AiFillLinkedin ,AiOutlineInstagram ,AiOutlineTwitter } from "react-icons/ai";


import image from './profileee.jpg'
import icon from './photo-1511367461989-f85a21fda167.jpg'

import React from 'react'
import Login from './Login'

function Users() {
  return (
  // <Grid>
  //   <Paper className='parent'>
  <>
    <div className='parent'> 
        <div className="left-column">
                <img src={image} alt="not found" srcset="" />
                
                <h3>Asnatha Sionene</h3>
                <span className="hour">
                    @20/Hour
                </span>

        </div>

        <div className="right-column">

        <div className="right-top">
          <div className="top-icons-left">
          <a href='#' style = {{marginLeft: '11px'}}>< GrMail  style = {{    height: '26px',
    width: '39px' ,marginRight: '13px'} }/> abdullah@gmail.com </a>
           <a href='#'> <AiOutlineGlobal className='icons'  /> www.evolverstech.com </a>
           <a href='#'><FaPhoneAlt className='icons' /> +92 334 8032660 </a>

          </div>
          <div className="top-icons-right">

           <a href='#' ><AiFillFacebook className='icons' /> </a>
           <a href='#'><AiFillLinkedin className='icons' />  </a>
           <a href='#'><AiOutlineInstagram className='icons' /> </a>
          <a href='#'><AiOutlineTwitter className='icons' />  </a>

          </div>

                
            </div>

            <div className="mid-text">

               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla soluta veniam id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nemo, consectetur nisi beatae laudantium eos saepe placeat reiciloendis error sed repellendus esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ad porro! Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia natus repellendus veniam facilis magnam corporis dolore odit tempore veritatis molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum corrupti velit, qui ab ut.

               </p>
              
             </div>


            <div className="bottom buttons">

                {/* LEFT BUTTONS */}
                <div className="left-buttons">
                <button type="submit" style = {{marginLeft: '11px'}}>React</button>
                <button type="submit">Javacript</button>
                <button type="submit">Native</button>
                <button type="submit">Output</button>

                </div>

                {/* RIGHT BUTTONS */}

                <div className="right-buttons ">
                    <button type="submit" className='right' style={{backgroundColor: '#0085DF' , color: 'white' , borderColor: '#0085DF'}} >Hire</button>
                    <button type="submit" className='right'>Remove</button>
                </div>


            </div>


        </div>

        </div>

          {/* SECOND  */}
   {/* <Users /> */}
     </>
     
  )
}

export default Users
