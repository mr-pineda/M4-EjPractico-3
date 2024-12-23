import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Component } from 'react';
import { doctorInfo } from '../types/data';
import { CheckIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import React from 'react';

interface AppointmentFormProps {
  doctorsData: doctorInfo[];
  hours: string[];
  days: string[];
}

interface AppointmentFormState {
  selected: doctorInfo | null;
  hour: string | null;
  day: string | null;
  doctorQuery: string;
  dayQuery: string;
  hourQuery: string;
  isHovered: boolean;
}

class AppointmentForm extends Component<
  AppointmentFormProps,
  AppointmentFormState
> {
  private doctorInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: AppointmentFormProps) {
    super(props);
    this.state = {
      selected: props.doctorsData[0],
      hour: props.hours[0],
      day: props.days[0],
      doctorQuery: '',
      dayQuery: '',
      hourQuery: '',
      isHovered: false,
    };

    this.doctorInputRef = React.createRef();
    this.handleDoctorQueryChange = this.handleDoctorQueryChange.bind(this);
  }

  handleDoctorQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ doctorQuery: event.target.value });
  };

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  componentDidMount() {
    if (this.doctorInputRef.current) {
      this.doctorInputRef.current.addEventListener('mouseenter', () => {
        this.handleMouseEnter();
      });
      this.doctorInputRef.current.addEventListener('mouseleave', () => {
        this.handleMouseLeave();
      });
    }
  }

  componentWillUnmount() {
    if (this.doctorInputRef.current) {
      this.doctorInputRef.current.removeEventListener('mouseenter', () => {
        this.handleMouseEnter();
      });
      this.doctorInputRef.current.removeEventListener('mouseleave', () => {
        this.handleMouseLeave();
      });
    }
  }

  handleDayQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dayQuery: event.target.value });
  };

  handleHourQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ hourQuery: event.target.value });
  };

  render() {
    const { doctorsData, hours, days } = this.props;
    const { selected, hour, day, doctorQuery, dayQuery, hourQuery } =
      this.state;

    const filteredDoctor =
      doctorQuery === ''
        ? doctorsData
        : doctorsData.filter((doctor) => {
            return doctor.name
              .toLowerCase()
              .includes(doctorQuery.toLowerCase());
          });

    const filteredDay =
      dayQuery === ''
        ? days
        : days.filter((day) => {
            return day.toLowerCase().includes(dayQuery.toLowerCase());
          });

    const filteredHour =
      hourQuery === ''
        ? hours
        : hours.filter((hour) => {
            return hour.toLowerCase().includes(hourQuery.toLowerCase());
          });

    return (
      <div className='bg-white w-full px-28 py-16'>
        <div className='mb-5'>
          <h1>Doctor</h1>
          <Combobox
            value={selected}
            onChange={(value) => this.setState({ selected: value })}
            onClose={() => this.setState({ doctorQuery: '' })}
          >
            <div className='relative'>
              <ComboboxInput
                className={`w-full rounded-lg border-black border-2  py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${
                  this.state.isHovered ? 'bg-sky-100' : 'bg-white/50'
                }`}
                ref={this.doctorInputRef}
                displayValue={(doctor: doctorInfo) => doctor?.name}
                onChange={(event) => this.handleDoctorQueryChange(event)}
              />
              <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                <ChevronDownIcon className='size-4 fill-black' />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor='bottom'
              transition
              className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            >
              {filteredDoctor.map((doctor, idx) => (
                <ComboboxOption
                  key={idx}
                  value={doctor}
                  className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                >
                  <CheckIcon className='invisible size-4 fill-black group-data-[selected]:visible' />
                  <div className='text-sm/6 text-black'>
                    {doctor.name} --- {doctor.specialty}
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>
        <div className='flex flex-row mb-5'>
          <div className='mr-2'>
            <h1>Hora</h1>
            <Combobox
              value={hour}
              onChange={(value) => this.setState({ hour: value })}
              onClose={() => this.setState({ hourQuery: '' })}
            >
              <div className='relative'>
                <ComboboxInput
                  className='w-full rounded-lg border-black border-2 bg-white/50 py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                  displayValue={(currentHour: string) => currentHour}
                  onChange={(event) => this.handleHourQueryChange(event)}
                />
                <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                  <ChevronDownIcon className='size-4 fill-black' />
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor='bottom'
                transition
                className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
              >
                {filteredHour.map((hour, idx) => (
                  <ComboboxOption
                    key={idx}
                    value={hour}
                    className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                  >
                    <div className='text-sm/6 text-black'>{hour}</div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
          <div>
            <h1>Día</h1>
            <Combobox
              value={day}
              onChange={(value) => this.setState({ day: value })}
              onClose={() => this.setState({ dayQuery: '' })}
            >
              <div className='relative'>
                <ComboboxInput
                  className='w-full rounded-lg border-black border-2 bg-white/50 py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                  displayValue={(currentDay: string) => currentDay}
                  onChange={(event) => this.handleDayQueryChange(event)}
                />
                <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                  <ChevronDownIcon className='size-4 fill-black' />
                </ComboboxButton>
              </div>

              <ComboboxOptions
                anchor='bottom'
                transition
                className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
              >
                {filteredDay.map((day, idx) => (
                  <ComboboxOption
                    key={idx}
                    value={day}
                    className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
                  >
                    <CheckIcon className='invisible size-4 fill-black' />
                    <div className='text-sm/6 text-black'>{day}</div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>
        </div>
        <button
          className=' bg-sky-700 p-3 rounded-lg text-white font-bold'
          onClick={() =>
            console.log(
              `Reserva de Hora con Doctor: ${selected?.name}
        Día: ${day}
        Hora: ${hour}`
            )
          }
        >
          Agendar Hora
        </button>
      </div>
    );
  }
}

// @ts-ignore
AppointmentForm.propTypes = {
  doctorsData: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      services: PropTypes.arrayOf(PropTypes.string).isRequired,
      years: PropTypes.number.isRequired,
    })
  ).isRequired,
  hours: PropTypes.arrayOf(PropTypes.string).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppointmentForm;
