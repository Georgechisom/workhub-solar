import React, { useState } from 'react';
import Logo from "../../images/workhublogo.png";
import { Link } from 'react-router-dom';
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter3.png";
import YouTube from "../../images/youtube.png";
import BackgroundImage from "../../images/officeWorkhubDesk.JPG";
import "../Footer/Footer.css";


const Footer = () => {

    const [showTerms, setShowTerms] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    const openTerms = () => {
        setShowTerms(true)
    };

    const closeTerms = () => {
        setShowTerms(false)
    };

    const openPolicy = () => {
        setShowPolicy(true)
    };

    const closePolicy = () => {
        setShowPolicy(false)
    };

  return (
    <footer className='relative'>
        <div className='max-w-screen-xl mt-10 mx-auto w-full h-full overflow-hidden py-14 md:py-20 px-4 lg:px-20 footerbg text-white' style={{ backgroundImage: `url('${BackgroundImage}')`, objectFit: "cover", }}>
            <div className='my-10'>
                <div className="font-semibold text-center">
                    Experience seamless and secure solar installations nationwide with Workhub. paired with other innovative services by experts to transform your building into a smart, sustainable home.
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
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center content-center gap-6 mx-auto'>
                <Link to="/" className='mx-auto'>
                    <img src={Logo} alt='logo' className='object-cover w-32 md:w-52 cursor-pointer invert'/>
                </Link>
                <div className='flex flex-col justify-center items-center w-full py-4'>
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
                <div className='flex flex-col justify-center items-center w-full py-4'>
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
                <div className='flex flex-col justify-center items-center w-full py-4'>
                    <h3 className="font-bold py-3 text-left text-base">Regulations</h3>
                    <div className='flex flex-col justify-center items-start gap-2 text-sm md:text-base'>
                        <button onClick={openTerms} className='hover:italic hover:font-semibold'>
                            Our Terms
                        </button>
                        <button onClick={openPolicy} className='hover:italic hover:font-semibold'>
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
                    <div className={showPolicy ? "geffect fixed w-full h-full overflow-scroll top-0 md:top-0 left-0 bottom-0 right-0 z-50 py-28 md:py-16 lg:py-10 transition-all duration-300" : "hidden"}>
                        <div className="geffectsec py-10 lg:py-1">
                            <button className="h-[30px] w-[30px] bg-white flex items-center justify-center ml-auto mr-5 md:mr-10 cursor-pointer rounded-lg my-3" onClick={closePolicy}>
                                <svg fill="currentColor" viewBox="0 0 512 512" className='geffectsvg' color="#000000" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                </svg> 
                            </button>
                            <div className='bg-white overflow-hidden px-5 md:px-20 py-5 md:py-20 ml-5 mr-5 md:ml-20 md:mr-20  rounded-lg '>
                                <h1 className='w-full text-center my-6 font-bold'>Workhub Private Policy</h1>
                                <div>
                                    Workhub Service operates website including https://workhub-solar.vercel.app It is Workhub Service's policy to respect your privacy regarding any information Workhub Service may collect while operating its websites as Workhub Service takes the protection of your data seriously in all of its processing. <br/> <br/>

                                    
                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}>Consent</span> <br />
                                    It will be very difficult and in some cases even impossible for Workhub Service to provide you services if you refuse to allow Divineone Community to process your data. for this reason, by providing Workhub Service with your data, you explicitly agree to the processing of your data for the purposes mentioned hereinafter and to be legally bound by and explicitly consent to this data protection and privacy policy, as it may be amended from time to time. if you do not agree to this data protection and privacy policy or cannot form a legally binding contract, you are not permitted to provide Workhub Service with any data. <br /> <br />

                                    You may request to delete your information on Workhub Service’s websites at any time by sending us a mail. if you have provided Workhub Service with other data in addition to those sent, you also have the right to withdraw your consent to the processing of such data at any time by contacting the data protection officer at info@workhubservice.com . should you withdraw your consent to the processing of your data, you are hereby informed that such withdrawal may prevent Workhub Service from providing all or certain of its available services. this data protection and privacy policy is without prejudice of your right to lodge a complaint with a supervisory authority, if necessary. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}>Scope of this Data Protection and Privacy Policy </span> <br />

                                    This Data Protection and Privacy Policy applies to the services offered by Workhub Service through its website. <br /> <br />

                                    This Data Protection and Privacy Policy does not apply to services offered by other companies or individuals. This Data Protection and Privacy Policy does not cover the activities performed by other companies and organizations who advertise Workhub Service’s services or any third party operating any website to which Workhub Service’s websites may contain a link. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Data collected and purposes of the collection </span> <br/> <br />

                                    <span className="text-base mt-2 mb-2 font-bold" style={{ color: "red", }}> Non-personal data </span> <br/>

                                    Like most website operators, Workhub Service collects from visitors of Workhub Service’s websites non-personal data of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site and the date and time of each visitor request. Workhub Service's purposes in collecting such non-personal data are to optimize users’ experience of the Workhub Service’s websites and render them more user-friendly, better understand how visitors use Workhub Service’s websites and analyze their behavior for statistical purposes, for example by monitoring the most popular service accounts on the Workhub Service’s websites. From time to time, Workhub Service may release non-personal data in the aggregate, e.g, by publishing a report on trends in the usage of its websites. Workhub Service may display this information publicly or provide it to third parties. <br /> <br />

                                    <span className="text-base mt-2 mb-2 font-bold" style={{ color: "red", }}> Personal data </span> <br/>

                                    Certain users of Workhub Service's websites choose to interact with Workhub Service in ways that require Workhub Service to gather personal data. Workhub Service does not collect and process more personal data than is necessary to fulfill the purposes for which personal data is collected and processed. The amount and type of personal data that Workhub Service gathers depends on the nature of the interaction, as detailed below. <br /> 

                                    <ul>
                                        <li>
                                            Registered users: users who sign up on Workhub Service's websites are required to provide a fullname and email address for identification purposes. Workhub Service also collects Internet Protocol (IP) addresses for security reasons.
                                        </li> <br />
                                        <li>
                                            Support: if you send Workhub Service a request (for example via a support email ), Workhub Service reserves the right to publish it in order to help Workhub Service clarify or respond to your request or to help Workhub Service support other users.
                                        </li> <br />
                                        <li>
                                            Legal and other purposes: Workhub Service may process personal data <br /> (a) to the extent necessary for compliance with a legal obligation to which Divineone Community is subject, <br /> (b) to respond to requests from competent public and government authorities, <br /> (c) to perform a task carried out in the public interest, <br/> (d) to enforce this Data Protection and Privacy Policy and <br/> (e) to protect Workhub Service's legitimate interests (in such a case, Workhub Service will disclose to you the legitimate interests at stake).
                                        </li> <br /> <br />
                                        </ul>

                                    Workhub Service will not rent or sell personal data to anyone and will ask your consent before using personal data for a purpose other than those set out in this Data Protection and Privacy Policy, subject to mandatory laws. <br/> <br/>

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Requests </span> <br />

                                    You have the right to access and update your personal data at any time through your account on Workhub Services’s websites. <br/>
                        
                                    In addition and to the extent applicable, you are entitled to submit a request to the Data Protection Officer in order to: <br /> <br />

                                    <ul>
                                        <li>
                                            have access to your personal data and obtain information in relation thereto (i.e. purposes of the processing, categories of personal data concerned, recipients to whom personal data have been or will be disclosed, etc.);
                                        </li> <br/>
                                        <li>rectify your personal data;</li> <br/>
                                        <li>
                                            erase your personal data, unless retention of personal data is required by any applicable law or competent court or authority;
                                        </li> <br/>
                                        <li>restrict or object to the processing of your personal data; and </li> <br/>
                                        <li>
                                            receive, or request Workhub Services to transmit to another designated person or entity, your personal data in a structured, commonly used and machine-readable format.
                                        </li>
                                    </ul> <br/> <br/>

                                    To exercise any of the above mentioned rights, please contact us via mail info@workhubservice.com who will subsequently confirm you the execution of your request. <br/>

                                    If requests are manifestly unfounded or excessive, in particular because of their repetitive character, Workhub Service reserves its right to either charge a reasonable fee taking into account the request or refuse to act on the request. <br/>

                                    Without prejudice of non-personal data, Workhub Service may request the provision of additional information to confirm the identity of the data subject if they have reasonable doubts concerning the identity of the person making the request. <br/> <br/>

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Duration of storage </span> <br />

                                    General and personal data will be kept by Workhub Service only as long as it is necessary for the purposes for which they have been provided, unless retention of data is required by any applicable law or competent court or authority or for statistical or archiving purposes. <br /><br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Location of storage </span> <br />
                                    
                                    <ul>
                                        <li>
                                            User data: your user information (i.e. name, email address, etc.) are stored in Workhub’s servers which are located in a third party provider’s data center in Nigeria.
                                        </li>
                                    </ul> <br/><br/>

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Security measures </span> <br />

                                    Workhub Service has taken and will maintain appropriate technical and organizational security measures in particular to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction or damage and ensure the ongoing confidentiality, integrity, availability of personal data and resilience of the systems and services used for processing of personal data. Workhub Service will test and review the efficiency of the implemented technical and organizational measures on a regular basis. <br/> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Security measures </span> <br />

                                    You must ensure that data you provide us with are: <br /> <br/>

                                    <ul>
                                    <li>correct;</li> <br/>
                                    <li>accurate;;</li> <br />
                                    <li>truthful; and </li> <br/>
                                    <li>compliant with any applicable laws. </li> <br />
                                    </ul> <br />

                                    In particular, since Workhub Service will mainly use email communications with you, you are required to notify Workhub Service of any modification of your email address. Alternatively, you can directly update your contact profile on your account. <br/> <br />

                                    Insofar as you provide Workhub Service with personal data about third parties, you represent and warrant that you have the right to share this personal data and where necessary have obtained sufficient informed consent from such persons and provided them with all necessary information, as may be required by applicable law or agreement, for Workhub Service to store and process any such personal data. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Disclosure of your data </span> <br />

                                    To accomplish the purposes mentioned in this Data Protection and Privacy Policy, your personal data may be disclosed to other entities, including to entities located in countries whose data protection laws may be different from, and less stringent than, those in your country of residence and for which there is no decision of adequacy of the EU Commission considering that the relevant country ensures an adequate level of protection for personal data. You hereby agree and give your consent to Workhub Service to transfer and communicate your personal data as follows: <br /> <br />

                                    <ul>
                                        <li>
                                            Transaction to third parties: Workhub Service may disclose your data to its third-party contractors located in the US, UK, South Africa, Australia, The Netherlands, Czech Republic and Switzerland that need to have access to such data in order to process it on Workhub Service's behalf or to provide services available at Workhub Service's websites, in particular to charities, payment processors, IT service providers, customer support providers, auditors and lawyers. A complete and detailed list of up-to-date third-party service providers is available upon request. Third-party contractors have executed agreements with Divineone Community requiring in particular that they abide by the rules of the applicable data protection laws, in particular the EU General Data Protection Regulation 2016/679, and comply with any instruction they receive from Divineone Community, as data controller, regarding personal data.
                                        </li> <br />
                                    </ul> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Cookies </span> <br />

                                    A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Workhub Service uses cookies to help Workhub Service identify and track visitors, their usage of the Workhub Service website, and their website access preferences. Divineone Community visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Workhub Service's websites, with the drawback that certain features of Workhub SErvices's websites may not function properly without the aid of cookies. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Adverts </span> <br />

                                    This Privacy does not regulate the use of cookies by any advertisers. Workhub Service nonetheless informs you that ads appearing on any of Workhub Service's websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Data Protection and Privacy Policy Changes </span> <br />

                                    Workhub Service may change its Data Protection and Privacy Policy from time to time and in Workhub Service's sole discretion, in particular to comply with statutory data protection and privacy laws. Workhub Service encourages users to frequently check this page for any changes to this Data Protection and Privacy Policy. 

                                    If the changes are significant (e.g. your personal data will be processed for new purposes), Workhub Service will require your consent during your next visit on Divineone Community's website. Workhub Service will not be able to provide you with all or part of its services as long as you have not accepted the amended terms. <br /> <br />

                                    <span className="text-lg mt-2 mb-2 font-bold" style={{ color: "red", }}> Contact </span> <br />

                                    If you need further assistance, contact us via our email info@workhub.com or by visiting Workhub Service’s website and clicking on our website to submit your inquiry. <br /> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-full overflow-hidden flex items-center justify-center text-center mt-8 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-nowrap'>
                &#169; 2025 Workhub Services. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
}

export default Footer