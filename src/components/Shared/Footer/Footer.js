import React from 'react';
import bkash from '../../../assets/images/bkash.png';
import nagad from '../../../assets/images/nagad.jpg';
import visaCard from '../../../assets/images/visaCard.jpg';
import masterCard from '../../../assets/images/masterCard.png';
import fastGrocerLogo from '../../../assets/images/fastGrocerLogo.jpg';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-800 text-white">
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Order Track</a>
                    <a className="link link-hover">Find My Product</a>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Guide</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                   <Link to="/aboutUs"><a className="link link-hover">About us</a></Link> 
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">We Accept</span>
                    <a className="link link-hover"><img src={bkash} alt="baksh"></img></a>
                    <a className="link link-hover"><img src={nagad} alt="baksh"></img></a>
                    <a className="link link-hover"><img src={visaCard} alt="baksh"></img></a>
                    <a className="link link-hover"><img src={masterCard} alt="baksh"></img></a>

                </div>
            </footer>

            {/*section for email and hotline number starts*/}
            <footer className="footer px-10 py-4 bg-slate-900 text-white border-base-300 flex flex-col md:flex-row justify-between">
                <div className="items-center grid-flow-row justify-self-center md:grid-flow-col">
                    <img style={{ width: '100px', height: '40px' }} src={logo} alt='logo'></img>
                    <p>Fast Grocer<br />One of the fastests and trusted<br /> service for your day to day life.</p>
                </div>
                <div className='items-center grid-flow-row'>
                    <div>
                        <FaEnvelope className='inline mr-2'></FaEnvelope><span className='inline mx-0'>info.fastgrocer@gmail.com</span>
                    </div>
                    <div>
                        <FaPhoneAlt className='inline mr-2'></FaPhoneAlt><span className='inline mx-0'>096239</span>
                    </div>
                </div>
                <div className="md:place-self-center justify-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
            <hr/>
             <div style={{backgroundColor:"#0F172A",color:"yellow",textAlign:"center",padding:"5px"}}>
               <p>Fast Grocer ©2023 || Design And Developed By H.M Merajul Hasan</p>
             </div>
        </div>
    );
};

export default Footer;