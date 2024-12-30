const Footer = () => {
  return (
    <footer className='flex flex-row justify-around h-32 bg-gray-400 px-2'>
      <div className='flex flex-col items-center my-2'>
        <p className='font-bold'>Dirección</p>
        <p>Calle sin nombre, 1234</p>
        <p>Comuna desconocida, Chile</p>
      </div>
      <div className='flex flex-col items-center my-2'>
        <p className='font-bold'>Contacto</p>
        <p>Fono: +569 9999 9999</p>
        <p>Correo: contacto@hospital.cl</p>
      </div>
      <div className='flex flex-col items-center my-2'>
        <p className='font-bold'>RRSS</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
