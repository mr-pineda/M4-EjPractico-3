import hospLogo from '../assets/Hlogo.svg';
import { SCREENS } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const sectionList = [
    { name: SCREENS.HOME, url: '/' },
    { name: SCREENS.ABOUT, url: '/about' },
    { name: SCREENS.CONTACT, url: '/contact' },
  ];

  return (
    <header className='flex flex-row justify-between h-15 bg-sky-500 px-2'>
      <div className='flex flex-row items-center my-2'>
        <img src={hospLogo} className='h-14 mr-3' alt='Logo Hospital' />
        <span className='align-middle text-3xl'>Nombre Hospital</span>
      </div>

      <ul className='flex flex-row items-center'>
        {sectionList.map(({ name, url }, idx) => (
          <li
            key={idx}
            className='flex items-center ml-3 my-0 hover:bg-sky-700 h-full px-3'
          >
            <Link to={url} style={{ color: 'white', fontSize: 22 }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
