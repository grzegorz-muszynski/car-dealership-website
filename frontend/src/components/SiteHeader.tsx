import { useEffect, useState, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menuBtn from '../assets/siteHeader/menuBtn.png';
import logo from '../assets/siteHeader/logo.webp';
import phoneIcon from '../assets/contact/phoneIcon.png';    

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

            {/* Logo with a link - from md up it fills the width left by the phone number (and menu button on md) */}
            <div className='block w-full max-w-lg my-3 mx-auto px-3
                sm:max-w-none sm:inline-block sm:w-[520px] sm:ml-6 sm:px-0
                md:w-[calc(100%-285px)]
                lg:w-[calc(100%-290px)] lg:ml-11'
            >
                <NavLink to='/'>
                    <img
                        className='block w-full h-auto'
                        src={logo}
                        alt='Alfa Motors - Centrum Wyselekcjonowanych Krajowych Samochodów Marek Premium'
                    />
                </NavLink>
            </div>

            {/* Menu button */}
            <img 
                className='block mx-auto mb-3 h-5 w-5 cursor-pointer
                sm:inline-block sm:float-right sm:mr-4 sm:mt-4
                lg:hidden'
                src={menuBtn}
                onClick={toggleMenu}
                ref={buttonRef}
                alt='Najlepsze samochody używane w Małopolsce'
            />

            {/* Phone number with an icon */}
            <div className='SiteHeader__phoneData hidden mt-4 mr-4 text-lg lg:text-xl
            sm:hidden
            md:block md:absolute md:top-0 md:right-10
            lg:right-0'>
                <img className='inline-block h-5 align-middle' src={phoneIcon} alt="Znajdź auto klasy premium" />
                <p className='inline-block px-2 align-middle'>+48 505 964 955</p>
            </div>

            {/* Navbar - a dropdown below the header on small screens, a regular row below the logo on large ones */}
            <ul className={`absolute z-20 top-full w-full text-xl
                lg:static lg:clear-both lg:pl-3
                ${menuOpen ? 'siteHeader__navbar--shown' : 'siteHeader__navbar--hidden'}`}
                ref={menuRef}
            >
                <NavLink onClick={hideMenu} to='/' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/' && 'text-gray-300'}`}>Oferta</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/sold/1' >
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname.startsWith('/sold') || location.pathname.startsWith('/Sold') ? 'text-gray-300' : ''}`}>Sprzedane</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/about' > 
                     <li className='siteHeader__li'>
                         <span className={`siteHeader__li__span  ${location.pathname === '/about' && 'text-gray-300'}`}>O nas</span>                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/buy' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/buy' && 'text-gray-300'}`}>Odkup pojazdów</span>
                    </li>
                </NavLink>
                <NavLink onClick={hideMenu} to='/financing' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/financing' && 'text-gray-300'}`}>Finansowanie</span>
                    </li>
                </NavLink> 
                <NavLink onClick={hideMenu} to='/contact' > 
                    <li className='siteHeader__li'>
                        <span className={`siteHeader__li__span  ${location.pathname === '/contact' && 'text-gray-300'}`}>Kontakt</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}