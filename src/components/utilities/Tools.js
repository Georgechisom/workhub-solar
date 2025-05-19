import React from 'react';
import WhatsApp from "../../images/whatsapp.png";

const Tools = () => {

    const WhatsAppLink = "https://wa.me/+2349066290201?text=Hello,%20I'm%20from%20workhub%20solar%20website%20I'd%20have%20a%20job%20for%20you.%20My%20name%20is%20";

  return (
    <div>
        <div>
            <a href={WhatsAppLink} target="_blank" rel='noopener noreferrer' className='relative overflow-hidden cursor-pointer bg-[#25D366] animate-pulse'>
                <img src={WhatsApp} alt="whatsappImage" className='w-12 md:w-14 lg:w-16 z-50 rounded-full fixed bottom-10 right-5 duration-300 transition-all left-0 ml-auto' />
            </a>
        </div>
    </div>
  )
}

export default Tools