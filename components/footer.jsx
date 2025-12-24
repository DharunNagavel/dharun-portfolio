import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <hr className='my-5'/>
        <div className='mx-10 flex flex-wrap justify-between'>
            <div>
              <div className='text-4xl text-yellow-300'>
                Dharun Nagavel
              </div>
              <div className='w-120 my-4 text-justify'>
                I'm a passionate Full-Stack Developer who loves turning ideas into clean, scalable, and user-friendly applications. From crafting smooth front-end interfaces to building robust back-end systems, I bridge design and logic to create impactful digital experiences. Beyond the screen, I'm also a professional badminton player, bringing the same discipline, strategy, and focus from the court into every line of code I write.
              </div>
            </div>
            <div>
              <div className='text-4xl text-yellow-300'>
                Quick Links
              </div>
              <div className='my-4'>
                <ul>
                  <li className='hover:cursor-none transition-transform hover:text-yellow-300'><Link className='hover:cursor-none' href="/">Home</Link></li>
                  <li className='hover:text-yellow-300 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#">About</Link></li>
                  <li className='hover:text-yellow-300 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#">Skills</Link></li>
                  <li className='hover:text-yellow-300 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#">Experience</Link></li>
                  <li className='hover:text-yellow-300 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#">Project</Link></li>
                  <li className='hover:text-yellow-300 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <div className='text-4xl text-yellow-300'>
                Contact
              </div>
              <div>
                <ul className='flex justify-evenly mt-5'>
                  <li className='hover:scale-120 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#"><FaInstagram className='text-pink-500 text-3xl' /></Link></li>
                  <li className='hover:scale-120 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#"><FaLinkedin className='text-blue-500 text-3xl' /></Link></li>
                  <li className='hover:scale-120 transition-transform hover:cursor-none'><Link className='hover:cursor-none' href="#"><FaWhatsapp className='text-green-500 text-3xl'/></Link></li>
                </ul>
              </div>
            </div>
        </div>
        <hr className='my-5'/>
        <div className='flex justify-center my-5'>
          <div>© 2025 Designed & Developed by Dharun Nagavel.</div>
        </div>
    </div>
  )
}
