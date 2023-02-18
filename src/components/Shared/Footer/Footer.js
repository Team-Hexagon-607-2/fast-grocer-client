import React from 'react';
import bkash from '../../../assets/images/bkash.png';
import nagad from '../../../assets/images/nagad.jpg';
import visaCard from '../../../assets/images/visaCard.jpg';
import masterCard from '../../../assets/images/masterCard.png';

import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-800 text-white mx-auto">
                <div>
                    <span className="footer-title">Support</span>
                    
                    <a href='/guide' className="link link-hover">How to Place An Order</a>
                    <a href='/faq' className="link link-hover">FAQ</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/aboutUs' className="link link-hover">About us</a>
                    <a href='/contact-us' className="link link-hover">Contact</a>
                  
                 
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                 
                    <a className="link link-hover" href='/privacy-policy'>Privacy policy</a>
                    <a className="link link-hover" href='/cookie-policy'>Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">We Accept</span>
                    <div className='flex flex-row gap-2 justify-between'>
                    <img src={bkash} alt="baksh"></img>
                    <img src={nagad} alt="nagad"></img>
                    <img src={visaCard} alt="visa"></img>
                    <img src={masterCard} alt="master"></img>
                    </div>

                </div>
            </footer>

            {/*section for email and hotline number starts*/}
            <footer className="footer px-10 py-4 bg-slate-900 text-white border-base-300 flex flex-col md:flex-row justify-between">
                <div className="items-center grid-flow-row justify-self-center md:grid-flow-col">
                    <Link to='/'><img style={{ width: '100px', height: '40px' }} src={logo} alt='logo'></img></Link>
                    <p>Fast Grocer<br />One of the fastests and trusted<br /> service for your day to day life.</p>
                </div>
                <div className='items-center grid-flow-row'>
                    <div>
                        <FaEnvelope className='inline mr-2'></FaEnvelope><span className='inline mx-0'>info.fastgrocer@gmail.com</span>
                    </div>
                    <div>
                        <FaPhoneAlt className='inline mr-2'></FaPhoneAlt><span className='inline mx-0'>+880 1559 641874</span>
                    </div>
                </div>
                <div></div>
            </footer>
           
        </div>
    );
};

export default Footer;