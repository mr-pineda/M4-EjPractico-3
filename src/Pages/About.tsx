import { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import doctorsData from '../data/doctors.json';
import { doctorInfo } from '../types/data';

const About = () => {
  const [data, setData] = useState<doctorInfo[]>([]);
  useEffect(() => {
    // Simular carga inicial de datos
    setData(doctorsData);
  }, []);
  const [currentDoctor, setCurrentDoctor] = useState<doctorInfo | null>(null);
  const [services, setServices] = useState<string>('');

  useEffect(() => {
    if (currentDoctor !== null) {
      let services = '';
      currentDoctor.services.forEach((service, idx) => {
        services += idx !== 0 ? ', ' + service : service;
      });
      setServices(services);
      return;
    }
    setServices('');
  }, [currentDoctor]);
  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Agentda tu hora</h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div className=' bg-white w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Conoce a nuestro equipo</h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
        <div className='grid grid-cols-4 gap-4'>
          {data.map((doctor, idx) => (
            <DoctorCard
              key={idx}
              doctor={doctor}
              onPress={(doctor) => {
                setCurrentDoctor(doctor);
              }}
            />
          ))}
        </div>
      </div>

      {currentDoctor !== null && (
        <div className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white w-1/3 h-1/2 m-auto p-5 rounded'>
            <h1 className='text-4xl text-center mb-4'>{currentDoctor.name}</h1>
            <h2 className='text-3xl italic mb-2'>{currentDoctor.specialty}</h2>
            <p className='italic text-justify mb-3'>
              {currentDoctor.description}
            </p>
            {services !== '' && (
              <p className=' w-full'>
                <span className=' font-bold'>Servicios: </span> {services}
              </p>
            )}
            <button
              className='bg-sky-500 text-white rounded p-2 mt-5'
              onClick={() => {
                setCurrentDoctor(null);
              }}
              children='Cerrar'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
