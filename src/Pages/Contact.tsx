import doctorsData from '../data/doctors.json';
import AppointmentForm from '../components/AppointmentForm';

const hours = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
];

const days = ['Lunes', 'Martes', 'Míercoles', 'Jueves', 'Viernes'];

const Contact = () => {
  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Agenda tu hora</h1>
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
        <AppointmentForm doctorsData={doctorsData} days={days} hours={hours} />
      </div>
    </>
  );
};

export default Contact;
