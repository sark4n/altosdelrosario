import Image from 'next/image';
import React from 'react';

const Proyecto = () => {
  return (
    <div id="Proyecto" className='flex items-center justify-center h-screen proyecto-bg'>
      <div className='p-5 text-white z-[2] '>
        <div className='sm:p-6 p-3 rounded-md fondo-azul z-[2] mt-10 sm:mt-3 inline-block sm:flex'>
          <div className=''>
            <h1 className='text-2xl sm:text-5xl font-bold flex justify-center py-2'>
                Altos del Rosario Valle de Elqui
            </h1>
          
            <h2 className='sm:text-4xl text-xl font-semibold flex justify-center text-orange-500'>Un proyecto con todo lo que necesitas</h2>
            <p className='py-5 text-l'>
            Hermosas parcelas con caminos de acceso pavimentados hasta el ingreso, caminos interiores estabilizados  
            y espacios al aire libre para el disfrute de su familia.
            Una inversión segura , ideal para quien ama el ambiente y la mística de la vida rural. 
            Conéctate a una nueva forma de vivir.  
            </p>
            
          </div>
          <div className='flex justify-center'>
            <Image
            src="/images/Proyecto.jpg"
            width={700}
            height={500}
            className='object-contain'
            alt="aboutUs"
            />
            </div>  
        </div>
        
      </div>
    </div>      
  );
};

export default Proyecto;
