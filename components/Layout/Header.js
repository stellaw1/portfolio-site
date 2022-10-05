import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header () {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav>
        <div className="container mx-auto px-24 flex items-center flex-wrap p-3">
            <Link href='/'>
                <div className="py-4 inline-flex items-center mr-4 transition duration-150 ease-in-out rounded-md hover:scale-110 ">
                    <Image
                        width={80}
                        height={80}
                        alt="icon"
                        src="/icon.jpg"
                        className="rounded-md mr-3 h-6 sm:h-9"
                    />  
                </div>
            </Link>
            <button
            className='inline-flex p-3 hover:bg-sky-500/50 rounded lg:hidden ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>
            
            <div
            className={`${
                active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                <Link href='/project'>
                <a className='lg:inline-flex lg:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-xl hover:text-white '>
                    Projects
                </a>
                </Link>
                <Link href='/blog'>
                <a className='lg:inline-flex lg:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-xl hover:text-white'>
                    Blog
                </a>
                </Link>
                <Link href='/resume.pdf'>
                <a className='lg:inline-flex lg:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-xl hover:text-white'>
                    Resume
                </a>
                </Link>
                <Link href='/about'>
                <a className='lg:inline-flex lg:w-auto w-full mx-4 px-3 py-2 rounded items-center justify-center transition-colors duration-300 ease-in-out hover:bg-sky-500/50 text-xl hover:text-white'>
                    About
                </a>
                </Link>
            </div>
            </div>
        </div>
    </nav>
  );
};