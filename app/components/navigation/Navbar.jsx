'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#174c97');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#3fa7d6');
        setTextColor('#FCF7F8');
      } else {
        setColor('transparent');
        setTextColor('#174c97');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-3 pb-2 sm:pb-1 text-white'>
          {/* LOGO */}
        <Link href='/'>
          <div className='flex gap-2 items-center'>
          <Image
            src='/images/logo2.png'
            width={60}
            height={50}
            alt=''
            className=''
          />
          <h1 style={{color: `${textColor}`}} className='font-bold text-2xl'>
            Altos del Rosario
          </h1>
          </div>
        </Link>

        {/* PC MENU */}
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          
          <li className='p-4'>
            <Link href='/#AboutUs'>¿Quienes Somos?</Link>
          </li>

          <ul className="dropdown-menu">
            <li className='p-4'>
              <Link href="/">
                Altos del Rosario &raquo;
              </Link>
              <ul 
                style={{ backgroundColor: `${color}` }} 
                className="dropdown-menu dropdown-submenu"
              >
                <a href="/#Proyecto">
                <li className="submenu-li">
                  &rarr; El Proyecto
                </li>
                </a>
                
                <a href="/#MasterPlan">
                <li className="submenu-li">
                  &rarr; Emplazamiento
                </li>
                </a>

                <li className="submenu-li">
                  <a href="/#Caracteristicas">&rarr; Caracteristicas</a>
                </li>

                <li className="submenu-li">
                  <a href="/#Mapa">&rarr; Ubicación</a>
                </li>

              </ul>
            </li>
          </ul>

          <li className='p-4'>
            <Link href='/#gallery'>Galeria</Link>
          </li>
          <li className='p-4'>
            <Link href='/#contact'>Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/60 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/60 text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#AboutUs'>¿Quiénes Somos?</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#Proyecto'>El Proyecto</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#MasterPlan'>Master Plan</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Galería</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#contact'>Contacto</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
