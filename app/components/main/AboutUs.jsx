import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div id="AboutUs" className='flex items-center justify-center h-full aboutUs-bg'>    
      <div className='p-5 text-white z-[2] pt-10'>
        <div className='sm:p-12 p-3 rounded-md fondo-azul z-[2] mt-10 sm:mt-3 inline-block sm:flex gap-4'>
          
          <Image
            src="/images/AboutUs.jpg"
            width={700}
            height={500}
            className='object-cover'
            alt="aboutUs"
          />
          
          <div className=''>
            <h2 className='text-2xl sm:text-5xl font-bold flex justify-center pt-2'>Un ambiente natural encantado con la magia del Valle de Elqui</h2>
            <p className='py-5 text-l'>
            En Altos del Rosario Valle de Elqui no solo te ofrecemos parcelas increíbles para que construyas tu sueño inmobiliario.
            También tienes a tu alrededor todo el encanto de los cielos más limpios del mundo, el calor de un sol generoso, el fluir 
            armónico del río Elqui y la magia de un sitio reconocido por su conexión con la naturaleza.

            Aquí encontrarás la desconexión que tú y tu familia están buscando, con la comodidad de estar a minutos de La Serena

            Encuentra con nosotros terrenos amplios, donde tus hijos podrán jugar libremente en contacto con la naturaleza. 
            Un lugar en que podrás planificar cualquier sueño que desees y, además, sumarte al cuidado del medioambiente: 
            tenemos amplias y exclusivas parcelas.  
            </p>
          </div>
        </div>
        
      </div>
    </div>      
  );
};

export default AboutUs;
