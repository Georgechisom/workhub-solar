import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImage from "../images/services_bg.jpeg";
import { Link } from 'react-router-dom';
import Logo from "../images/workhublogo.png";
import "../components/otherCss/service.css";
import ServiceRobot from "../images/service_img_rem.png";
import Experts from "../images/skilledTwoMen.JPG";
import SolarVideo from "../videos/solarVideo.mp4";
import SomeStaff from "../images/staff_working.jpeg";
import Battery from "../images/battery.JPG";
import SecondBackgroundImage from "../images/service_advance_bg.jpeg";
import Tools from '../components/utilities/Tools';
import Footer from '../components/Footer/Footer';



const Service = () => {

  return (
    <div>
      <Navbar />
            
      <section className='max-w-screen-xl lg:my-10 mx-auto w-full h-full overflow-hidden lg:rounded-2xl py-16 md:py-10 items-center justify-center bgcssa' style={{ backgroundImage: `url('${BackgroundImage}')`, objectFit: "cover", }}>
        <div className='pt-10 md:pt-0'>
          <div className='flex items-center justify-between px-6 lg:px-20'>
            <Link to="/"><img src={Logo} alt='Logo' className='w-28 md:w-32 lg:w-32 mt-2 mb-2 object-cover cursor-pointer invert md:filter-none'/></Link>
            <div className='flex flex-col text-white gap-y-2 md:gap-y-3 lg:gap-y-4 py-8'>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer'to="/">Home</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/portfolio">Portfolio</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer text-[#DC143C]' to="/service">Service</Link>
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
              <p className='text-whiteText font-bold lg:font-bold text-4xl md:text-5xl lg:text-6xl py-8 md:py-10 lg:py-16 w-full'>
                Our Services
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
          {/* style={{ backgroundImage: `url('${slideData[currentIndex].url}')`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" , width: "100vw", transition: "background-images 1s ease-in-out", }} */}
        </div>
      </section >

      <Tools />

      {/* our services */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText'>
        <div>
          <div className='text-center py-5 w-full'>
            <div className='text-nowrap text-3xl font-bold text-center py-5'>
              Our Services
            </div>
            <h1 className="py-3 font-semibold text-[#DC143C]">
              We specialize in providing  top notch solar, electrical, and plumbing solutions, ensuring efficient, reliable and sustainable services for all your energy needs.
            </h1>
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center py-4 my-5 gap-4'>
            <div className='w-full h-full lg:w-[990px] l mx-auto py-3 px-3'>
              <img src={ServiceRobot} alt='service_image' className='object-cover mx-auto lg:mx-0 h-auto lg:h-[500px]' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-4 gap-y-8 md:gap-y-4'>

              <div className='w-full h-64 overflow-hidden rounded-md vishadow py-8 px-5 bg-white'>
                
                <div className='font-bold text-xl text-[#DC143C] py-4 flex items-center gap-x-4'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="animate-pulse" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
                  Solar Panel Installation
                </div>
                <p className='text-black pb-4'>
                  Harness the power of the sun with our expert solar solutions.
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start items-center font-semibold w-32 py-2 hover:gap-x-4 text-[#DC143C]">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>

              <div className='w-full h-64 overflow-hidden rounded-md vishadow py-8 px-5 text-white servicedivbg'>
                
                <div className='font-bold text-[orange] text-xl py-4 flex items-center gap-x-4'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="28" width="28" className='animate-pulse' xmlns="http://www.w3.org/2000/svg"><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></svg>
                  Electrical Repairs and Installation
                </div>
                <p className='text-white pb-4'>
                  safe and efficient wiring, lighting and power solutions
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start text-[orange] items-center font-semibold w-32 py-2 hover:gap-x-4">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>
              
              <div className='hidden md:block w-full h-64 overflow-hidden rounded-md vishadow py-8 px-5 text-white servicedivbg'>
                <div className='font-bold text-[orange] text-xl py-4 flex items-center gap-x-4'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="animate-pulse" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>
                  Plumbing Services
                </div>
                <p className='text-white pb-4'>
                  From pipe repairs to full installations, we ensure seamless piping solutions
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start items-center font-semibold w-32 py-2 hover:gap-x-4 text-[orange]">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>

              <div className='block md:hidden lg:hidden w-full h-64 overflow-hidden rounded-md vishadow py-8 px-5 text-white bg-white'>
                <div className='font-bold text-[#DC143C] text-xl py-4 flex items-center gap-x-4'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="animate-pulse" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>
                  Plumbing Services
                </div>
                <p className='text-black pb-4'>
                  From pipe repairs to full installations, we ensure seamless piping solutions
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start items-center font-semibold w-32 py-2 hover:gap-x-4 text-[#DC143C]">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>

              <div className='hidden md:block w-full h-64 overflow-hidden rounded-md vishadow py-8 px-5 bg-white'>
                
                <div className='font-bold text-xl text-[#DC143C] py-4 flex items-center gap-x-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" stroke="currentColor" fill="currentColor" strokeWidth="0" className='animate-pulse' viewBox="0 0 50 50">
                    <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z"></path>
                  </svg>
                  Maintenance and Inspection
                </div>
                <p className='text-black pb-4'>
                  Regular check ups to keep your systems running perfectly
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start items-center font-semibold w-32 py-2 hover:gap-x-4 text-[#DC143C]">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>

              <div className='block md:hidden lg:hidden w-full h-64 overflow-hidden rounded-md shadow-lg shadow-black py-8 px-5 servicedivbg'>
                
                <div className='font-bold text-xl text-[orange] py-4 flex items-center gap-x-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" stroke="currentColor" fill="currentColor" strokeWidth="0" className='animate-pulse' viewBox="0 0 50 50">
                    <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z"></path>
                  </svg>
                  Maintenance and Inspection
                </div>
                <p className='text-white pb-4'>
                  Regular check ups to keep your systems running perfectly
                </p>
                <Link to="/portfolio" className="hover:font-semibold text-nowrap flex justify-start items-center font-semibold w-32 py-2 hover:gap-x-4 text-[orange]">
                  View More 
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our experts */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-whiteText'>
        <div className='grid justify-center items-center grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5 py-10 md:py-16 px-1 md:px-5'>
         <div className='block items-start'>
            <div className='text-[#f3a61a]'>TRUSTED EXPERTS</div>
            <h2 className='my-4 text-xl font-bold'>
              Skilled technicians delivering high quality and excellent service.
            </h2>
            <img src={Experts} alt="technicians" className='object-cover w-[400px] h-[300px] rounded-xl hover:shadow-md hover:shadow-black' />
         </div>
         <div className="mx-auto rounded-xl">
          <video autoPlay loop muted controls width={400} height={150} className="rounded-xl vishadow hover:shadow-lg hover:shadow-black">
            <source src={SolarVideo} type="video/mp4" />
            Download the <a href={SolarVideo}>MP4</a> video.
          </video>
         </div>
         <div className='block items-end text-left md:text-right'>
            <img src={SomeStaff} alt="technicians" className='object-cover w-[400px] h-[300px] rounded-xl ml-0 md:ml-auto hover:shadow-md hover:shadow-black' />
            <div className='text-xl font-bold my-3'>
              Customer Satisfaction, Reliability and Affordability
            </div>
            <h2 className='font-normal text-gray-400'>
              We prioritize your comfort, convenience and quality service at competitive prices
            </h2>
         </div>
        </div>
      </section>

      {/* get started */}
      <section className='max-w-screen-xl lg:my-10 mx-auto w-full h-full overflow-hidden lg:rounded-2xl py-16 md:py-10 items-center justify-center bgcsstwo' style={{ backgroundImage: `url('${SecondBackgroundImage}')`, objectFit: "cover", }}>
        <div className="py-40 md:px-10 text-center">
          <div className='font-semibold py-5 text-lg text-white'>
            Ready to Upgrade Your Home or Business ?
          </div>
          <div className=" mx-auto py-1 border-2 border-white w-[250px] md:w-[300px] rounded-full px-1 overflow-hidden">
            <Link to="/contact" className='rounded-full bg-[orange] py-4 font-bold cursor-pointer hover:italic flex text-nowrap justify-center items-center gap-x-1 hover:bg-white hover:text-[black] hover:border-b-2 hover:gap-x-4 text-[black] mybttnseff2'>
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:py-20 lg:px-20 items-center justify-center bg-backgroundText'>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-5 gap-5">
          <div className='h-full rounded-xl'>
            <img src={Battery} alt="battery_image" className='object-cover rounded-xl mx-auto lg:w-full lg:h-full w-[400px] h-[400px]' />
          </div>
          <div  className='h-full'>
            <div className='block items-start h-full'>
              <div className='text-[#DC143C] mt-7 md:py-1'>Why Choose Us?</div>
              <h2 className='my-4 text-xl font-bold'>
                  We deliver exceptional sevices for homes and businesses, setting the standard for excellence in every project we undertake.
              </h2>
              <div className='grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-5 my-5 py-5'>
                <div className='px-4 py-6 h-48 md:h-52 vishadow bg-white'>
                  <div className='my-3 font-semibold text-lg'>Renewable Energy Solutions</div>
                  <div>Sustainable and cost effective solar systems.</div>
                </div>
                <div className='px-4 py-6 h-48 md:h-52 vishadow bg-white'>
                  <div className='my-3 font-semibold text-lg'>Expert Electrical Work</div>
                  <div>From minor fixes to complete installations.</div>
                </div>
                <div className='px-4 py-6 h-48 md:h-52 vishadow bg-white'>
                  <div className='my-3 font-semibold text-lg'>
                    Plumbing You Can Rely On
                  </div>
                  <div>Quick, clean, and professional service.</div>
                </div>
                <div className='px-4 py-6 h-48 md:h-52 vishadow bg-white'>
                  <div className='my-3 font-semibold text-lg'>
                    24/7 Support & Emergency Services
                  </div>
                  <div> We're here when you need us. </div>
                </div>
              </div>
              <div className="my-10">
                <Link to="/contact" className='rounded-full bg-[orange] py-4 font-bold cursor-pointer hover:italic flex text-nowrap justify-center items-center gap-x-1 hover:bg-white hover:text-[black] hover:border-b-2 hover:border-r-2 hover:border-[black] hover:gap-x-4 text-[black] mybttnseff vishadow'>
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Service;