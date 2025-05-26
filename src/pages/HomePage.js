import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BackgroundImage from "../images/solarlongpanels.JPG";
import BackgroundImage1 from "../images/interiors.jpg";
import BackgroundImage2 from "../images/our_plumbing_service.webp";
import Logo from "../images/workhublogo.png";
import { Link } from 'react-router-dom';
import "../components/otherCss/home.css";
import AboutUs from '../images/services-people.jpeg';
import AboutDots from '../images/six_dots.png';
import DoAll from '../images/do_it_all.jpeg';
import Arrow from '../images/down-arrow.png';
import ElectricWork from '../images/electric_check.png';
import emailjs from '@emailjs/browser';
import SolarBlog from "../images/firstbg.webp"
import Interiors from "../images/interiors.jpg"
import Tools from '../components/utilities/Tools';
import Footer from '../components/Footer/Footer';


const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPort, setShowPort] = useState(true);
  const [showPortsec, setShowPortsec] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showImagesec, setShowImagesec] = useState(false);
  const [showPortthird, setShowPortthird] = useState(true);
  const [showImagethird, setShowImagethird] = useState(false);
  const [expandDiv, setExpandDiv] =  useState(null);
  const [emailSent, setEmailSent] =  useState(false);
  const [errorSent, setErrorSent] =  useState(false);


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

  const divsArray = [
    <div key="plumbing" className='service-div ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" className='animate-pulse' viewBox="0 0 50 50">
                <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z"></path>
              </svg>
            </div>
            <div><h3 className='font-semibold text-sm md:text-base'>Plumbing</h3></div>
        </div>
      </div>
    </div>,
    <div key="installation" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='animate-pulse' viewBox="0 0 24 24"><path className="cls-1" d="M14.87 5.28a2.87 2.87 0 1 1-.84-2 2.89 2.89 0 0 1 .84 2zM12 2.41V.5M12 10.07V8.15M9.13 5.28H7.22M16.78 5.28h-1.91M9.97 3.25 8.61 1.9M15.39 8.67l-1.36-1.36M9.97 7.31 8.61 8.67M15.39 1.9l-1.36 1.35M21.57 22.5H2.44l3.82-10.52h11.48l3.83 10.52zM5.22 14.85H18.78M3.82 18.67h16.36M10.09 11.98 8.17 22.5M13.91 11.98l1.92 10.52"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Solar power installation and maintenance</h1></div>
        </div>
      </div>
    </div>,
    <div key="smoke" className='service-div mt-6 ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" className='animate-pulse' viewBox="0 0 48 48"><g id="Smoke_Detector" data-name="Smoke Detector"><path d="M47 9c0 1.94.13 2.83-.54 4A4 4 0 0 1 43 15H5a4 4 0 0 1-4-4V9a2 2 0 0 1 2-2h42a2 2 0 0 1 2 2z"/><path d="M47 9a5.09 5.09 0 0 1-.54 3H10a5 5 0 0 1-5-5h40a2 2 0 0 1 2 2z"/><path className="cls-3" d="m8 15 .86 6H15v4H9.43l.33 2.28a2 2 0 0 0 2 1.72h24.5a2 2 0 0 0 2-1.72c0-.37 0 0 .33-2.28H33v-4h6.14c.69-4.81.49-3.48.86-6zm21 10H19v-4h10z"/><path d="M13 15v6h2v4h-2a2 2 0 0 0 2 2h23.28l.29-2H33v-4h6.14c.69-4.81.49-3.48.86-6zm16 10H19v-4h10z"/><path className="cls-5" d="M21.17 35.41a1 1 0 0 1 1.42 0 2 2 0 0 0 2.82 0 1 1 0 0 1 1.42 1.42c-2.69 2.69-7.14.07-5.66-1.42z"/><path className="cls-5" d="M18.34 39.66a1 1 0 0 1 1.42-1.42 6 6 0 0 0 8.48 0 1 1 0 0 1 1.42 1.42 8 8 0 0 1-11.32 0zM23 33a1 1 0 0 0 2 0 1 1 0 0 0-2 0"/><path d="M13 15v2H8.29L8 15h5z"/><path className="cls-3" d="m40 15-.29 2H13v-2h27z"/></g></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Smoke detectors and fire alarm system installation</h1></div>
          </div>
      </div>
    </div>,
    <div key="cctv" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse' viewBox="0 0 64 64"><rect width="7" height="64" rx="1" ry="1"/><path d="M13 46v12a1.003 1.003 0 0 1-1 1H9V45h3a1.003 1.003 0 0 1 1 1zM63.9 15.56a1 1 0 0 0-.72-.66L22.63 5.03a.989.989 0 0 0-.75.12.96.96 0 0 0-.45.61l-1.45 5.93 32.04 7.8 7.61 1.85 4.08-4.82a.99.99 0 0 0 .19-.96zm-31.64-4.53a1.012 1.012 0 0 1-.97.76.986.986 0 0 1-.24-.03l-6.04-1.47a.998.998 0 1 1 .47-1.94l6.04 1.47a1.001 1.001 0 0 1 .74 1.21zM50.57 21.2l-.81 3.34-1.68 6.9-1.29 5.28-10.45-2.54a6.13 6.13 0 0 0 .29-.75 7.998 7.998 0 1 0-15.49-3.85 5.886 5.886 0 0 0-.12.87L16.7 29.4a1.002 1.002 0 0 1-.73-1.21l3.54-14.55zM56.01 26.06l-1.68 6.9a1.001 1.001 0 0 1-.97.77.986.986 0 0 1-.24-.03l-3.34-.81.56-2.31 1.59-6.54h.01l3.34.81a1.03 1.03 0 0 1 .62.46.978.978 0 0 1 .11.75z" /><path d="M29 25a5.926 5.926 0 0 0-5.896 4.951A4.761 4.761 0 0 0 23 31a6 6 0 0 0 6 6 2.343 2.343 0 0 0 .288-.01 6.046 6.046 0 0 0 5.436-4.16A6.108 6.108 0 0 0 35 31a6.007 6.007 0 0 0-6-6zM29.16 39l-5.85 15.36a.999.999 0 0 1-.93.64H15v-6h3.93l4.63-12.15A7.892 7.892 0 0 0 29 39z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>CCTV cameras installation</h1></div>
        </div>
      </div>
    </div>,
    <div key="Starlink" className='service-div mt-6 ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse' viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-9.26 19.64C9.91 28.29 24 23.21 24 12A12 12 0 0 0 12 0zm8.39 17.44A11.82 11.82 0 0 0 16.83 15a27.47 27.47 0 0 0 0-6.08 11.82 11.82 0 0 0 3.56-2.4 10 10 0 0 1 0 10.92zm-4.78 3.87c-1 .4.16.2.95-4.21a10 10 0 0 1 2.58 1.9 9.81 9.81 0 0 1-3.53 2.31zm-3.68.69c-.75-.1-2-1.94-2.58-5.65a10.35 10.35 0 0 1 5.3 0c-.24 1.48-1.22 5.65-2.72 5.65zm-3.54-.69A9.9 9.9 0 0 1 4.86 19a10 10 0 0 1 2.58-1.9c.81 4.51 2.02 4.63.95 4.21zm0-18.64c.86-.33-.25 0-1 4.23A10 10 0 0 1 4.86 5a9.79 9.79 0 0 1 3.58-2.33zm7.12 0A9.87 9.87 0 0 1 19.14 5a10 10 0 0 1-2.58 1.9c-.8-4.46-1.97-4.61-1-4.23zm-6.4 11.69a25.66 25.66 0 0 1 0-4.72 11.78 11.78 0 0 0 5.78 0 24.81 24.81 0 0 1 0 4.72 12.28 12.28 0 0 0-5.78 0zM11.91 2c1.51 0 2.5 4.16 2.74 5.65a10.35 10.35 0 0 1-5.3 0C10 4 11.17 2.12 11.91 2zm-8.3 4.56A11.82 11.82 0 0 0 7.17 9a27.47 27.47 0 0 0 0 6.08 11.82 11.82 0 0 0-3.56 2.4 10 10 0 0 1 0-10.92z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Starlink and internet service systems</h1></div>
        </div>
      </div>
    </div>,
    <div key="roof" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse' viewBox="0 0 512 512"><path d="M59.511 252.337v171.242h208.271v-241.16l-64.414 59.898-143.857 10.02z"/><path d="M435.258 258.033v165.546H246.726V257.911l95.843-108.5z"/><path d="m341.053 112.058-.061.059-.061-.059v.119l-94.205 92.207v53.527l94.205-96.993 94.327 97.115v-53.649l-94.205-92.207v-.119z"/><path d="M340.931 88.42h-159.2a26.344 26.344 0 0 0-18.631 7.716L23.567 235.672h170.111z"/><path d="M340.931 88.42 193.678 235.672H23.567l8.787 22.467h176.429l132.27-134.972 129.939 129.94 17.435-17.435L340.931 88.42z"/><path d="M307.552 423.579h67v-82.713a33.5 33.5 0 0 0-67 0zM116.175 307.365h64.156v64.156h-64.156z"/><path d="M59.511 429.4h187.215a5.82 5.82 0 0 0 0-11.64H65.332V290.966a5.821 5.821 0 0 0-11.641 0V423.58a5.82 5.82 0 0 0 5.82 5.82z"/><path d="M441.079 423.58V267.819a5.821 5.821 0 0 0-11.641 0V417.76h-49.064v-76.894a39.322 39.322 0 1 0-78.643 0v76.894h-49.185V267.819c-.142-7.59-11.448-7.741-11.641 0V423.58a5.821 5.821 0 0 0 5.821 5.82c55.89-.01 132.646.008 188.533 0a5.82 5.82 0 0 0 5.82-5.82zm-72.346-5.82h-55.362v-76.894a27.681 27.681 0 1 1 55.362 0zM116.175 377.341h64.156a5.821 5.821 0 0 0 5.821-5.821v-64.156a5.821 5.821 0 0 0-5.821-5.82h-64.156a5.82 5.82 0 0 0-5.82 5.82v64.156a5.821 5.821 0 0 0 5.82 5.821zM122 313.184h52.516V365.7H122zM74.258 258.139a5.821 5.821 0 0 0 5.82 5.821h22.086a5.821 5.821 0 1 0 0-11.641H80.078a5.82 5.82 0 0 0-5.82 5.82zM133.154 258.139a5.821 5.821 0 0 0 5.82 5.821h22.086a5.821 5.821 0 0 0 0-11.641h-22.086a5.82 5.82 0 0 0-5.82 5.82zM19.494 231.515a5.946 5.946 0 0 0-1.314 6.361c.168.339 4.31 11.3 4.461 11.075-.214.021 4.154 10.893 4.292 11.308a5.822 5.822 0 0 0 5.421 3.7h10.913c7.672-.194 7.678-11.446 0-11.641h-6.94c-.342-.759-2.6-6.972-3.054-7.493-.009-.641-2.652-6.982-2.9-7.729l5.027-5.026c5.291-5.563-2.667-13.522-8.23-8.23l-7.676 7.675zM244.043 88.42a5.82 5.82 0 0 0-5.82-5.82h-21.184c-7.67.192-7.68 11.445 0 11.64h21.184a5.82 5.82 0 0 0 5.82-5.82zM300.532 88.42a5.821 5.821 0 0 0-5.821-5.82h-21.183c-7.67.192-7.68 11.445 0 11.64h21.183a5.821 5.821 0 0 0 5.821-5.82zM163.1 101.956a5.8 5.8 0 0 0 4.115-1.7 20.387 20.387 0 0 1 14.513-6.011 5.82 5.82 0 1 0 0-11.64 31.95 31.95 0 0 0-22.744 9.421c-3.704 3.452-.861 10.107 4.116 9.93zM136.26 114.749l-13.637 13.637c-5.289 5.559 2.666 13.523 8.231 8.23l13.636-13.637c5.289-5.557-2.663-13.525-8.23-8.23zM54.011 211.049a5.8 5.8 0 0 0 4.115-1.705l13.637-13.637a5.82 5.82 0 0 0-8.23-8.231L49.9 201.113c-3.714 3.457-.869 10.113 4.111 9.936zM94.49 172.98l13.637-13.637c5.289-5.557-2.664-13.525-8.231-8.23L86.26 164.75c-5.29 5.559 2.665 13.523 8.23 8.23zM286.463 148.708a5.8 5.8 0 0 0 4.115-1.708l13.375-13.375a5.82 5.82 0 0 0-8.23-8.231l-13.375 13.376c-3.71 3.459-.865 10.116 4.115 9.938zM227.816 201.535a5.82 5.82 0 0 0-8.231 0l-13.375 13.376c-5.29 5.56 2.665 13.523 8.23 8.23l13.376-13.375a5.82 5.82 0 0 0 0-8.231zM55.709 241.493h18.916a5.821 5.821 0 0 0 0-11.641H55.709c-7.671.193-7.679 11.448 0 11.641zM128.462 241.493c7.671-.193 7.679-11.446 0-11.641h-18.916a5.821 5.821 0 0 0 0 11.641zM188.12 235.672a5.821 5.821 0 0 0-5.821-5.82h-18.915c-7.671.193-7.68 11.446 0 11.641H182.3a5.821 5.821 0 0 0 5.82-5.821zM265.884 163.466a5.819 5.819 0 0 0-8.23 0l-13.375 13.376c-5.29 5.56 2.665 13.523 8.23 8.23l13.375-13.372a5.818 5.818 0 0 0 0-8.234zM344.542 100.249c5.565 5.281 13.522-2.672 8.224-8.239l-7.642-7.629a5.88 5.88 0 0 0-7.426-.8 24.07 24.07 0 0 0-3.313 3.26 5.739 5.739 0 0 0-.593.485L320.417 100.7a5.819 5.819 0 0 0 8.23 8.23l12.287-12.287zM385.08 138.318c4.979.174 7.83-6.479 4.112-9.939l-13.659-13.639a5.821 5.821 0 1 0-8.225 8.239l13.66 13.638a5.8 5.8 0 0 0 4.112 1.701zM457.936 211.053c4.979.173 7.829-6.48 4.112-9.94l-13.66-13.638a5.821 5.821 0 0 0-8.224 8.239l13.659 13.638a5.806 5.806 0 0 0 4.113 1.701zM403.729 151.115a5.821 5.821 0 0 0 .007 8.232l13.66 13.637c5.566 5.282 13.521-2.675 8.224-8.239l-13.66-13.637a5.823 5.823 0 0 0-8.231.007zM466.878 257.223a5.82 5.82 0 0 0 8.23 0c.558-.646 8.5-8.25 8.58-8.853.553-.073 8.247-8.033 8.854-8.58a5.821 5.821 0 0 0 0-8.235l-7.723-7.71c-5.567-5.281-13.521 2.674-8.224 8.239l3.6 3.593c-.728.8-4.022 3.806-4.461 4.736-.911.42-3.957 3.756-4.738 4.465l-3.6-3.6c-5.568-5.287-13.521 2.668-8.23 8.233zM388.275 178.62c5.558 5.289 13.524-2.665 8.23-8.231l-16.358-16.358c-5.556-5.288-13.526 2.663-8.23 8.231zM440.127 214.011l-16.358-16.358c-5.556-5.288-13.526 2.663-8.23 8.231l16.361 16.358a5.8 5.8 0 0 0 4.115 1.705c4.972.173 7.826-6.476 4.112-9.936zM333.414 136.781c3.041.3 5.732-3.491 7.68-5.342l3.558 3.56c5.561 5.288 13.525-2.662 8.233-8.23l-7.715-7.718a5.855 5.855 0 0 0-8.273.042l-7.639 7.794c-3.658 3.474-.799 10.07 4.156 9.894zM288.846 182.26a5.8 5.8 0 0 0 4.154-1.746l16.713-17.055c5.232-5.61-2.8-13.5-8.312-8.147l-16.714 17.054c-3.651 3.476-.796 10.07 4.159 9.894zM244.277 227.739a5.807 5.807 0 0 0 4.157-1.746l16.713-17.054c5.232-5.611-2.8-13.5-8.313-8.148l-16.713 17.054c-3.654 3.476-.798 10.07 4.156 9.894zM212.263 246.27l-5.927 6.049h-8.466a5.821 5.821 0 0 0 0 11.641c.432-.04 12.153.105 12.06-.116a6.113 6.113 0 0 0 3.011-1.631l7.638-7.8c5.23-5.613-2.801-13.491-8.316-8.143z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Roofing and furniture</h1></div>
        </div>
      </div>
    </div>,
    <div key="Automobile" className='service-div mt-6 ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse'><path d="M18.613 9.15 15.5 5H6.382L4.255 9.255 2 10.382V17h1.5a3 3 0 0 0 6 0h5a3 3 0 0 0 6 0H22v-6.721zM16 9h-5V7h3.5zm-9.5 9a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1zM4 15v-1h2v-2H4v-.382l1.745-.873L7.618 7H9v4h8.837l2.163.721V12h-2v2h2v1zm13.5 3a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Automobile services</h1></div>
        </div>
      </div>
    </div>,
    <div key="building" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse'><path d="M36.384 28.247 19.682.771A1.591 1.591 0 0 0 18.31 0v27.562a22.468 22.468 0 0 1 4.87.534l11.483 2.553a1.606 1.606 0 0 0 1.721-2.402z" fill="#e2e2e2"/><path d="M16.939.772.238 28.248a1.605 1.605 0 0 0 1.72 2.4L13.44 28.1a22.478 22.478 0 0 1 4.871-.534V0a1.593 1.593 0 0 0-1.372.772z" fill="#c6c6c6"/><path d="M21.278 36.532V44.7a3.3 3.3 0 1 0 6.594 0v-8.168z" fill="#e49a61"/><path d="M25.7 36.532h-2.25v-2.6l-5.55-2.177a1.125 1.125 0 0 1-.715-1.048V19.793h2.25V29.94l5.549 2.175a1.127 1.127 0 0 1 .715 1.047z" fill="#525c6b"/><path fill="#f1bb6b" d="M21.278 39.672h6.595v1.5h-6.595z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Building and construction</h1></div>
        </div>
      </div>
    </div>,
    <div key="real_estate" className='service-div mt-6 ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='animate-pulse' ><path d="m22.948 10.684-3-9A1 1 0 0 0 19 1H5a1 1 0 0 0-.948.684l-3 9A1.229 1.229 0 0 0 1 11v11a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1c0-.1-.008-11.127 0-11.027a.987.987 0 0 0-.052-.289zM5.721 3h12.558l2.333 7h-3.2l-4.705-4.707a1 1 0 0 0-1.414 0L6.586 10h-3.2zM11 21v-5h2v5zm10 0h-6v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6H3v-9h4a1 1 0 0 0 .707-.293L12 7.414l4.293 4.293A1 1 0 0 0 17 12h4zm-8-10a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm-9 3h4v2H4zm12 0h4v2h-4zM4 17h4v2H4zm12 0h4v2h-4z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Real Estate</h1></div>
        </div>
      </div>
    </div>,
    <div key="maintenance" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" className='animate-pulse' viewBox="0 0 50 50">
                <path d="M 36.875 -0.03125 C 32.851563 0.0820313 27.898438 0.722656 25.09375 3.53125 L 24.40625 4.1875 C 19.851563 8.773438 19.886719 15.988281 24.46875 20.59375 L 29.46875 25.59375 C 31.691406 27.824219 34.609375 29.0625 37.6875 29.0625 C 40.730469 29.0625 43.617188 27.824219 45.8125 25.625 L 46.46875 24.96875 C 49.957031 21.484375 49.988281 14.289063 50 11.21875 C 50.003906 10.679688 49.882813 10.257813 49.59375 9.96875 C 49.359375 9.734375 49.023438 9.625 48.6875 9.625 C 48.152344 9.625 47.738281 9.9375 47.53125 10.125 L 41.03125 16.65625 C 40.894531 16.679688 40.578125 16.71875 39.96875 16.71875 C 37.78125 16.71875 34.726563 16.292969 33.96875 15.96875 C 33.464844 14.867188 33.074219 10.042969 33.40625 9.03125 C 34.421875 8.015625 39.960938 2.445313 40 2.40625 C 40.175781 2.207031 40.75 1.515625 40.40625 0.75 C 40.273438 0.457031 39.914063 -0.0273438 38.96875 -0.03125 L 38.53125 -0.03125 C 38.003906 -0.03125 37.449219 -0.046875 36.875 -0.03125 Z M 21.375 19.9375 L 2.3125 37.28125 C 0.292969 39.304688 -1.496094 43.9375 2.3125 47.75 C 4.066406 49.503906 5.902344 49.96875 7.375 49.96875 C 7.753906 49.96875 8.085938 49.925781 8.40625 49.875 C 10.3125 49.589844 11.902344 48.601563 12.78125 47.71875 L 30.09375 28.65625 L 28.5 27.4375 L 22.59375 21.53125 Z"></path>
              </svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>General Maintenance</h1></div>
        </div>
      </div>
    </div>,
    <div key="cameras" className='service-div mt-6 ml-[10%] md:ml-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse' viewBox="0 0 64 64"><rect width="7" height="64" rx="1" ry="1"/><path d="M13 46v12a1.003 1.003 0 0 1-1 1H9V45h3a1.003 1.003 0 0 1 1 1zM63.9 15.56a1 1 0 0 0-.72-.66L22.63 5.03a.989.989 0 0 0-.75.12.96.96 0 0 0-.45.61l-1.45 5.93 32.04 7.8 7.61 1.85 4.08-4.82a.99.99 0 0 0 .19-.96zm-31.64-4.53a1.012 1.012 0 0 1-.97.76.986.986 0 0 1-.24-.03l-6.04-1.47a.998.998 0 1 1 .47-1.94l6.04 1.47a1.001 1.001 0 0 1 .74 1.21zM50.57 21.2l-.81 3.34-1.68 6.9-1.29 5.28-10.45-2.54a6.13 6.13 0 0 0 .29-.75 7.998 7.998 0 1 0-15.49-3.85 5.886 5.886 0 0 0-.12.87L16.7 29.4a1.002 1.002 0 0 1-.73-1.21l3.54-14.55zM56.01 26.06l-1.68 6.9a1.001 1.001 0 0 1-.97.77.986.986 0 0 1-.24-.03l-3.34-.81.56-2.31 1.59-6.54h.01l3.34.81a1.03 1.03 0 0 1 .62.46.978.978 0 0 1 .11.75z" /><path d="M29 25a5.926 5.926 0 0 0-5.896 4.951A4.761 4.761 0 0 0 23 31a6 6 0 0 0 6 6 2.343 2.343 0 0 0 .288-.01 6.046 6.046 0 0 0 5.436-4.16A6.108 6.108 0 0 0 35 31a6.007 6.007 0 0 0-6-6zM29.16 39l-5.85 15.36a.999.999 0 0 1-.93.64H15v-6h3.93l4.63-12.15A7.892 7.892 0 0 0 29 39z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Security surveillance cameras</h1></div>
        </div>
      </div>
    </div>,
    <div key="others" className='service-div mt-6 mr-[10%] md:mr-[20%]'>
      <div className='relative border-2 border-black w-full md:w-[95%]'>
        <div className="specky absolute left-[0] top-[0] h-full w-[7px] rounded-tr-[50%] rounded-br-[50%]"></div>
          <div className='flex items-center justify-between w-[12/12] py-2 px-2 mx-1 md:mx-4'>
            <div className='width-[50px] height-[50px] bg-[#ffa500] rounded-[50%] flex items-center justify-center p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='animate-pulse'><path d="M10 23V13a7.551 7.551 0 0 0 4-6.682A6.992 6.992 0 0 0 10 0v6.318a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V0a6.992 6.992 0 0 0-4 6.318A7.551 7.551 0 0 0 4 13v10h2v-8h2v8z"/></svg>
            </div>
            <div><h1 className='font-semibold text-sm md:text-base text-right'>Many More</h1></div>
        </div>
      </div>
    </div>,
  ];

  const showPortfolio = () => {
    setShowPort(!showPort);
    setShowImage(!showImage);
  };

  const closePortfolio = () => {
    setShowPort(!showPort);
    setShowImage(!showImage);
  };

  const showPortfoliosec = () => {
    setShowImagesec(!showImagesec);
    setShowPortsec(!showPortsec);
  };

  const closePortfoliosec = () => {
    setShowImagesec(!showImagesec);
    setShowPortsec(!showPortsec);
  };

  const showPortfoliothird = () => {
    setShowImagethird(!showImagethird);
    setShowPortthird(!showPortthird);
  };

  const closePortfoliothird = () => {
    setShowImagethird(!showImagethird);
    setShowPortthird(!showPortthird);
  };

  const handleDivClick = (divNumber) => {
    setExpandDiv(divNumber);
  };

  const showEmailNotice = () => {
    setEmailSent(!emailSent);
    setErrorSent(false);
  };

  const noEmailNotice = () => {
    setEmailSent(false);
    setErrorSent(!errorSent);
  };

  useEffect ( () => {
    if (emailSent) {
      const timeoutEmail = setTimeout(() => {
        setEmailSent(false)
      }, 7000); //7000 milliseconds = 7seconds
      return () => clearTimeout(timeoutEmail);
    }

    if (errorSent) {
      const timeoutError = setTimeout(() => {
        setErrorSent(false)
      }, 7000); //7000 milliseconds = 7seconds
      return () => clearTimeout(timeoutError);
    }
  }, [emailSent, errorSent]);


  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
      
    emailjs
      .sendForm('service_1c7nzti', 'template_05fc143', form.current, {
        publicKey: '3xkdrosaiXH3tldX1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          showEmailNotice();
          // alert("Email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
          noEmailNotice();
        },
      );
  };

  const BlogArray = [
    <div key="ElectricBlog">
      <div className='border-2 border-black shadow-md shadow-black w-[250px] md:w-[300px] h-[450px] rounded-xl'>
        <img src={ElectricWork} alt="ElectricImage" className="object-cover w-[250px] md:w-[300px] h-[200px] rounded-t-xl" />
        <div className="px-4">
          <h2 className="font-bold pt-3">
            Lastest Smart Technology
          </h2>
          <p className="text-sm py-3">
            We are delighted to show you new technology we used to beautify and upgrade our buidings into a smart homes for ...
          </p>
        </div>
        <div className='py-2 px-4 flex'>
          <Link to="/blog" className="py-2 px-6 mb-4 rounded-full border-b-2 border-r-2 border-black relative overflow-hidden font-semibold text-[black] text-center hover:shadow-lg hover:shadow-[red] hover:font-extrabold bg-[orange] mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>,
    <div key="SolarBlog">
      <div className='border-2 border-black shadow-md shadow-black w-[250px] md:w-[300px] h-[450px] rounded-xl'>
        <img src={SolarBlog} alt="SolarImage" className="object-cover w-[250px] md:w-[300px] h-[200px] rounded-t-xl" />
        <div className="px-4">
          <h2 className="font-bold pt-3">
            New Methods of Solar Installations
          </h2>
          <p className="text-sm py-3">
            New discovery have been found for a step by step installations of solar panels and it's connectivity ...
          </p>
        </div>
        <div className='py-2 px-4 flex'>
          <Link to="/blog" className="py-2 px-6 mb-4 rounded-full border-b-2 border-r-2 border-black relative overflow-hidden font-semibold text-[black] text-center hover:shadow-lg hover:shadow-[red] hover:font-bold bg-[orange] mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>,
    <div key="PlumbBlog">
      <div className='border-2 border-black shadow-md shadow-black w-[250px] md:w-[300px] h-[450px] rounded-xl'>
        <img src={BackgroundImage2} alt="PlumbImage" className="object-cover w-[250px] md:w-[300px] h-[200px] rounded-t-xl" />
        <div className="px-4">
          <h2 className="font-bold pt-3">
            Amazing Plumbing Solutions
          </h2>
          <p className="text-sm py-3">
            We have got unique ways of plumbing to transform your convinence into a smart luxuary rest room with our new ...
          </p>
        </div>
        <div className='py-2 px-4 flex'>
          <Link to="/blog" className="py-2 px-6 mb-4 rounded-full border-b-2 border-r-2 border-black relative overflow-hidden font-semibold text-[black] text-center hover:shadow-lg hover:shadow-[red] hover:font-extrabold bg-[orange] mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>,
    <div key="RecuitBlog">
      <div className='border-2 border-black shadow-md shadow-black w-[250px] md:w-[300px] h-[450px] rounded-xl'>
        <img src={AboutUs} alt="RecuitmentImage" className="object-cover w-[250px] md:w-[300px] h-[200px] rounded-t-xl" />
        <div className="px-4">
          <h2 className="font-bold pt-3">
            Workhub Recuitment Begins
          </h2>
          <p className="text-sm py-3">
            The office of the human resource is annoucing officially the recuitment of skilled personnels over ...
          </p>
        </div>
        <div className='py-2 px-4 flex'>
          <Link to="/blog" className="py-2 px-6 mb-4 rounded-full border-b-2 border-r-2 border-black relative overflow-hidden font-semibold text-[black] text-center hover:shadow-lg hover:shadow-[red] hover:font-extrabold bg-[orange] mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>,
    <div key="InteriorsBlog">
      <div className='border-2 border-black shadow-md shadow-black w-[250px] md:w-[300px] h-[450px] rounded-xl'>
        <img src={Interiors} alt="RecuitmentImage" className="object-cover w-[250px] md:w-[300px] h-[200px] rounded-t-xl" />
        <div className="px-4">
          <h2 className="font-bold pt-3">
            New Birth: Luxury Electrical Interiors
          </h2>
          <p className="text-sm py-3">
            Workhub are now into Electric Interior Design, to equipping your homes with our luxury interiors for perfect ...
          </p>
        </div>
        <div className='py-2 px-4 flex'>
          <Link to="/blog" className="py-2 px-6 mb-4 rounded-full border-b-2 border-r-2 border-black relative overflow-hidden font-semibold text-[black] text-center hover:shadow-lg hover:shadow-[red] hover:font-extrabold bg-[orange] mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>,
  ]

  return (
    <div className='my-auto'>
      <Navbar />
      
      {/* <section className='max-w-screen-xl lg:my-10 mx-auto w-full h-full overflow-hidden lg:rounded-2xl py-16 md:py-10 items-center justify-center bgcss' style={{ backgroundImage: `url('${slideData[currentIndex].url}')`, objectFit: "cover", }}>
        <div>
          <div className='flex items-center justify-between px-6 lg:px-20'>
            <Link to="/"><img src={Logo} alt='Logo' className='w-28 md:w-32 lg:w-32 mt-2 mb-2 object-cover cursor-pointer'/></Link>
            <div className='flex flex-col text-white gap-y-2 md:gap-y-3 lg:gap-y-4 py-8'>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer text-[#f3a61a]'to="/">Home</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/portfolio">Portfolio</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/service">Service</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer py-2' to="/contact">Contact</Link>
              <Link className='hover:font-semibold hover:text-[#DC143C] cursor-pointer' to="/blog">Blog</Link>
            </div>
          </div>
          <div className='py-4 px-4 md:px-6 lg:px-20'>
            <span className='rounded-full bg-[#ffffff3b] px-7 py-2 font-medium italic mymoveeff' style={slideData[currentIndex].style}>
              {slideData[currentIndex].energy}
              <span className="absolute inset-0 z-0"></span>
            </span>
            <div className='flex flex-col lg:flex-row lg:items-end'>
              <p className='text-whiteText font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-6xl py-8 md:py-10 lg:py-16'>
                {slideData[currentIndex].caption}
              </p>
              <div className='italic hidden  md:grid grid-cols-1 py-4 md:py-10 lg:py-8 font-semibold text-white w-full'>
                <span>Utility Technology</span>
                <span>Harnessing <b style={slideData[currentIndex].style}>THE POWER</b> of Electricity, Plumbing, and More </span>
              </div>
            </div>
            <Link to="/contact" className='rounded-r-full bg-white px-7 py-2 font-bold w-[150px] h-[40px] cursor-pointer hover:italic flex text-nowrap justify-center items-center gap-x-2 hover:bg-transparent hover:border-2 hover:border-red-500' style={slideData[currentIndex].style}>
              Hire Us
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="right_portfolio" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
            </Link>
          </div>
        </div>
      </section> */}

      <section className='max-w-screen-xl lg:my-10 mx-auto w-full h-[700px] md:h-[1000px] overflow-hidden lg:rounded-2xl py-16 md:py-10 items-center justify-center bgcss' style={{ backgroundImage: `url('${slideData[currentIndex].url}')`, objectFit: "cover", backgroundColor: `url('${slideData[currentIndex].backgroundColor}')` }}>
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
              <p className='font-bold lg:font-extrabold text-2xl md:text-4xl lg:text-6xl py-8 md:py-10 lg:py-16' style={slideData[currentIndex].style}>
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

      <Tools />

      {/* about us */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText'>
        <div>
          {/* <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            Hello World
          </h1> */}
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-5 px-5 gap-x-2 mt-10 overflow-hidden'>
            <div className='text-left'>
              <h1 className='font-medium text-xl md:text-2xl py-1 text-black border-b-2 border-b-black border-dotted w-24 md:w-28 text-nowrap'>About Us</h1>
              <h3 className='font-bold text-2xl md:text-3xl py-4 text-[#DC143C]'>Your Trusted Service Provider for Plumbing, Electrical, Solar Solutions and More</h3>
              <p className='text-sm'>
                With years of experience and a team of dedicated professionals, we are committed to delivering exceptional service that ensures customer satisfaction. Our mission is to simplify your life by offering reliable, efficient, and affordable services tailored to your unique requirements.
              </p>
              <img src={AboutDots} className='w-14 blur firstdots' alt="aboutDots" />
            </div>
            <div className='tryFirst w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] md:mx-auto bg-[#ffa500] -mt-10 md:mt-5 lg:mt-10'>
              <img src={AboutUs} className='tryborder ml-[20px] md:ml-[50px] mt-10 md:mt-0' alt="aboutImage" />
            </div>
          </div>
        </div>
      </section>

      {/* our service */}
      <section className='max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-whiteText'>
        <div>
          <div className='text-left grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-5 px-5 gap-x-2 mt-10 overflow-hidden'>
            <div>
              <h1 className='font-medium text-xl md:text-2xl py-1 border-b-2 border-b-black border-dotted w-32 md:w-36 text-nowrap'> Our Services </h1>
              <h3 className='font-bold text-2xl md:text-3xl py-4 text-[#DC143C]'>We Provide Awesome Services</h3>
              <p className='text-sm'>
                We excel at delivering top notch, comprehensive solutions that exceed expectations. With our expertise, relentless work ethic, and unwavering commitment to precision, we masterfully handle every facet of your project, from solar installations and electrical work to plumbing and beyond.
              </p>
              <div className='py-8'>
                <div className='mx-auto lg:mx-10 w-[180px] h-[180px] md:w-[250px] md:h-[250px] relative border-[5px] border-dotted border-[#DC143C] rounded-full z-10 p-3 md:flex'>
                  <img src={DoAll} alt="WeDoItAll" className='wedoitall mx-auto' />
                  <img src={Arrow} alt="Arrow_down" className='mx-auto w-[120px] h-[120px] md:w-[170px] md:h-[170px] animate-pulse -rotate-90 mt-10 -ml-5 hidden lg:flex' />
                </div>
                <img src={Arrow} alt="Arrow_down" className='w-[120px] h-[120px] md:w-[170px] md:h-[170px] animate-bounce -mt-[20px] mx-auto lg:hidden' />
              </div>
            </div>
            <div>
              <div className='w-full h-[400px] flex justify-center items-center transition-[.5s] relative overflow-y-auto'>
                <div className='flex flex-col gap-y-5 service-content'>
                  {divsArray}
                  {divsArray}
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-lg md:text-3xl lg:text-4xl text-center w-full font-bold py-5'>YOUR SATISFACTION IS OUR <b className='text-[#DC143C] font-extrabold'>PRIORITY</b></h1>
        </div>
      </section>

      {/* our projects */}
      <section className="max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText">
        <div className={showPort ? "block" : "opacity-10"}>
          <h1 className='text-3xl font-bold text-center py-5 hi'> Our Projects </h1>
          <p className='text-base md:px-6 py-3 text-center'>
              Workhub is driven by passion for excellence and perfection. With meticulous attention to details and a commitment to flawless execution, we craft outstanding solution and deliver exceptional work. Our expertise and experience support our clients in reaching their goals and building a strong foundation for long term success.
          </p>
          <div className='py-5'>
            
            <div className='grid grid-cols-1 md:hidden lg:hidden gap-5 md:gap-x-10 content-center justify-center items-center'>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[280px] rounded-2xl transition-all duration-300" : expandDiv === 1 ? "relative overflow-hidden h-[300px] w-[280px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(1)} onClick={() => handleDivClick(1)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={BackgroundImage} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative mt-52 fira px-4 py-4 text-nowrap" : expandDiv === 1 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Solar Installations </h1>
                    </div>
                    <button onClick={showPortfolio} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                  <div className='flex justify-between align-middle'></div>
                </div>
              </div>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300" : expandDiv === 2 ? "relative overflow-hidden h-[300px] w-[280px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(2)} onClick={() => handleDivClick(2)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={ElectricWork} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content" : expandDiv === 2 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Electrical Works </h1>
                    </div>
                    <button onClick={showPortfoliosec} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300" : expandDiv === 3 ? "relative overflow-hidden h-[300px] w-[280px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(3)} onClick={() => handleDivClick(3)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={BackgroundImage2} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content" : expandDiv === 3 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Plumbing Services </h1>
                    </div>
                    <button onClick={showPortfoliothird} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden md:flex flex-row gap-5 md:gap-x-10 content-center justify-center items-center'>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300" : expandDiv === 2 ? "relative overflow-hidden h-[300px] w-[300px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(2)} onClick={() => handleDivClick(2)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={ElectricWork} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content" : expandDiv === 2 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Electrical Works </h1>
                    </div>
                    <button onClick={showPortfoliosec} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[300px] rounded-2xl transition-all duration-300" : expandDiv === 1 ? "relative overflow-hidden h-[300px] w-[300px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(1)} onClick={() => handleDivClick(1)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={BackgroundImage} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative mt-52 fira px-4 py-4 text-nowrap" : expandDiv === 1 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Solar Installations </h1>
                    </div>
                    <button onClick={showPortfolio} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                  <div className='flex justify-between align-middle'></div>
                </div>
              </div>
              <div className={expandDiv === null ? "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300" : expandDiv === 3 ? "relative overflow-hidden h-[300px] w-[300px] rounded-2xl transition-all duration-300" : "relative overflow-hidden h-[300px] w-[150px] rounded-2xl transition-all duration-300"} onMouseOver={() => !window.matchMedia("(pointer: coarse)").matches && setExpandDiv(3)} onClick={() => handleDivClick(3)}>
                <div className='w-full h-full absolute top-0 left-o right-0 bottom-0'>
                  <img src={BackgroundImage2} alt='portofolio1' className='w-full h-full object-cover'/>
                </div>
                <div className={expandDiv === null ? "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content" : expandDiv === 3 ? "relative fira px-4 py-4 mt-52 text-nowrap" : "relative fira px-4 py-4 text-nowrap w-[150%] mt-28 -ml-12 rotate-90 transition-all duration-300 box-content"}>
                  <div className="flex justify-start gap-x-4 items-center">
                    <div className="font-2xl text-[orange] font-extrabold text-start font-[Quattrocento, serif]">
                      <h1 className="opacity-100">Plumbing Services </h1>
                    </div>
                    <button onClick={showPortfoliothird} className="expand_icon flex items-center justify-center cursor-pointer animate-pulse hover:animate-spin hover:transition-all hover:duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={showImage ? "geffect fixed w-full h-full overflow-hidden top-0 md:top-0 left-0 bottom-0 right-0 z-50 py-28 md:py-16 lg:py-10 transition-all duration-300" : "hidden"}>
          <div className="geffectsec py-10 lg:py-1">
            <button className="h-[30px] w-[30px] bg-white flex items-center justify-center ml-auto mr-5 md:mr-10 cursor-pointer rounded-lg my-3" onClick={closePortfolio}>
              <svg fill="currentColor" viewBox="0 0 512 512" className='geffectsvg' color="#000000" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg> 
            </button>
            <img src={BackgroundImage} className='w-[250px] lg:w-[500px] md:w-[400px] h-[250px] lg:h-[500px] md:h-[300px] mx-auto object-cover' alt="solar_porfolio_image" />
          </div>
        </div>
        <div className={showImagesec ? "geffect fixed w-full h-full overflow-hidden top-0 md:top-0 left-0 bottom-0 right-0 z-50 py-28 md:py-16 lg:py-10 transition-all duration-300" : "hidden"}>
          <div className="geffectsec py-10 lg:py-1">
            <button className="h-[30px] w-[30px] bg-white flex items-center justify-center ml-auto mr-5 md:mr-10 cursor-pointer rounded-lg my-3" onClick={closePortfoliosec}>
              <svg fill="currentColor" viewBox="0 0 512 512" className='geffectsvg' color="#000000" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg> 
            </button>
            <img src={BackgroundImage1} className='w-[250px] lg:w-[800px] md:w-[400px] h-[250px] lg:h-[500px] md:h-[300px] mx-auto object-cover' alt="solar_porfolio_image" />
          </div>
        </div>
        <div className={showImagethird ? "geffect fixed w-full h-full overflow-hidden top-0 md:top-0 left-0 bottom-0 right-0 z-50 py-28 md:py-16 lg:py-10 transition-all duration-300" : "hidden"}>
          <div className="geffectsec py-10 lg:py-1">
            <button className="h-[30px] w-[30px] bg-white flex items-center justify-center ml-auto mr-5 md:mr-10 cursor-pointer rounded-lg my-3" onClick={closePortfoliothird}>
              <svg fill="currentColor" viewBox="0 0 512 512" className='geffectsvg' color="#000000" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
              </svg> 
            </button>
            <img src={BackgroundImage2} className='w-[250px] lg:w-[800px] md:w-[400px] h-[250px] lg:h-[500px] md:h-[300px] mx-auto object-cover' alt="solar_porfolio_image" />
          </div>
        </div>

        <div className='py-8 flex'>
          <Link to="/portfolio" className="mx-auto py-3 px-6 rounded-full shadow-lg shadow-[#DC143C] btnbg relative overflow-hidden font-semibold text-[black] text-center hover:border-b-2 hover:border-r-2 hover:border-black hover:font-bold mymover">
            <span className="relative z-10 text-nowrap flex justify-center items-center">
              View More Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className='animate-pulse mx-2'><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </span>
            <span className="absolute inset-0 z-0"></span>
          </Link>
        </div>
      </section>

      {/* contact */}
      <section className="max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-whiteText">
        <div>
          <h1 className='text-3xl font-bold text-center py-5 hi text-nowrap'> Contact Us </h1>
          <div className='py-3'>
            <p className="text-center text-lg md:px-6 md:text-xl py-3">Transform your vision into stunning reality ! Let's collaborate and push the boundaries of creativity. Connect with us to start buiding outstanding projects</p>
            <hr className="w-36 h-2 md:h-3 bg-[orange] -rotate-2 mx-auto my-4" />
            <p className='text-center text-sm md:text-base italic font-semibold'>Kindly take a moment to fill out the form below, and we'll be in touch with you shortly!</p>
          </div>
          <form className='flex flex-col items-center justify-center gap-4 lg:gap-4 my-10 py-10 md:py-4 px-6 md:px-4 shadow-light md:shadow-none' ref={form} onSubmit={sendEmail}>
            <div className="hidden md:flex justify-center">
              <div className={emailSent ? "bg-[orange] text-black font-semibold px-4 py-2 flex justify-center items-center gap-x-2 animate-pulse" : "hidden"}>
                <svg data-name="1-Mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='font-semibold' color="#ffffff" height="22" width="22"><path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/><path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z"/><path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z"/></svg>
                Email sent successfully
              </div>
              <div className={errorSent ? "bg-redText text-whiteText font-semibold px-4 py-2 flex justify-center items-center gap-x-2 animate-pulse" : "hidden"}>
                <svg fill="currentColor" viewBox="0 0 512 512" className='font-semibold' color="#ffffff" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                </svg>
                Oops Something went Wrong
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4 w-full max-w-[40rem]">
              <input 
                type='text' 
                name='from_name' 
                className='font-medium w-full max-w-[40rem] my-3 border-b-2 border-[orange] py-4 md:px-4 px-8 content-center text-black  hover:border-1 hover:border-[black] hover:rounded-xl hover:shadow-[black] hover:shadow-md placeholder:text-black focus:border-none'
                placeholder='Your Name'/>
              <input 
                type='email' 
                name='from_email' 
                className='font-medium w-full max-w-[40rem] my-3 border-b-2 border-[orange] py-4 md:px-4 px-8 content-center text-black  hover:border-1 hover:border-[black] hover:rounded-xl hover:shadow-[black] hover:shadow-md placeholder:text-black focus:border-none'
                placeholder='Your Email' />
              <input 
                type='number' 
                name='from_number' 
                className='font-medium w-full max-w-[40rem] my-3 border-b-2 border-[orange] py-4 md:px-4 px-8 content-center text-black  hover:border-1 hover:border-[black] hover:rounded-xl hover:shadow-[black] hover:shadow-md placeholder:text-black focus:border-none'
                placeholder='Phone Number' />
              <input 
                type='text' 
                name='from_job' 
                className='font-medium w-full max-w-[40rem] my-3 border-b-2 border-[orange] py-4 md:px-4 px-8 content-center text-black  hover:border-1 hover:border-[black] hover:rounded-xl hover:shadow-[black] hover:shadow-md placeholder:text-black focus:border-none'
                placeholder='Your Job' />
            </div>
            <textarea 
              name='message' 
              rows="2" 
              className='font-medium w-full max-w-[40rem] my-3 border-b-2 border-[orange] py-4 md:px-4 px-8 content-center text-black  hover:border-1 hover:border-[black] hover:rounded-xl hover:shadow-[black] hover:shadow-md placeholder:text-black focus:border-none'
              placeholder='Your Message'></textarea>
            <button 
            type='submit' 
            value="send" 
            className='w-full max-w-[40rem] mx-auto py-3 px-6 rounded-full shadow-lg shadow-[#DC143C] btnbg relative overflow-hidden font-semibold text-[black] text-center hover:border-2 hover:bg-[white] hover:border-black hover:font-bold hover:text-[#DC143C] mymover'>Send</button>

            <div className="flex md:hidden justify-center my-4">
              <div className={emailSent ? "bg-[orange] text-black font-semibold px-4 py-2 flex justify-center items-center gap-x-2 animate-pulse" : "hidden"}>
                <svg data-name="1-Mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='font-semibold' color="#ffffff" height="22" width="22"><path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/><path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z"/><path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z"/></svg>
                Email sent successfully
              </div>
              <div className={errorSent ? "bg-redText text-whiteText font-semibold px-4 py-2 flex justify-center items-center gap-x-2 animate-pulse" : "hidden"}>
                <svg fill="currentColor" viewBox="0 0 512 512" className='font-semibold' color="#ffffff" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                </svg>
                Oops Something went Wrong
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* our blog */}
      <section className="max-w-screen-xl my-10 mx-auto w-full overflow-hidden lg:rounded-2xl py-6 px-6 lg:px-20 items-center justify-center bg-backgroundText">
        <div>
          <div className='text-center'>
            <h1 className='font-bold text-xl md:text-3xl py-1 my-5 text-black mx-auto text-nowrap'>
              Our Blog
            </h1>
            <hr className="w-36 h-2 md:h-3 bg-[orange] -rotate-2 mx-auto my-4" />
            <h3 className='font-medium text-base py-4 text-black'>
              Discover lastest Insights, Stay ahead of the curve with our lastest news, trends and analysis. Get informed, get connected with us as we give you new informations on our products and services.
            </h3>
            <img src={AboutDots} className='w-14 h-14 blur firstdots' alt="aboutDots" />
          </div>
          <div>
            <div className='w-full h-[500px] flex justify-center items-center transition-[.5s] relative overflow-x-scroll '>
                <div className='flex flex-row gap-x-5 blog-content'>
                  {BlogArray}
                  {BlogArray}
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      
    </div>
  )
};

export default HomePage