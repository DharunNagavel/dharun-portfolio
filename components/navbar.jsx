"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiSoapExperiment } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { GrAchievement } from 'react-icons/gr';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        if (menuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    return (
        <>
        <div className='flex justify-end sticky top-3 z-50 pointer-events-auto'>
            <div className={`flex justify-center w-15 items-center p-4  mx-5 z-30 rounded-xl ${scrolled ? 'transition-transform text-black bg-yellow-300 mt-3' : ''}`}>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-3xl cursor-none hover:scale-110 transition-transform"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>
            </div>
            <div className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-black text-white border-s-3 border-s-yellow-300 rounded-s-4xl shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button 
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-5 right-5 text-3xl cursor-none hover:scale-110 transition-transform"
                >
                    ✖
                </button>
                
                <div className='flex flex-col gap-6 p-8 mt-20'>
                    <div className={`p-3  rounded-xl transition-transform hover:cursor-none hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#one" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <FaHome className='text-3xl me-4' />
                                    <div className='text-xl font-medium'>Home</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    
                    <div className={`p-3  rounded-xl transition-transform hover:cursor-none hover:bg-black hover:text-yellow-300 ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#ABOUT" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-4">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <div className='text-xl font-medium'>About</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    
                    <div className={`p-3  rounded-xl hover:cursor-none transition-transform hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#SKILL" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-4">
                                        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/>
                                        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>
                                    </svg>
                                    <div className='text-xl font-medium'>Tech</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    
                    <div className={`p-3  rounded-xl hover:cursor-none transition-transform hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#EXPERIENCE" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <GiSoapExperiment className='text-3xl me-4' />
                                    <div className='text-xl font-medium'>Experience</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    
                    <div className={`p-3  rounded-xl hover:cursor-none transition-transform hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#PROJECT" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <MdOutlineWork className='text-3xl me-4' />
                                    <div className='text-xl font-medium'>Project</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    
                    <div className={`p-3  rounded-xl hover:cursor-none transition-transform hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#ACHIVEMENT" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <GrAchievement className='text-3xl me-4' />
                                    <div className='text-xl font-medium'>Achievement</div>
                                </div>
                            </Link>
                        </h1>
                    </div>

                    <div className={`p-3  rounded-xl hover:cursor-none transition-transform hover:bg-black hover:text-yellow-300  ${scrolled ? 'hover:scale-105' : ''}`}>
                        <h1 className='text-[20px]'>
                            <Link href="#CONTACT" className='hover:cursor-none transition-transform' onClick={() => setMenuOpen(false)}>
                                <div className='flex items-center'>
                                    <FiPhoneOutgoing className='text-3xl me-4' />
                                    <div className='text-xl font-medium'>Contact</div>
                                </div>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar;