import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen hero-bg'>
      <div className='p-5 text-white z-[2]'>
        <div className='block ml-auto mr-auto w-3/4 sm:w-1/2'>
          <Image
            src='/images/logo.png'
            width={350}
            height={250}
            alt='logoHeader'
            className='object-contain'
            priority={true}
          />
        </div>

        <div className='sm:p-12 p-3 rounded-md fondo-azul z-[2] mt-10 sm:mt-3'>
          <div className=''>
            <h2 className='text-xl sm:text-5xl font-bold flex justify-center'>Altos del Rosario Valle del Elqui</h2>
            <p className='py-5 text-l'>Parcelas Residenciales Ecológicas - Rosario oriente , Ruta D-257, La Serena, Chile.</p>
          </div>
          
          <div className='justify-center flex'>
            <button 
              href='/' 
              className='boton-verde'><a href="https://wa.me/+56990885749">Agenda tu Visita</a></button>
            <button 
              
              className='boton-verde ml-2'><a href="https://drive.google.com/file/d/1I-NnAEdWaMrLal2iSeWbh8vxqbWkY63m/view?usp=sharing">Brochure del proyecto</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero