"use client";

import React,{useState} from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import {Menu,X} from 'lucide-react'
import {motion} from 'motion/react'
import {menuSlide,slide} from './anim'
import { AnimatePresence } from 'motion/react';

const NavItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [nav,setNav]=useState(false);
    const handlenav=()=>{
        setNav(!nav)
    }
  return (
    <nav className="bg-black shadow-md py-5 px-13 text-white text-l ">
      <div className=" flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold w-12 h-12">
          <Image src={logo} alt='logo'/>
        </Link>
        <ul className='hidden lg:flex justify-around items-center  min-w-[600px] '>
            {
                NavItems.map((item,index)=>(
                    <li key={index} className='hover:text-[#53b787]'><Link href={item.href}>{item.label}</Link></li>
                ))
            }
        </ul>
        <div className='hidden lg:flex items-center'>
            <Link href='#' className='border-2 rounded-xl p-2 px-8 mx-4 hover:bg-white hover:text-black'>Sign up</Link>
            <Link href="#" className='border-2 rounded-xl p-2 px-2 hover:bg-white hover:text-black'>Create an Account</Link>
        </div>
        <div className='text-xl lg:hidden' onClick={handlenav}>
            {nav?<X/>:<Menu/>}
        </div>
      </div>
      <AnimatePresence mode='wait'>
            {nav && (
        <motion.div 
        variants={menuSlide} 
        animate='enter' 
        exit='exit' 
        initial='initial'
        className="absolute top-22 right-0 w-[85%] h-[90%] text-xl p-16 bg-[#444444] text-white flex flex-col justify-evenly lg:hidden">
          <motion.ul 
          variants={slide} 
          animate='enter' 
          exit='exit' 
          initial='initial'
          className="flex flex-col gap-8 ">
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-[#40838e]"
                  onClick={() => setNav(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
          <motion.div 
          variants={slide} 
          animate='enter' 
          exit='exit' 
          initial='initial'
          className="flex-col flex gap-4 mt-4">
            <Link href="#" className="border-2 rounded-xl px-4 py-2 text-center hover:bg-[#32415d] hover:text-white">Sign up</Link>
            <Link href="#" className="border-2 rounded-xl px-4 py-2 text-center hover:bg-[#32415d] hover:text-white">Create Account</Link>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
