import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo-blanc.svg';

function Header({ task }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='w-11/12 flex flex-row pl-4 pt-9 justify-between items-center mx-auto sm:p-9 relative z-10' >
            <img className='w-[100px] sm:w-[180px] sm:mt-6 object-contain' src={logo} alt="Logo" />

            <button
                className='sm:hidden text-white text-2xl'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <ul
                className={`absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-4 text-white  text-sm poppins-semibold font-poppins sm:relative sm:flex sm:flex-row sm:gap-8 sm:bg-transparent sm:top-auto sm:w-auto sm:py-0 ${menuOpen ? 'block' : 'hidden sm:flex'}`}
            >
                {task.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-[-14px] after:h-[3px] after:rounded-full after:transition-all after:duration-300
                                ${isActive
                                    ? 'after:w-full after:bg-gradient-to-r after:from-[#E6007E] after:to-[#006AFF]'
                                    : 'after:w-0 hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-[#E6007E] hover:after:to-[#006AFF]'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Header;
