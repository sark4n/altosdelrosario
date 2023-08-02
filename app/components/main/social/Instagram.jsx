import React from 'react'
import IgImg1 from '/public/ig/ig-img-1.jpg';
import IgImg2 from '/public/ig/ig-img-2.jpg';
import IgImg3 from '/public/ig/ig-img-3.jpg';
import IgImg4 from '/public/ig/ig-img-4.jpg';
import IgImg5 from '/public/ig/ig-img-5.jpg';
import IgImg6 from '/public/ig/ig-img-6.jpg';
import InstagramImg from './InstagramImg';
import Image from 'next/image';


const Instagram = () => {
  return (
    <div id="contact" className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-3xl font-bold px-2'>Si deseas más información y contacto...</p>
        <p className='text-2xl font-bold mt-4'>Siguenos en Instagram</p>
        <p className='pb-4'><a className="hover:underline" href="http://www.instagram.com/altosdelrosario_elqui2">@altosdelrosario2</a></p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg1} /></a>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg2} /></a>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg3} /></a>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg4} /></a>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg5} /></a>
            <a href="http://www.instagram.com/altosdelrosario_elqui2"><InstagramImg socialImg={IgImg6} /></a>
        </div>
        <p className='text-2xl font-bold mt-4'>o contáctanos al whatsapp</p>
        <div className='pt-4 flex justify-center'>
          <Image 
          src='/images/social/whatsappSvg.svg' 
          width={35} height={35} 
          className='object-contain'/>
          </div>
        <p className='text-2xl font-bold mt-4'>
          <a className="hover:underline" href="https://wa.me/+56990885749">+56 9 9088 5749</a>
        </p>
    </div>
  )
}

export default Instagram