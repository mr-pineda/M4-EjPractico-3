import { useEffect, useState, createContext } from 'react';
import SortedServiceList from '../components/SortedServiceList';
import { obtenerdoctorInfo } from '../scripts/api';

export const generalServices = createContext([
  'Medicina General',
  'Cardiología',
  'Pediatría',
  'Neurología',
  'Ortopedia',
  'Oftalmología',
  'Ginecología y Obstetricia',
]);

const Home = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    // Simular carga inicial de datos
    const fetchData = async () => {
      const doctors = await obtenerdoctorInfo();
      setData(doctors.flatMap((doctor) => doctor.services));
    };
    fetchData();
  }, []);
  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10 font-bold text-3xl text-center'>
          Pagina de inicio
        </h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div>
        <h1 className='my-5 font-bold text-3xl text-center'>
          Nuestros Servicios
        </h1>
        <SortedServiceList services={data} />
      </div>
    </>
  );
};

export default Home;
