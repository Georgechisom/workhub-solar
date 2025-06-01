import React from 'react';
import Logo from "../images/workhublogo.png";
import SolarIcon from '../images/about_solar_icon.png';
import ElectricIcon from '../images/about_electric_icon.png';
import InverterIcon from '../images/about_inverters.png';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImage from "../images/workhub_porfolio.jpeg"
import "../components/otherCss/portfolio.css"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <Navbar />

      <section className='max-w-screen-xl lg:my-10 mx-auto w-full h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden lg:rounded-2xl py-16 md:py-10 items-center justify-center portbg' style={{ backgroundImage: `url('${BackgroundImage}')`, objectFit: "cover", }}>
        <div>
            <div className='flex items-center justify-between px-6 lg:px-20'>
              <Link to="/"><img src={Logo} alt='Logo' className='w-28 md:w-32 lg:w-32 mt-2 mb-2 object-cover cursor-pointer invert md:filter-none'/></Link>
              <div className='flex flex-col text-white gap-y-2 md:gap-y-3 lg:gap-y-4 py-8'>
                <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer'to="/">Home</Link>
                <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2 text-[#DC143C]' to="/portfolio">Portfolio</Link>
                <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/service">Service</Link>
                <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/contact">Contact</Link>
                <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/blog">Blog</Link>
              </div>
            </div>
            <div className='py-4 px-4 md:px-6 lg:px-20'>
              <span className='rounded-full bgspecial italic relative text-sm md:text-base mymover' >
                MULTIPURPOSE
                <span className="absolute inset-0 z-0"></span>
              </span>
              <div className='flex flex-col lg:flex-row lg:items-end'>
                <p className='text-whiteText font-bold lg:font-bold text-4xl md:text-5xl lg:text-6xl py-12 md:py-10 lg:py-16 w-full'>
                  Our Portfolio
                </p>
                <div className='italic hidden  md:grid grid-cols-1 py-4 md:py-10 lg:py-8 font-semibold text-white w-full'>
                  <span>Utility Technology</span>
                  <span>Harnessing <b className='text-[#DC143C]'>THE POWER</b> of Electricity, Plumbing, and More </span>
                </div>
              </div>
              <Link to="/contact" className='rounded-r-full bg-white px-7 py-2 font-bold w-[150px] h-[40px] cursor-pointer hover:italic flex text-nowrap justify-center items-center gap-x-2 hover:bg-transparent hover:border-2 hover:border-[#DC143C] text-[#DC143C] mymoveeff'>
                Hire Us
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
              </Link>
            </div>
        </div>
      </section>

      {/* solar panels */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText'>
        <h3>
          We are dedicated to providing exceptional all-around service, leveraging our expertise, hard work, and meticulous attention to detail to handle every aspect of your needs, including solar installation, electrical work, plumbing, and more.
        </h3>
        <div className='flex flex-col md:flex-row lg:flex-row py-10 gap-y-8 md:gap-x-5 lg:gap-x-5'>
          <div className='border-2 border-black rounded-lg shadow-md shadow-black py-4 px-4'>
            <img src={SolarIcon} alt='solar_icon' className='w-9 object-cover mx-auto animate-bounce' />
            <h3 className='text-center font-semibold text-xl my-4'>Efficient Solar Panels</h3>
            <p>
              Our solar panels deliver maximum efficiency ensuring you get the most out of every ray of sunshine
            </p>
          </div>
          <div className='border-2 border-black rounded-lg shadow-md shadow-black py-4 px-4'>
            <img src={ElectricIcon} alt='solar_icon' className='w-9 object-cover mx-auto animate-pulse' />
            <h3 className='text-center font-semibold text-xl my-4'>Reliable Energy Storage</h3>
            <p>
              Our batteries store solar energy efficiently, ensuring uninterrupted power anytime.
            </p>
          </div>
          <div className='border-2 border-black rounded-lg shadow-md shadow-black py-4 px-4'>
                  <img src={InverterIcon} alt='solar_icon' className='w-9 object-cover mx-auto animate-pulse' />
                  <h3 className='text-center font-semibold text-xl my-4'>Smart Inverter Tech</h3>
                  <p>
                    Optimize energy use with intelligent inverters that efficiently convert and regulate solar power.
                  </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio