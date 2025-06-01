import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'
import youtube from '../public/youtube.png'

export default async function Home() {
  return (
    
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row relative">
      {/*Logo*/}
      <div className="absolute top-6 left-6 z-50">
      <div className="w-8 h-8 border-2  bg-black border-black rounded-full flex items-center justify-center">
      <Image src={logo} alt='logo'/>
          </div>
      </div>

        {/*R*/}
        <div className="w-full md:w-3/4 h-80 md:h-auto bg-gray-300 flex items-center justify-center md:justify-end overflow-hidden relative md:order-2">
        <Image src={youtube} alt="YouTube Symbol" className="w-48 h-48 md:w-80 md:h-80 object-contain translate-x-0 md:translate-x-20"/>
      </div>

      {/*Main*/}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:pb-20 pt-20 md:pt-8 md:order-1">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          This is Grohub.
        </h1>
        
        <p className="text-base md:text-lg mb-8 md:mb-12 opacity-80">
          Text. Text. Text
        </p>
        

        <div className="flex md:flex-col md:flex-row gap-4">
          <Link href="/dashboard">
          <button className="bg-gray-200 text-black px-4 md:px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Go to Dashboard
          </button>
          </Link>
          <button className="bg-gray-500 text-white px-12 md:px-14 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors">
            Button 2
          </button>
        </div>
      </div>


    </div>
    
  );
}
