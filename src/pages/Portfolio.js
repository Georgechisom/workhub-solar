import React, { useState } from 'react';
import Logo from "../images/workhublogo.png";
import SolarIcon from '../images/about_solar_icon.png';
import ElectricIcon from '../images/about_electric_icon.png';
import InverterIcon from '../images/about_inverters.png';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImage from "../images/workhub_porfolio.jpeg";
import "../components/otherCss/portfolio.css";
import { Link } from 'react-router-dom';
import ElectricExhibit from "../images/our_electric_service.jpg";
import SkilledExhibit from "../images/skilledMen.JPG";
import TwoBattery from "../images/twoBattery.JPG";
import SunPanel from "../images/firstbg.webp";
import PanelLongSolar from "../images/solarlongpanels.JPG";
import Pans from "../images/PanPanel.JPG";
import HubMan from "../images/workhub_man.JPG";
import ExhibitInteriors from "../images/interiors.jpg";
import SoCamera from "../images/solar_camera.JPG";
import CellCamera from "../images/upcam.JPG";
import RearCamera from "../images/real_camera.JPG";
import ElectricWork from '../images/electric_check.png';
import HandPlumb from "../images/our_plumbing_service.webp";
import AllMen from "../images/plum_Gmen.JPG";
import AllStaff from "../images/staff_working.jpeg";
import PlumbTool from "../images/plumShop1.jpeg";
import PlumbTools from "../images/plumShop2.jpeg";
import PlumbToolss from "../images/plumShop3.jpeg";
import NewWorkhub from "../images/white_workhub.JPG";




const Portfolio = () => {

  const [showExhibition, setShowExhibition] =  useState(true);
  const [showExhibitions, setShowExhibitions] =  useState(false);
  const [showMyExhibition, setShowMyExhibition] =  useState(false);

  const solarDisplay = () => {
    setShowExhibition(true);
    setShowExhibitions(false);
    setShowMyExhibition(false);
  };

  const solarDisplaySecond = () => {
    setShowExhibition(false);
    setShowExhibitions(true);
    setShowMyExhibition(false);
  };

  const solarDisplayThird = () => {
    setShowExhibition(false);
    setShowExhibitions(false);
    setShowMyExhibition(true);
  };


  return (
    <div>
      <Navbar />

      <section className='mx-auto w-full h-[800px] md:h-[800px] lg:h-[900px] overflow-hidden py-16 md:py-10 items-center justify-center portbg' style={{ backgroundImage: `url('${BackgroundImage}')`, objectFit: "cover", }}>
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
                <p className='text-whiteText font-bold lg:font-bold text-4xl md:text-5xl lg:text-6xl py-8 md:py-10 lg:py-16 w-full'>
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
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-white'>
        <h1 className='font-bold text-2xl text-center my-5 py-3'>Our Works</h1>
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
      
      {/* Exhibition */}
      <section className="max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText" >
        <div>
          <div className="text-center my-10">
            <hr className="w-36 h-2 md:h-3 bg-[orange] -rotate-6 mx-auto my-1" />
            Not Convinced
          </div>
          <div className="text-center font-bold my-5 text-2xl">
            See How We're Powering Change with Our Recent Projects
          </div>
          <div className='lg:hidden flex flex-row gap-x-4 text-sm text-[black] font-semibold justify-center p-4 md:justify-start mt-10'>
            <div className={ showExhibition ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplay}>Exhibition 1</div>
            <div className={ showExhibitions ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplaySecond}>Exhibition 2</div>
            <div className={ showMyExhibition ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplayThird}>Exhibition 3</div>
          </div>
          <div className={showExhibition ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 items-center justify-center content-center" : "hidden"}>
            <div>
              <img src={PanelLongSolar} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={TwoBattery} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={SkilledExhibit} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div className="lg:col-start-1 lg:col-span-3 ">
              <img src={SunPanel} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={HubMan} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div className='lg:col-span-2'>
              <img src={Pans} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
          </div>
          <div className={showExhibitions ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 items-center justify-center content-center" : "hidden"}>
            <div className='lg:col-span-2'>
              <img src={ExhibitInteriors} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={ElectricExhibit} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div >
              <img src={SoCamera} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={CellCamera} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={RearCamera} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div className='lg:col-start-1 lg:col-span-3'>
              <img src={ElectricWork} alt="electricImage" className='object-cover h-[300px] lg:h-[400px] w-full rounded-lg' />
            </div>
          </div>
          <div className={showMyExhibition ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 items-center justify-center content-center" : "hidden"}>
            <div className='lg:col-start-1'>
              <img src={HandPlumb} alt="electricImage" className='object-cover h-[300px] lg:h-[400px] w-full rounded-lg' />
            </div>
            <div className='lg:col-span-2'>
              <img src={AllStaff} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={PlumbTools} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={PlumbTool} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={AllMen} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
            <div>
              <img src={PlumbToolss} alt="electricImage" className='object-cover h-[300px] w-full rounded-lg' />
            </div>
          </div>
          <div className='flex flex-row gap-x-4 text-sm text-[black] font-semibold justify-center p-4 md:justify-start'>
            <div className={ showExhibition ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplay}>Exhibition 1</div>
            <div className={ showExhibitions ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplaySecond}>Exhibition 2</div>
            <div className={ showMyExhibition ? "cursor-pointer hover:italic hover:font-medium text-[#DC143C] border-b-2 border-[#DC143C] pb-1 w-24 text-center text-nowrap" : "cursor-pointer hover:italic hover:font-medium text-black text-center text-nowrap"} onClick={solarDisplayThird}>Exhibition 3</div>
          </div>
          <div>
            <div>
              <divv></divv>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 items-center justify-center content-center'>
                <img src={ElectricExhibit} className='lg:col-start-1 object-cover h-[300px] w-full rounded-lg' alt='colited_image' />
                <img src={AllStaff} className='lg:col-start-2 object-cover h-[500px] w-full rounded-lg' alt='colited_image' />
                <img src={NewWorkhub} className='lg:col-start-3 object-cover h-[300px] w-full rounded-lg' alt='colited_image' />
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default Portfolio