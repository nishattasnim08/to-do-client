import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import {FiFacebook, FiLinkedin, FiGithub, FiUser} from 'react-icons/fi';


const Footer = () => {
    return (
        <footer className='bg-black py-12 lg:px-14 mt-20'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className="flex space-x-6 items-center justify-center">
                        <a href="https://www.facebook.com/nishattasnim24" target='_blank'>
                            <FiFacebook/>
                        </a>
                        <a href="https://www.linkedin.com/in/nishattasnim24/" target='_blank'>
                            <FiLinkedin/>
                        </a>
                        <a href="https://github.com/nishattasnim08" target='_blank'>
                            <FiGithub/>
                        </a>
                        <a href="https://nishat-tasnim-portfolio.web.app/" target='_blank'>
                            <FiUser/>
                        </a>
                    </div>
                    <div>
                        <p className='logo'>Nishat Tasnim</p>
                    </div>

                    <div>
                        <p>Copyright 2022 &copy; Nishat Tasnim. All right reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;