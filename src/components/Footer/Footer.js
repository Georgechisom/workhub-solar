import React, { useState } from 'react';
import Logo from "../../images/workhublogo.png";
import { Link } from 'react-router-dom';
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter3.png";
import YouTube from "../../images/youtube.png";


const Footer = () => {

    const [showTerms, setShowTerms] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const openTerms = () => {
        setShowTerms(true)
    };

    const closeTerms = () => {
        setShowTerms(false)
    };

  return (
    <footer className='relative'>
        <section className='mt-10 mx-auto w-full overflow-hidden py-10 px-6 lg:px-20 bg-backgroundText'>
            <div className='my-10'>
                <div className="text-black font-semibold text-center">
                    Experience seamless and secure solar installations nationwide with Workhub. paired with innovative services by experts to transform your building into a smart, sustainable home.
                </div>
                <div className='flex flex-row items-center justify-center flex-nowrap mt-6'>
                    <Link className='px-3 md:px-5'>
                        <img src={Facebook} alt='twitterIcon' className='w-8 md:w-10 object-cover animate-pulse' />
                    </Link>
                    <Link className='px-3 md:px-5'>
                        <img src={Twitter} alt='twitterIcon' className='w-8 md:w-10 object-cover animate-pulse' />
                    </Link>
                    <Link className='px-3 md:px-5'>
                        <img src={YouTube} alt='youtubeIcon' className='w-8 md:w-10 object-cover animate-pulse' />
                    </Link>
                    <Link className='px-3 md:px-5'>
                    <img src={Instagram} alt='youtubeIcon' className='w-8 md:w-10 object-cover animate-pulse' />
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 content-center justify-evenly items-center gap-x-6 gap-y-6'>
                <Link to="/" >
                    <img src={Logo} alt='logo' className='object-cover w-32 md:w-52 cursor-pointer'/>
                </Link>
                <div className='flex flex-col justify-center items-start w-full py-4 '>
                    <h3 className="font-bold py-3 text-base">Navigations</h3>
                    <div className='flex flex-col justify-center items-start gap-2 text-sm md:text-base'>
                        <Link to="/" className='hover:italic hover:font-semibold'>
                            Home
                        </Link>
                        <Link to="/portfolio" className='hover:italic hover:font-semibold'>
                           Portfolio
                        </Link>
                        <Link to="/blog" className='hover:italic hover:font-semibold'>
                            Blog
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start w-full py-4 '>
                    <h3 className="font-bold py-3 text-left text-base">Our Services</h3>
                    <div className='flex flex-col justify-center items-start gap-2 text-sm md:text-base'>
                        <Link to="/service" className='hover:italic hover:font-semibold'>
                            Solar Installations
                        </Link>
                        <Link to="/service" className='hover:italic hover:font-semibold'>
                            Electric Works
                        </Link>
                        <Link to="/notfoundpage" className='hover:italic hover:font-semibold'>
                            Plumbing Services
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start w-full py-4 '>
                    <h3 className="font-bold py-3 text-left text-base">Regulations</h3>
                    <div className='flex flex-col justify-center items-start gap-2 text-sm md:text-base'>
                        <button onClick={openTerms} className='hover:italic hover:font-semibold'>
                            Our Terms
                        </button>
                        <button className='hover:italic hover:font-semibold'>
                            Private Policy
                        </button>
                        <button className='hover:italic hover:font-semibold'>
                            Contact
                        </button>
                    </div>
                    <div className={showTerms ? "geffect fixed w-full h-full overflow-scroll top-0 md:top-0 left-0 bottom-0 right-0 z-50 py-28 md:py-16 lg:py-10 transition-all duration-300" : "hidden"}>
                        <div className="geffectsec py-10 lg:py-1">
                            <button className="h-[30px] w-[30px] bg-white flex items-center justify-center ml-auto mr-5 md:mr-10 cursor-pointer rounded-lg my-3" onClick={closeTerms}>
                                <svg fill="currentColor" viewBox="0 0 512 512" className='geffectsvg' color="#000000" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                </svg> 
                            </button>
                            <div className='bg-white overflow-hidden px-5 md:px-20 py-5 md:py-20 ml-5 mr-5 md:ml-20 md:mr-20  rounded-lg '>
                                <h1 className='w-full text-center my-6 font-bold'>Workhub Terms</h1>
                                <p>
                                    Workhub Service respects your online privacy and recognises your need for appropriate protection and management of any personally identifiable information you share with us.  Workhub Service General Terms of Use page provides a link to our updated Data Protection and Privacy Policy, which explains the care with which we treat your personal information. Please read it carefully. <br/> <br/>

                                    By accessing this site you agree to be bound by the Terms of Use below. In case of dispute please note that only the English version of the site as well as of the Terms of Service (both “ Workhub Service and All Users” and “ Workhub Product and Service”) and the Data Protection and Privacy Policy will be legally binding. <br/> <br/>

                                    If you do not agree to the Terms, please do not access this site. Copyright © D Workhub Service 2023-2025. All Rights Reserved. <br /> <br />

                                    Copyright in the pages and in the screens displaying the pages, and in the information and material therein and in their arrangement, is owned by  Workhub Service unless otherwise indicated. <br /> <br />
                                    
                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}>Trademarks</span> <br />
                                    Workhub Service and its subsidiaries claim rights in certain trademarks and service marks contained in these web pages. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}>Use of information </span> <br />

                                    The information and materials contained in these pages, and the terms, conditions, and descriptions that appear, are subject to change. Unauthorized use of Workhub Service web sites and systems including but not limited to unauthorized entry into Workhub Service systems, or misuse of any information posted on a site is strictly prohibited. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Our Links </span> <br/>

                                    Workhub Service HEREBY DISCLAIMS LIABILITY FOR, ANY INFORMATION, SERVICES POSTED OR OFFERED AT ANY OF THE THIRD PARTY SITES LINKED TO THIS WEB SITE. BY CREATING A LINK TO A THIRD PARTY WEB SITE, Workhub Service DOES NOT ENDORSE OR RECOMMEND ANY PRODUCTS OR SERVICES OFFERED OR INFORMATION CONTAINED AT THAT WEB SITE, NOR IS Workhub Service LIABLE FOR ANY FAILURE OF PRODUCTS OR SERVICES OFFERED OR ADVERTISED AT THOSE SITES. SUCH THIRD PARTY MAY HAVE A PRIVACY POLICY DIFFERENT FROM THAT OF Workhub Service AND THE THIRD PARTY WEBSITE MAY PROVIDE LESS SECURITY THAN THE Workhub Service SITE. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Submissions </span> <br />

                                    All information submitted to Workhub Service via this site shall be deemed and remain the property of Workhub Service and Workhub Service shall be free to use, for any purpose, any idea, concepts, know-how or techniques contained in the information a visitor provides through this site. Workhub Service shall not be subject to any obligations of confidentiality regarding submitted information except as agreed by the Workhub Service entity having the direct customer relationship or as otherwise specifically agreed or required by law. Nothing contained herein shall be construed as limiting or reducing Workhub Service's responsibilities and obligations to customers in accordance with the Workhub Service Privacy Policy. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> No Warranty </span> <br />

                                    THE INFORMATION AND MATERIALS CONTAINED IN THIS SITE, INCLUDING TEXT, GRAPHICS, LINKS OR OTHER ITEMS ARE PROVIDED "AS IS", "AS AVAILABLE". Workhub Service DOES NOT WARRANT THE ACCURACY, ADEQUACY OR COMPLETENESS OF THIS INFORMATION AND MATERIALS AND EXPRESSLY DISCLAIMS LIABILITY FOR ERRORS OR OMISSIONS IN THIS INFORMATION AND MATERIALS. NO WARRANTY OF ANY KIND, IMPLIED, EXPRESSED OR STATUTORY INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF NON-INFRINGEMENT OF THIRD PARTY RIGHTS, TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND FREEDOM FROM COMPUTER VIRUS, IS GIVEN IN CONJUNCTION WITH THE INFORMATION AND MATERIALS. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Limitation of Liability </span> <br />

                                    IN NO EVENT WILL Workhub Service BE LIABLE FOR ANY DAMAGES, INCLUDING WITHOUT LIMITATION DIRECT OR INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, LOSSES OR EXPENSES ARISING IN CONNECTION WITH THIS SITE OR ANY LINKED SITE OR USE THEREOF OR INABILITY TO USE BY ANY PARTY, OR IN CONNECTION WITH ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS OR LINE OR SYSTEM FAILURE, EVEN IF GIVENGAIN, OR REPRESENTATIVES THEREOF, ARE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LOSSES OR EXPENSES. <br /><br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Availability </span> <br />
                                    
                                    This site is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to local law or regulation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto w-full overflow-hidden flex items-center justify-center text-center mt-8 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-nowrap'>
                &#169; 2025 Workhub Services. All Rights Reserved.
            </div>
        </section>
    </footer>
  );
}

export default Footer