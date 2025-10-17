import React from 'react';
import Logo from './../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-gradient-to-br from-[#9f62f2] to-[#632ee3]  border-t-1 border-t-gray-300'>
            <footer className="footer sm:footer-horizontal  text-white py-20 w-10/12 mx-auto">
  <nav>
    <h6 className="text-lg font-semibold text-white ">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-lg font-semibold text-white">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-lg font-semibold text-white">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
 </nav>
  <nav>
    <h6 className="text-lg font-semibold text-white">Social Links</h6>
    <a className="link link-hover flex items-center gap-1.5"><FaLinkedin></FaLinkedin>Linkedin</a>
    <a className="link link-hover flex items-center gap-1.5"><FaFacebook></FaFacebook> Facebook</a>
    <a className="link link-hover flex items-center gap-1.5"><FaInstagram></FaInstagram> Instagram</a>
    <a className="link link-hover flex items-center gap-1.5"><FaGithub></FaGithub>Github</a>
 </nav>
                
</footer>
<footer className=" px-10 pb-7">
 <p className='text-xs text-center text-gray-200'>Copyright © All right reserved by MJH.IO</p>
  
</footer>
        </div>
    );
};

export default Footer;
