import React from 'react';
import SolarIcon from '../images/about_solar_icon.png';
import ElectricIcon from '../images/about_electric_icon.png';
import InverterIcon from '../images/about_inverters.png';
import Navbar from '../components/Navbar/Navbar';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
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