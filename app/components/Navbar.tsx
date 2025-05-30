import React,{useState} from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import {Menu,X} from 'lucide-react'

const NavItems = [
  { label: 'Home', href: '/' },
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
    <nav className="shadow-md py-4 px-10 text-white text-l">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-xl font-bold w-12 h-12">
          <Image src={logo} alt='logo'/>
        </Link>
        <ul className='hidden lg:flex justify-around items-center min-w-[650px] '>
            {
                NavItems.map((item,index)=>(
                    <li key={index} className=''><Link href={item.href}>{item.label}</Link></li>
                ))
            }
        </ul>
        <div className='hidden lg:flex items-center'>
            <Link href='#' className='border-2 rounded-xl p-2 px-10 mx-4'>Sign up</Link>
            <Link href="#" className='border-2 rounded-xl p-2 px-2'>Create an Account</Link>
        </div>
        <div className='lg:hidden' onClick={handlenav}>
            {nav?<X/>:<Menu/>}
        </div>
      </div>
      {nav && (
        <div className="absolute top-16 left-0 w-full bg-black p-6 flex flex-col gap-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block hover:text-[#53b787]"
                  onClick={() => setNav(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="#" className="border-2 rounded-xl px-4 py-2 text-center hover:bg-white hover:text-black">Sign up</Link>
            <Link href="#" className="border-2 rounded-xl px-4 py-2 text-center hover:bg-white hover:text-black">Create Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
