import React from 'react';
import Logo from './../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer sm:footer-horizontal  text-base-content p-10 w-10/12 mx-auto">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
 </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex items-center gap-1.5"><FaLinkedin></FaLinkedin>Linkedin</a>
    <a className="link link-hover flex items-center gap-1.5"><FaFacebook></FaFacebook> Facebook</a>
    <a className="link link-hover flex items-center gap-1.5"><FaInstagram></FaInstagram> Instagram</a>
    <a className="link link-hover flex items-center gap-1.5"><FaGithub></FaGithub>Github</a>
 </nav>
                
</footer>
<footer className="bg-base-200  border-base-300 border-t px-10 py-4 ">
 <p className='text-xs text-center text-gray-700'>Copyright © All right reserved by MJH.IO</p>
  
</footer>
        </div>
    );
};

export default Footer;
