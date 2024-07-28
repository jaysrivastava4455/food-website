import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">

                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam libero debitis dolorem cupiditate vitae magnam alias sequi commodi deserunt, in corporis molestiae vel sed cumque dignissimos aspernatur ut laudantium?</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home </li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>privacy policy</li>

                    </ul>



                </div>
                <div className="footer-content-right">
                    <h1>GET IN TOUCH</h1>
                    <ul>
                        <li>+6392902800</li>
                        <li>jayshanakar224@gmail.com</li>
                    </ul>

                </div>



            </div>
            <hr />
            <p className="footer-copyright">copyright 2024 @ tomato.com-all Right Reserved.</p>

        </div>
    )
}

export default Footer