import { useContext } from 'react';
// import PropTypes from 'prop-types';
import { generalServices } from '../Pages/Home';

// Componente que muestra una lista de servicios ofrecidos por la clínica
// Se destaca los servicios generales con un color diferente
const ServiceList = ({ services }: { services: string[] }) => {
  const gServices = useContext(generalServices);

  return (
    <div className='grid grid-cols-5 gap-4'>
      {[...gServices, ...services].map((service, idx) => {
        return (
          <p
            className={`text-xl text-center align-middle py-3 rounded ${
              idx > gServices.length - 1 ? 'bg-sky-100' : 'bg-sky-200'
            }`}
            key={idx}
          >
            {service}
          </p>
        );
      })}
    </div>
  );
};

export default ServiceList;
