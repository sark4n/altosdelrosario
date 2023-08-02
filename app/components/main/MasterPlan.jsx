import React from 'react';

const MasterPlan = () => {
  return (
    <div id="MasterPlan" className='flex items-center justify-center h-screen masterPlan-bg '>
      {/* Overlay */}
      <div className='p-5 text-white z-[2]'>
        <div className='sm:p-12 p-3 rounded-md fondo-azul z-[2] mt-10 sm:mt-3'>
          <div className=''>
            <h2 className='text-xl sm:text-5xl font-bold flex justify-center'>Excelente Conectividad </h2>
            <p className='py-5 text-l'>
            Altos del Rosario se emplaza en la localidad de El Rosario oriente, Excelente ubicación a 3km  de la 
            Ruta D-41 en el km 18 , a 20 minutos del centro de La Serena. Estamos cerca de  emprendimientos locales, 
            supermercados, restaurantes, colegios, universidades  y Aeropuerto La Florida.
            </p>
          </div>
          <div className='justify-center flex'>
            <button className='boton-verde'><a href="https://drive.google.com/file/d/16HjmySTAm-247xLS1tXOe0pOJ0ff8_-w/view?usp=drive_link">Master Plan</a></button>
            <button className='boton-verde ml-2'><a href="/#Mapa">Mapa de Ubicacion</a></button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MasterPlan;
