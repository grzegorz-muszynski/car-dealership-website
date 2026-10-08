import { useEffect, useState, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menuBtn from '../assets/siteHeader/menuBtn.png';
import logo from '../assets/siteHeader/logo.webp';
import { SocialRow } from './SocialSidebar';

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    let menuRef: any = useRef();
    let buttonRef: any = useRef();

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function hideMenu() {
        setMenuOpen(false);
    }

    // useEffect below closes menu whenever sth not being NavBar is clicked
    useEffect(() => {
        function handler(e: any) {
            if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                hideMenu();
            }
        }
        document.addEventListener('mousedown', handler);
    })

    return (
        <div className='w-full relative
        xl:w-[1200px] mx-auto text-17 font-semibold'>

            {/* Logo with a link (the phone number is part of the graphic) */}
            <div className='block w-full max-w-[960px] my-3 mx-auto px-3
                lg:max-w-[640px]'>
                <NavLink to='/'>
                    <img
                        className='block w-full h-auto'
                        src={logo}
                        alt='Alfa Motors - Centrum Wyselekcjonowanych Krajowych Samochodów Marek Premium, tel. 505 964 955'
                    />
                </NavLink>
            </div>

            {/* Menu button - framed and labelled, so it's clear it opens the other pages */}
            <button
                className='flex items-center justify-center gap-3 w-48 mx-auto mb-3 py-2
                border-2 border-gold rounded-md text-gold text-lg tracking-widest cursor-pointer
                active:bg-panel-hover
                lg:hidden'
                onClick={toggleMenu}
                ref={buttonRef}
                aria-expanded={menuOpen}
            >
                <img className='h-5 w-5' src={menuBtn} alt='' />
                MENU
            </button>

            {/* Navbar - a dropdown below the header on small screens, a regular row below the logo on large ones */}
            <ul className={`absolute z-20 top-full w-full text-xl
                lg:static lg:text-center
                ${menuOpen ? 'siteHeader__navbar--shown' : 'siteHeader__navbar--hidden'}`}
                ref={menuRef}
            >
                <NavLink onClick={hideMenu} to='/' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/' && 'text-gold'}`}>Oferta</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/sold/1' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname.startsWith('/sold') || location.pathname.startsWith('/Sold') ? 'text-gold' : ''}`}>Sprzedane</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/about' > 
                     <li className='siteHeader__li'>
                         <span className={`siteHeader__li__span  ${location.pathname === '/about' && 'text-gold'}`}>O nas</span>                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/opinie' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/opinie' && 'text-gold'}`}>Opinie</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/buy' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/buy' && 'text-gold'}`}>Odkup pojazdów</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/financing' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/financing' && 'text-gold'}`}>Finansowanie</span>
                    </li>
                </NavLink> 
                <NavLink onClick={hideMenu} to='/contact' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/contact' && 'text-gold'}`}>Kontakt</span>
                    </li>
                </NavLink>
                {/* Social media icons - only in the mobile menu, on bigger screens they're in the side column */}
                <li className='sm:hidden'>
                    <SocialRow />
                </li>
            </ul>
        </div>
    )
}