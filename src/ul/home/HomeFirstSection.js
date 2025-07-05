import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../../images/workhublogo.png";
import { BackgroundImage, BackgroundImage1, BackgroundImage2 } from '../../images/myImg'


const HomeFirstSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideData = [
        { url: BackgroundImage, 
          caption: 'A RAY OF HOPE WITH SOLAR ENERGY SOLUTIONS FOR A SUSTAINABLE TOMORROW', 
          energy: "Solar Energy", 
          style: { color: "orange", },
          backgroundColor: "rgba(117, 43, 5, 0.3)",
        },
        { url: BackgroundImage1, 
          caption: 'SPARK INNOVATION BY UNLEASHING THE POTENTIAL ENERGY WITH ADVANCED TECHNOLOGY', 
          energy: "Electric Energy", 
          style: { color: "#DC143C", },
          backgroundColor: "rgba(21, 93, 149, 0.51);", 
        },
        { url: BackgroundImage2, 
          caption: 'PIPE DREAM TO REALITY VIA DELIVERING EFFICIENT PLUMBING SOLUTIONS FOR A BETTER WORLD', 
          energy: "Pipe Synergy", 
          style: { color: "#26d367", },
          backgroundColor: "rgba(142, 180, 134, 0.294)",
        },
      ];
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % slideData.length);
        }, 9000); //change image every 5 seconds
        return () => clearInterval(intervalId);
      }, [currentIndex, slideData.length]);

    return (
        <div>
            <section className='mx-auto w-full h-[800px] md:h-[800px] lg:h-[900px] overflow-hidden py-16 md:py-10 items-center justify-center bgcss' style={{ backgroundImage: `url('${slideData[currentIndex].url}')`, objectFit: "cover", backgroundColor: `url('${slideData[currentIndex].backgroundColor}')` }}>
                <div className=''>
                <div className='flex items-center justify-between px-6 lg:px-20'>
                    <Link to="/"><img src={Logo} alt='Logo' className='w-28 md:w-32 lg:w-32 mt-2 mb-2 object-cover cursor-pointer'/></Link>
                    <div className='flex flex-col text-white gap-y-2 md:gap-y-3 lg:gap-y-4 py-8'>
                    <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer'to="/" style={slideData[currentIndex].style} >Home</Link>
                    <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/portfolio">Portfolio</Link>
                    <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/service">Service</Link>
                    <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/contact">Contact</Link>
                    <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/blog">Blog</Link>
                    </div>
                </div>
                <div className='py-4 px-4 md:px-6 lg:px-20'>
                    <span className='rounded-full bgspecial italic relative text-sm md:text-base mymover' style={slideData[currentIndex].style} >
                    {slideData[currentIndex].energy}
                    <span className="absolute inset-0 z-0"></span>
                    </span>
                    <div className='flex flex-col lg:flex-row lg:items-end'>
                    <p className='text-white font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-6xl py-8 md:py-10 lg:py-16'>
                        {slideData[currentIndex].caption}
                    </p>
                    <div className='italic hidden  md:grid grid-cols-1 py-4 md:py-10 lg:py-8 font-semibold text-white w-full'>
                        <span>Utility Technology</span>
                        <span>Harnessing <b style={slideData[currentIndex].style}>THE POWER</b> of Electricity, Plumbing, and More </span>
                    </div>
                    </div>
                    <Link to="/contact" className='rounded-r-full bg-white px-7 py-2 font-bold w-[150px] h-[40px] cursor-pointer hover:italic flex text-nowrap justify-center items-center gap-x-2 hover:bg-transparent hover:border-2 hover:border-current mymoveeff' style={slideData[currentIndex].style}>
                    Hire Us
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                    </Link>
                </div>
                </div>
            </section >
        </div>
    )
};

export default HomeFirstSection;