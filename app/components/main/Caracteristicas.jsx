import React from 'react';

const Caracteristicas = () => {
  return (
    <div id="Caracteristicas" className='flex items-center justify-center h-screen aboutUs-bg'>
      <div className='p-5 text-white z-[2] '>
        <div className='sm:p-12 p-3 rounded-md fondo-azul z-[2] mt-10 sm:mt-3'>
          <div className=''>
          <h1 className='py-2 text-2xl font-semibold'>CONECTIVIDAD</h1>
          <p>&radic; A tan sólo 20 minutos del centro de la ciudad.</p>
          <h1 className='py-2 text-2xl font-semibold'>PARCELAS</h1>
          <p>&radic; Desde 5.000mt2</p>
          <h1 className='py-2 text-2xl font-semibold'>LUZ</h1>
          <p>&radic; Nuestro proyecto cuenta con suministro electrico</p>
          <h1 className='py-2 text-2xl font-semibold'>TRANQUILIDAD</h1>
          <p>&radic; Hermosas vistas al entorno y zona campestre de gran prosperidad agrícola.</p>
          </div>
        </div>
        
      </div>
    </div>      
  );
};

export default Caracteristicas;