import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoPersonSharp } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Header = () => {

    const linkz = [
        {
            icon: AiFillHome,
            h3: 'home',
            to: '/',
        },
        {
            icon: IoPersonSharp,
            h3: 'about',
            to: '/about',
        },
        {
            icon: FaBriefcase,
            h3: 'portfolio',
            to: '/portfolio',
        },
        {
            icon: GrMail,
            h3: 'contact',
            to: '/contact',
        }
    ];

    return (
        <header className='header'>
            <nav>
                {linkz.map(link => (
                    <NavLink
                        onMouseOver={() => { document.querySelector(`.${link.h3}`).classList.remove('hidden') }}
                        onMouseLeave={() => { document.querySelector(`.${link.h3}`).classList.add('hidden') }}
                        className="header-link"
                        key={link.h3}
                        to={link.to}>
                        <h3 className={`${link.h3} hidden`}>{link.h3}</h3>
                        <link.icon className='header-icon' />
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header