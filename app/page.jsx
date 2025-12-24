'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiPhpLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiPostman } from "react-icons/si"; 
import { SlCalender } from "react-icons/sl";
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoRocketSharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiHttpie } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const page = () => 
{  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // HERO: simple entrance (clear inline props after animation)
    const heroTl = gsap.timeline();
    heroTl.from('#one .border-yellow-100', { y: 10, autoAlpha: 0, duration: 0.9, ease: 'power2.out', clearProps: 'all' })
      .from('#one h1', { y: 16, autoAlpha: 0, duration: 0.8, stagger: 0.12, clearProps: 'all' }, '-=0.6');

    // SKILL: stagger reveal for skill cards
    gsap.from('.skill-card', {
      y: 20,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: { trigger: '#SKILL', start: 'top 60%', toggleActions: 'play none none reverse' },
      clearProps: 'all'
    });

    // Sections: simple reveal on scroll with clearProps
    gsap.utils.toArray('section').forEach((sec) => {
      if (sec.id === 'one') return; // skip hero
      gsap.from(sec, {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: sec, start: 'top 50%', toggleActions: 'play none none reverse' },
        clearProps: 'all'
      });
    });

    // ensure ScrollTrigger calculates after load (safe refresh)
    const safeRefresh = () => {
      try { ScrollTrigger.refresh(); } catch (e) { /* ignore */ }
    };
    window.addEventListener('load', safeRefresh);
    const t = setTimeout(safeRefresh, 600);

    // cleanup
    return () => {
      window.removeEventListener('load', safeRefresh);
      clearTimeout(t);
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf('*');
    };
  }, []);
  return (<>
        <section id='one' className='-mt-20 mb-20'>
        <div className='flex flex-wrap flex-col items-center mt-8'>
          <div>
            <Image className=' border-yellow-100 border-2 rounded-full p-3' src="/profile.png" alt='image' width={250} height={100}></Image>
          </div>
          <div className='my-5'>
            <h1 className=' text-4xl text-yellow-300'>Hi, I'm Dharun Nagavel</h1>
          </div>
          <div className='flex flex-wrap justify-center'>
            <h1 className=' w-[55%] leading-10 text-2xl text-justify'>I'm a passionate Full-Stack Developer who loves turning ideas into clean, scalable, and user-friendly applications. From crafting smooth front-end interfaces to building robust back-end systems, I bridge design and logic to create impactful digital experiences. Beyond the screen, I'm also a professional badminton player, bringing the same discipline, strategy, and focus from the court into every line of code I write.</h1>
          </div>
          <div className='my-8'>
            <button className='mx-5 cursor-none bg-white text-black transition-transform hover:bg-yellow-300  p-3 rounded-xl hover:scale-110'><a className='cursor-none' href="#contact">Reach Out</a></button>
            <button className='mx-5 cursor-none bg-yellow-300 text-black transition-transform hover:bg-white p-3 rounded-xl hover:scale-110'><a className='cursor-none' href="/dnv.pdf" target='blank'>Download Resume</a></button>
          </div>
        <div>
          <button className='p-3 cursor-none mx-5 transition-transform border-yellow-100 border-1 rounded-full text-white hover:text-cyan-700 hover:bg-linear-to-l hover:from-white hover:to-cyan-400 hover:border-1 hover:scale-110'><a className='cursor-none' href="mailto:dharunnagavel1226@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></a></button>
          <button className='p-3 mx-5 cursor-none transition-transform border-yellow-100 border-1 rounded-full text-white hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:scale-110'><a className='cursor-none' href="https://www.linkedin.com/in/dharun-naga-vel-1748bb2b4/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a></button>
          <button className='p-3 mx-5 cursor-none transition-transform border-yellow-100 border-1 rounded-full text-white hover:text-black hover:bg-white hover:scale-110'><a className='cursor-none' href="https://github.com/DharunNagavel" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a></button>
        </div>
        </div>
        </section>

        <section className='my-10 '>
          <div id='ABOUT' className='text-center my-15 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-4 rounded-4xl'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 inline lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>About</h1>
          </div>
          <div className='flex flex-wrap'>
            <div className='flex flex-wrap flex-col align-middle items-center w-120 text-justify border-3 border-yellow-100 rounded-xl p-7 ml-20'>
              <h1 className='text-3xl align-middle mb-5'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-icon lucide-car mr-3 inline text-red-500 "><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>My Journey</h1>
              <p>I'm Dharun Nagavel from Theni,currently pursuing my Bachelor's degree in Computer Science and Engineering from Kamaraj College of Engineering and Technology. Over the past years, I've gained practical experience in fullstack development, contributing to a variety of web-based projects</p>
              <p className='my-5'>I am deeply passionate about continuous learning and believe in sharing knowledge to uplift others in the tech community. Whether it's writing code or solving problems in real-world projects, I find joy in every step of the process. I aspire to grow further in the field of full stack development, constantly seeking new challenges and opportunities to make a positive impact.</p>
              <p>With a strong foundation in both frontend and backend technologies, I enjoy turning ideas into functional, user-centric applications. I'm particularly interested in building scalable systems, optimizing performance, and staying up to date with the latest trends in web development.</p>
            </div>
            <div className='mx-20 w-200'>
              <div className='flex flex-wrap flex-col text-justify border-3 border-yellow-100 rounded-xl p-7'>
                <h1 className='text-3xl mb-3'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-3 lucide lucide-book-open-text-icon lucide-book-open-text text-green-400 "><path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/></svg>Practical Architecture</h1>
                <p>Crafting end-to-end web solutions with a focus on clean architecture, modular design, and real-world scalability. Each layer—from intuitive frontend interfaces to resilient backend APIs—is built with performance, maintainability, and future-proofing in mind. My architecture choices reflect hands-on experience across diverse domains, ensuring every project is deployable, testable, and ready for scale.</p>
              </div>
              <div className='my-5 border-3 border-yellow-100 rounded-xl p-7'>
                <h1 className='text-3xl mb-3'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-amber-200 inline lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>Skill-Driven</h1>
                <p>Building full-stack web applications using MERN with a focus on real-world use cases, performance optimization, and modern web standards.</p>
              </div>
              <div className='border-3 border-yellow-100 rounded-xl p-7'>
                <h1 className='text-3xl mb-3'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-blue-700 inline lucide lucide-bomb-icon lucide-bomb"><circle cx="11" cy="13" r="9"/><path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"/><path d="m22 2-1.5 1.5"/></svg>Impact-Oriented</h1>
                <p>Focused on project outcomes—whether in frontend, or backend—ensuring functional, efficient, and user-friendly solutions for every task.</p>
              </div>
            </div>  
          </div>
        </section>

        <section className=''>
          <div id='SKILL' className='text-center my-15 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-5 rounded-4xl'><SiCodeproject className='inline mr-3 mb-2'/>Tech Arsenal</h1>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>    
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaHtml5 className='text-red-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>HTML</div>
            </div>   
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaCss3 className='text-blue-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>CSS</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaBootstrap className='text-purple-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Bootstrap</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><RiTailwindCssFill className='text-blue-300 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Tailwind</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><Image src="/gsap.png" width={50} height={50} alt='GSAP' className='me-3 text-yellow-300 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>GSAP</div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-8  my-10'>    
            <div className='  flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><IoLogoJavascript className='text-yellow-300 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Javascript</div>
            </div>   
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiTypescript className='text-blue-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Typescript</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaReact className='text-blue-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>React js</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiNextdotjs className='text-white text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Next js</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaNodeJs className='text-green-600 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Node js</div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-8  my-10'>    
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiExpress className='text-white text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Express js</div>
            </div>   
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiHttpie className='text-white text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Httpie</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiPostman className='text-orange-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Postman</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><ImGit className='text-orange-600 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Git</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FiGithub className='text-white text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>GitHub</div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-8  my-10'>    
            <div className='  flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><FaDocker className='text-blue-400 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>Docker</div>
            </div>   
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><BiLogoPostgresql className='text-blue-900 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>PostgreSQL</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><GrMysql className='text-blue-600 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>MySQL</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><SiMongodb className='text-green-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>MongoDB</div>
            </div>
            <div className=' flex flex-col items-center w-33 skill-card border-3 transition-transform hover:scale-110 border-yellow-100 p-3 rounded-2xl'>
              <div><RiPhpLine className='text-purple-500 text-5xl text-center'/></div>
              <div className='mt-2 text-xl'>PHP</div>
            </div>
          </div>
        </section>

        <section className=''>
          <div id='EXPERIENCE' className='text-center my-20 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-4 rounded-4xl'><svg className='inline me-4' fill="#ffffff" width="40px" height="40px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M20,53a2,2,0,0,0-2,2h4A2,2,0,0,0,20,53Z"></path><path d="M24,49a2,2,0,0,0-2,2h4A2,2,0,0,0,24,49Z"></path><path d="M40,49a2,2,0,0,0-2,2h4A2,2,0,0,0,40,49Z"></path><path d="M8,62H56A24,24,0,0,0,8,62Zm21-7.04449A3.04445,3.04445,0,0,1,25.95557,58H17.0235a3.00173,3.00173,0,0,1-3.02008-2.83289,4,4,0,0,1,4.02826-4.167v-.00024A3.96846,3.96846,0,0,1,22,47v-.30194a3.6336,3.6336,0,0,1,3.31177-3.69312A3.5002,3.5002,0,0,1,29,46.5ZM35,46.5a3.5002,3.5002,0,0,1,3.68823-3.49506A3.6336,3.6336,0,0,1,42,46.69806V47a3.96846,3.96846,0,0,1,3.96832,3.99988v.00024a4,4,0,0,1,4.02826,4.167A3.00173,3.00173,0,0,1,46.9765,58H38.04443A3.04445,3.04445,0,0,1,35,54.95551Z"></path><path d="M46,56a2,2,0,0,0-4,0Z"></path><path d="M7,4a3,3,0,0,1,0,6,1,1,0,0,0-1,1v5H8V11.89941A5.00019,5.00019,0,1,0,2,7H4A3.00328,3.00328,0,0,1,7,4Z"></path><rect height="2" width="2" x="6" y="18"></rect><polygon points="51 17 41 13 41 27 51 31 51 17"></polygon><polygon points="52 31 62 27 62 13 52 17 52 31"></polygon><path d="M6.71332,35.3916A4.28544,4.28544,0,0,0,10.05975,37H21V25H8v7H4ZM18,33.5H15v-1h3Zm-7-5h7v1H11Zm0,4h2v1H11Z"></path><path d="M30,4a5.99672,5.99672,0,0,0-1,11.91V24h2V15.91A5.99672,5.99672,0,0,0,30,4Zm0,3.5A2.50294,2.50294,0,0,0,27.5,10h-1A3.50424,3.50424,0,0,1,30,6.5Z"></path></g></svg>Experience</h1>
          </div>
          <div className='flex flex-wrap justify-center'>
            <div className='  border-3 border-yellow-100  hover:scale-110 transition-transform rounded-xl p-4'>
              <div>
                  <div className='text-yellow-300 text-3xl my-5 transition-transform hover:text-white'><Link href="https://www.kevellcorp.com/" target='blank' className='cursor-none'>Kevell GLobal Solutions</Link></div>
                  <div className='w-110 text-justify'>Completed a <span className='text-yellow-300'>Web Development Internship</span> focused on building real-world applications. Gained hands-on experience in frontend and backend development, API integration, debugging, and deployment. Improved problem-solving skills and followed industry best practices.</div>
                  <div className='flex items-center justify-center my-5'>
                    <div className='text-xl flex items-center text-yellow-300 me-2'><SlCalender className='me-2'  />Peroid : </div>
                    <div>June 2025 - July 2025</div>
                  </div>
                  <div className='flex items-center justify-center my-2'>
                    <div className='text-xl flex items-center text-yellow-300 me-2'><ImLocation className='me-2'  />Location : </div>
                    <div>Madurai</div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className=' project-section'>
          <div id='PROJECT' className='text-center my-20 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-4 rounded-4xl'><IoRocketSharp className='inline me-4'/>Projects</h1>
          </div>
          <div className='flex justify-evenly'>
            <div className=' border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div>
                <Image src="/ableed.png" width={600} height={500} alt='ableed' />
              </div>
              <div className='text-3xl text-yellow-300 my-3'>
                Ableed
              </div>
              <div className='text-justify my-3 w-150'>
                <span className='text-yellow-300'>Ableed</span> is an assistive learning platform designed to help users understand Braille literacy, lip reading, and sign language.It aims to bridge communication gaps for blind, deaf, and mute communities through an inclusive approach.The platform offers structured learning modules, quizzes, and accessible educational content.A clean, user-friendly interface ensures easy navigation and better learning experiences.The system is built using PHP and MySQL for secure backend operations, with a modern Bootstrap-based frontend.
              </div>
              <div className='flex justify-center items-center mt-5'>
                <a href="https://github.com/DharunNagavel/Ableed" target='blank'><button className='me-5 text-xl border-2 p-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500 cursor-none border-green-500 bg-green-500'>Source code</button></a>
                <a href="https://ableed.wuaze.com/ableed/index.php" target='blank'><button className='text-xl border-2 p-3 border-blue-500 hover:border-green-500 hover:bg-green-500 transition-transform cursor-none bg-blue-500 rounded-2xl'>Live Demo</button></a>
              </div>
            </div>
            <div className=' border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div className='flex justify-center'>
                <Image src="/notify.png" width={600} height={500} alt='ableed' />
              </div>
              <div className='text-3xl text-yellow-300 my-3'>
                Notify
              </div>
              <div className='text-justify my-3 w-150'>
                <span className='text-yellow-300'>Notify</span> is a web-based notes application inspired by the simplicity of mobile notes apps.It features a clean and intuitive interface for easy note creation, editing, and organization.The application is built with a fully responsive design for seamless access across devices.Its lightweight structure ensures fast performance and a smooth user experience.Notify helps users manage daily thoughts, tasks, and important information efficiently.
              </div>
              <div className='flex justify-center items-center mt-5'>
                <a href="https://github.com/DharunNagavel/Notify"><button className='me-5 text-xl border-2 p-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500 cursor-none border-green-500 bg-green-500'>Source code</button></a>
                <a href="https://notify-sigma-nine.vercel.app/"><button className='text-xl border-2 p-3 border-blue-500 hover:border-green-500 hover:bg-green-500 transition-transform cursor-none bg-blue-500 rounded-2xl'>Live Demo</button></a>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly my-20'>
            <div className=' border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div>
                <Image src="/tribal.png" width={600} height={500} alt='ableed' />
              </div>
              <div className='text-3xl text-yellow-300 my-3'>
                Tribal Earth 360
              </div>
              <div className='text-justify my-3 w-150'>
                <span className='text-yellow-300'>Tribal Earth 360</span> is a web platform designed to support tribal communities in applying for FRA pattas (Forest Rights Act land titles).It simplifies the process by providing step-by-step guidance and collecting all required information digitally.The platform ensures applications are efficiently forwarded to the relevant authorities.With a focus on accessibility and transparency, it reduces the difficulties of traditional offline procedures.Users can upload documents, track application status, and receive timely updates for a smoother experience.
              </div>
              <div className='flex justify-center items-center '>
                <a href="https://github.com/DharunNagavel/Tribal-Earth-360"><button className='me-5 text-xl border-2 p-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500 cursor-none border-green-500 bg-green-500'>Source code</button></a>
                <a href="https://tribal-earth-360.vercel.app/"><button className='text-xl border-2 p-3 border-blue-500 hover:border-green-500 hover:bg-green-500 transition-transform cursor-none bg-blue-500 rounded-2xl'>Live Demo</button></a>
              </div>
            </div>
            <div className=' border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div className='flex justify-center'>
                <Image src="/patientx.png" width={600} height={500} alt='ableed'/>
              </div>
              <div className='text-3xl text-yellow-300 my-3'>
                PatientX
              </div>
              <div className='text-justify my-3 w-150'>
                <span className='text-yellow-300'>PatientX</span> is a blockchain-powered marketplace that enables patients to securely monetize their medical reports.It leverages decentralized storage and smart contracts to ensure transparency, security, and tamper-proof transactions.The platform gives patients full control over their data and sharing permissions.With AI integration, PatientX connects patients with researchers seeking real-world medical data.Patients can decide what to share, set terms, and earn ethically in a privacy-focused ecosystem.
              </div>
              <div className='flex justify-center items-center mt-5'>
                <a href="https://github.com/DharunNagavel/PatientX"><button className='me-5 text-xl border-2 p-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500 cursor-none border-green-500 bg-green-500'>Source code</button></a>
                <a href="https://patient-x.vercel.app/"><button className='text-xl border-2 p-3 border-blue-500 hover:border-green-500 hover:bg-green-500 transition-transform cursor-none bg-blue-500 rounded-2xl'>Live Demo</button></a>
              </div>
            </div>
          </div>
          <div className='flex justify-center my-20'>
            <div className=' border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div>
                <Image src="/leave.png" width={600} height={500} alt='leave'/>
              </div>
              <div className='text-3xl text-yellow-300 my-3'>Leave Management System</div>
              <div className='text-justify my-3 w-150'>
                <span>Leave Management System</span> is a web-based platform that simplifies leave applications for students and approvals for teachers.Students can easily submit leave requests with relevant details through a clean and intuitive interface.Teachers have the ability to review, approve, or reject leave requests in real time.The system ensures transparency by maintaining clear leave status tracking for all users.It is built using Next.js, TypeScript, and PostgreSQL for a fast, secure, and scalable experience.
              </div>
              <div className='flex justify-center items-center mt-5'>
                <a href="https://github.com/DharunNagavel/leavemanagement"><button className='me-5 text-xl border-2 p-3 rounded-2xl hover:border-blue-500 hover:bg-blue-500 cursor-none border-green-500 bg-green-500'>Source code</button></a>
                <a href="https://leavemanagement-five.vercel.app/" target='blank'><button className='text-xl border-2 p-3 border-blue-500 hover:border-green-500 hover:bg-green-500 transition-transform cursor-none bg-blue-500 rounded-2xl'>Live Demo</button></a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id='ACHIVEMENT' className='text-center my-20 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-4 rounded-4xl'><GrAchievement className='inline me-4'/>Achievement</h1>
          </div>
          <div className='flex flex-wrap justify-evenly'>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Techutsav Synergicz 2.0</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>March 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Madurai</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Developed Ableed, an assistive learning platform, during a 24-hour college hackathon.Built using PHP, MySQL, and Bootstrap, focusing on accessibility for blind, deaf, and mute users.Collaborated with a team to design, implement, and present the solution within a limited timeframe.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Ranked Top 20 out of 80+ Teams</div>
              </div>
            </div>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Smart India Hackathon</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>September 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Virudhunagar</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Developed Tribal Earth 360 during an internal college hackathon, focusing on sustainable and community-driven solutions.Built using React, Tailwind CSS, Node.js, Express, and PostgreSQL with a full-stack architecture.Collaborated with the team to design, develop, and present the project within the hackathon timeframe.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Shortlisted in the Internal Hackathon</div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly my-15'>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Electra 25</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>October 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Madurai</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Participated in the Project Expo conducted by Anna University Reginal Campus, where we showcased our project Tribal Earth 360.Presented the project to faculty and evaluators, explaining the concept, implementation, and real-world impact.Gained valuable experience in project presentation, communication, and technical demonstration.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Won 3rd Price</div>
              </div>
            </div>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Techxplosion 25</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>October 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Virudhunagar</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Participated in an AI Hackathon conducted by SRM College of Engineering and Technology, where we developed the project PatientX.Focused on applying AI concepts to address real-world healthcare challenges.Collaborated with the team to design, build, and present the solution effectively.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Won 2nd Price</div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly my-15'>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Hack to Hire</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>December 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Online</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Participated in a hackathon conducted by Beetex and Trikiya, involving multi-stage project evaluations.Our project was shortlisted among the top 50 teams and further selected into the top 10 teams.Gained hands-on experience in competitive innovation, project screening, and technical presentation.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Ranked Top 50 out of 500+ teams </div>
              </div>
            </div>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Technocrats Hackathon</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>December 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Online</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Participated in Technocrats Hackathon 2025, a 36-hour National-level online Buildathon.Our team's project was shortlisted and selected for the finals after the PPT evaluation round.Demonstrated innovation, problem-solving, and teamwork while competing with top teams across India.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Ranked Top 60 out of 500+ Teams</div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly my-15'>
            <div className=' achievement-card border-3 border-yellow-100 rounded-2xl p-4 hover:scale-110 transition-transform '>
              <div className='text-yellow-300 text-3xl'>Vibe Hack 2.0</div>
              <div className='text-yellow-300 text-xl flex justify-between items-center my-3'>
                <div className='flex items-center'>
                  <SlCalender className='me-2'/>
                  <div>December 2025</div>
                </div>
                <div className='flex items-center'>
                  <ImLocation className='me-2'/>
                  <div>Online</div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='w-140 text-justify'>Participated in a hackathon conducted by Lovable AI, where our team submitted a project PPT for evaluation.Our project was shortlisted and selected for the finals based on innovation and feasibility.Ranked among the Top 20 teams in the competition.</div>
              </div>
              <div className='flex justify-center my-3'>
                <div className='text-2xl text-yellow-300'>Ranked Top 20 out of 500+ teams </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-20 '>
          <div id='CONTACT' className='text-center my-20 text-4xl scroll-mt-10'>
            <h1 className='border-2 border-yellow-100 inline p-4 rounded-4xl'><IoIosContact className='text-5xl mb-1 inline me-4'/>Contact</h1>
          </div>
          <div className='flex justify-evenly text-xl'>
            <div className='border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div className='text-4xl text-center text-yellow-300 mb-8'>Contact Information</div>
              <div className='flex  items-center'>
                <HiMail className='text-amber-700 border-1 border-white rounded-full p-2 bg-white text-5xl me-3' />
                <div>Email : <a className='cursor-none hover:text-yellow-300' href='mailto:dharunagavel1226@gmail.com' target='blank'>dharunnagavel1226@gmail.com</a></div>
              </div>
              <div className='flex my-3 items-center'>
                <FaWhatsapp className='text-green-400 border-1 border-white rounded-full p-2 bg-white text-5xl me-3'  />
                <div>Phone : <a className='cursor-none hover:text-yellow-300' href='https://wa.me/916383452074' target='blank'>+91 6383452074</a></div>
              </div>
              <div className='flex  items-center'>
                <ImLocation className='text-red-500 border-1 border-white rounded-full p-2 bg-white text-5xl me-3'  />
                <div>Location : Theni</div>
              </div>
            </div>
            <div className='border-3 border-yellow-100 p-4 rounded-2xl hover:scale-110 transition-transform'>
              <div className='text-4xl text-center text-yellow-300 mb-8'>Contact Information</div>
              <div className='flex  items-center'>
                <FaLinkedin className='text-blue-500 border-1 border-white rounded-full p-2 bg-white text-5xl me-3' />
                <div><a href='https://www.linkedin.com/in/dharun-nagavel-1748bb2b4' target='blank' className='cursor-none hover:text-yellow-300'>Linkedin</a></div>
              </div>
              <div className='flex my-3 items-center'>
                <FaGithub className='text-black border-1 border-white rounded-full p-2 bg-white text-5xl me-3'  />
                <div><a href="https://github.com/DharunNagavel" target='blank' className='cursor-none hover:text-yellow-300'>GitHub</a></div>
              </div>
              <div className='flex  items-center'>
                <SiLeetcode className='text-black border-1 border-white rounded-full p-2 bg-white text-5xl me-3'  />
                <div><a href="https://leetcode.com/u/Dharun_Nagavel/" target='blank' className='cursor-none hover:text-yellow-300'>LeetCode</a></div>
              </div>
            </div>
          </div>
        </section>
  </>);
}

export default page