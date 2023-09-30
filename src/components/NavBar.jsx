import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,   
            link: "experience",
        },
        {
            id: 5,
            link: "Contact",
        },
    ];

        
    const social = [
        {
        id: 1,
        child: (
            <>
            <FaLinkedin size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/blessing.eno',
        style: 'rounded-tr-md',
        },
        {
        id: 2,
        child: (
            <>
            <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/blessingsmart',
        },
        {
        id: 3,
        child: (
            <>
            <HiOutlineMail size={30}/>
            </>
        ),
        href: 'mailto:bublessingsmart@gmail.com',
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
        <h1 className='text-5xl font-signature ml-2'>Blessing</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                    key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}      
        </ul>
        
        <div onClick={() => setNav(!nav)}className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}   
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

                {links.map(({id, link}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))} 

                <div className='flex justify-center ' >
                    {social.map(({id, child, href,}) => (
                    <li 
                        key={id} className='flex px-2 cursor-pointer '>
                        <a 
                            href={href} 
                            className='flex justify-between items-center w-full text-white'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))} 
                </div>
            </ul>
        )}

        
    </div>
  );
};

export default NavBar;
