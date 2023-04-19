import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)



  return (
    <div className='w-full h-[100px] bg-gradient-to-b from-[rgba(83,70,54,0.3)] to-[#f5f4f0] px-4 text-[#534636]'>
        <div className='md:container md:mx-auto flex justify-between items-center'>
        <div className='flex flex-row gap-4'>
            <img src={Logo} alt="#" style={{width: '200px'}}/>
        </div>


        {/* menu */}
        
        <ul className='hidden md:flex flex-row gap-4 font-bold'>
        <li>

        <Link to="home" smooth={true} duration={500} className='cursor-pointer'>
                            Home
                            </Link>
        </li>
        <li>

                            <Link className='cursor-pointer' to="about" smooth={true} duration={500} >
                            About
                            </Link>
        </li>
        <li>

                            <Link className='cursor-pointer' to="works" smooth={true} duration={500} >
                            Works
                            </Link>
        </li>
        <li>

                            <Link className='cursor-pointer' to="contact" smooth={true} duration={500} >
                            Contact
                            </Link>
        </li>
        </ul>


        {/* Burger */}
        <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
                </div>
                
                {/* Mob menu */}
                
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f5f4f0] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} className='cursor-pointer'>
                            Home
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} className='cursor-pointer' to="about" smooth={true} duration={500} >
                            About
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} className='cursor-pointer' to="works" smooth={true} duration={500} >
                            Works
                            </Link></li> 
                <li className='py-6 text-4xl'><Link onClick={handleClick} className='cursor-pointer' to="contact" smooth={true} duration={500} >
                            Contact
                            </Link></li>
            </ul>
        </div>
        
    
    </div>

    
    
  )
}

export default Navbar