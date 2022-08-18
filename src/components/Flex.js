import React from 'react'

function Flex() {
  return (
   <>
   <main className='main'>
    main text
   </main>

   <footer className='footer'>
        <div className="left-area">
            <h2>Contact</h2>
            <ul className="box">
                <li>123, Awan Town Lahore</li>
                <li>PF12 M2DR, LONDON</li>
                <li>LAHORE, PAKISTAN</li>
                <li>WWW.evolverstech.com</li>
                <li>00 123 345 666</li>
            </ul>
        </div>

    <ul className="right-area">
        <li className="link-area">
            <h2 className="useful-area">Useful Link</h2>
            <ul className="box h-box">
                <li><a href = "#">Home</a></li>
                <li><a href = "#">Blog</a></li>
                <li><a href = "#">Pricing</a></li>
                <li><a href = "#">Tickets</a></li>
                <li><a href = "#">Policy</a></li>
                <li><a href = "#">Terms</a></li>
            </ul>
        </li>

        <li>
            <h2>Recent Posts</h2>

            <ul className="box">
                <li><a href= '#'> Lorem ipsum dolor sit amet. </a> </li>
                <li><a href= '#'> Lorem ipsum dolor sit amet. </a> </li>
                <li><a href= '#'> Lorem ipsum dolor sit amet. </a> </li>
                <li><a href= '#'> Lorem ipsum dolor sit amet. </a> </li>
                <li><a href= '#'> Lorem ipsum dolor sit amet. </a> </li>
            </ul>

        </li>

        <li>
            <h2>Newsletter</h2>
            <form action="" className="form-search">
                <div className="search-box">
                    <input type="text" />
                    <button className="btn" type='submit'>Search</button>
                </div>
            </form>

            <div className="socials">
                <a href='#'><i className='fa fa-facebook' ></i> </a>
                <a href='#'><i className='fa fa-twitter' ></i> </a>
                <a href='#'><i className='fa fa-dribble' ></i> </a>
                <a href='#'><i className='fa fa-twitter' ></i> </a>
                <a href='#'><i className='fa fa-youtube' ></i> </a>
                <a href='#'><i className='fa fa-tumblr' ></i> </a>


                
            </div>
        </li>
    </ul>

        <div className="footer-bottom">
            <img src="logo.png" alt="" srcset="" />
            <p>All rights reserved by @abdullaFaran 2022</p>
        </div>


   </footer>
   </>
  )
}

export default Flex
