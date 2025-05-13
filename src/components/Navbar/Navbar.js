import React, { useEffect, useState } from 'react';
import Logo from "../../images/workhublogo.png";
import { Link } from 'react-router-dom';
import Menu from "../../images/solarmenu.png";
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollWork, setScrollWork] = useState(false);
    const [openMenu, setOpenMenu] = useState(true);
    const [closeMenu, setCloseMenu] = useState(false);

    const open = () => {
      setOpenMenu(!openMenu)
      setIsOpen(!isOpen);
      setCloseMenu(true)
    };

    const close = () => {
      setCloseMenu(false)
      setOpenMenu(!openMenu)
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrollWork(true);
          } else {
            setScrollWork(false);
        }
      };
        
      window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <nav className={scrollWork ? 'navbar w-full fixed lg:sticky md:sticky sm:sticky sm:left-0 sm:right-0 top-0 sm:top-0 md:top-0 z-50 text-[#DC143C] duration-200' : 'hidden bg-backgroundText'}>
        <div className='max-w-screen-xl mx-auto h-20 md:h-24 lg:h-28 flex items-center justify-between md:justify-center px-4 lg:px-0'>
            <Link to="/" className='inline-flex md:hidden'>
              <img src={Logo} alt='logo' className='w-20 object-cover md:-ml-0'/>
            </Link>
          
          <div className='hidden md:inline-flex max-w-3xl items-center justify-center gap-x-12 cursor-pointer font-semibold duration-200 relative overflow-hidden group text-lg'>
            <Link className='hover:italic hover:font-bold' to="/">Home</Link>
            <Link className='hover:italic hover:font-bold' to="/portfolio">Portfolio</Link>

            <Link><img src={Logo} alt='Logo' className='w-28 md:w-32 lg:w-32 mt-4 mb-2 object-cover'/></Link>

            <Link className='hover:italic hover:font-bold' to="/service">Service</Link>
            <Link className='hover:italic hover:font-bold' to="/contact">Contact</Link>
          </div>
            <button onClick={open} className={openMenu ? 'flex md:hidden lg:hidden items-center justify-center cursor-pointer rounded-md border-2 border-black w-14 py-2 px-2 hover:shadow-md hover:shadow-black' : 'hidden md:hidden lg:hidden'}>
                <img src={Menu} alt='menu' className='w-7 object-cover animate-pulse' />
            </button>

            {/* Sliding Menu */}
            <div 
                className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg z-10 overflow-x-hidden font-bold flex justify-center items-center transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button className={closeMenu ? 'inline-flex md:hidden items-center justify-center cursor-pointer absolute top-0 right-0 mr-3 mt-5 text-[#DC143C] text-4xl rounded-md px-3 font-semibold z-10 right-o animate-pulse' : 'hidden md:hidden lg:hidden'} onClick={close}>
                 &times;
                </button>
                <div className="mt-5 font-semibold text-[#DC143C] flex flex-col justify-center items-center gap-y-10">
                  <Link className='hover:italic hover:font-bold' to="/">Home</Link>
                  <Link className='hover:italic hover:font-bold' to="/portfolio">Portfolio</Link>
                  <Link className='hover:italic hover:font-bold' to="/service">Service</Link>
                  <Link className='hover:italic hover:font-bold' to="/contact">Contact</Link>
                </div>
            </div>
        </div>
      </nav>
    );
};

export default Navbar;