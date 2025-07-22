"use client";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Logowrapper = () => {
  return (
    <div className="w-full bg-white mt-12">
      <Marquee
        speed={100}
        direction="right"
        gradient={false}
        pauseOnHover={true}
        className="space-x-12"
      >
        <a href="https://www.carrefourlebanon.com/maflbn/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo1.png" alt="Logo 1" width={130} height={60} className="mx-12" />
        </a>

        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo2.png" alt="Logo 2" width={130} height={60} className="mx-12" />
        </a>

        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo3.png" alt="Logo 3" width={130} height={60} className="mx-12" />
        </a>
        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo4.png" alt="Logo 4" width={130} height={60} className="mx-12" />
        </a>
        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo5.png" alt="Logo 5" width={130} height={60} className="mx-12" />
        </a>
        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo6.png" alt="Logo 6" width={130} height={60} className="mx-12" />
        </a>
        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo7.png" alt="Logo 7" width={130} height={60} className="mx-12" />
        </a>
        <a href="https://www.hilton.com/en/" target="_blank" rel="noopener noreferrer">
          <Image src="/logowrapper/logo8.png" alt="Logo 8" width={130} height={60} className="mx-12" />
        </a>

        
      </Marquee>

      
    </div>
  );
};

export default Logowrapper;
