import { Component } from 'react';
import type { doctorInfo } from '../types/data';
import PropTypes from 'prop-types';

interface DoctorCardProps {
  doctor: doctorInfo;
  onPress: (doctor: doctorInfo) => void;
}

class DoctorCard extends Component<DoctorCardProps> {
  render() {
    const { doctor, onPress } = this.props;
    let services = '';
    doctor.services.forEach((service, idx) => {
      services += idx !== 0 ? ', ' + service : service;
    });

    return (
      <div
        className='flex flex-col items-center bg-slate-300 rounded-xl p-5 hover:cursor-pointer'
        onClick={(_) => {
          onPress(doctor);
        }}
      >
        <h1 className='text-4xl text-center mb-4'>{doctor.name}</h1>
        <h2 className='text-3xl italic mb-2'>{doctor.specialty}</h2>
      </div>
    );
  }
}

// @ts-ignore
DoctorCard.propTypes = {
  doctor: PropTypes.exact({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    years: PropTypes.number.isRequired,
  }),
};

export default DoctorCard;
