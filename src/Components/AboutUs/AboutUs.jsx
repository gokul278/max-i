import { useEffect, useState } from "react";
import { Loader } from '../../Pages/Loader/Loader';
import { useNavigate } from "react-router-dom";
import poster from "../../assets/Img/Aboutus/Poster.jpg";
import Mainbg from "../../assets/Img/Aboutus/Mainbg.jpg"
import bg from "../../assets/Img/Aboutus/Bg.jpg";
import "./AboutUs.css"

export const AboutUs = () => {

  const navigate = useNavigate();

  const [loadingstatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false)
    }, 1000); // 1000 milliseconds = 1 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F5F7F8]">
      {loadingstatus ? <Loader /> : <></>}
      <div className="h-[60vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${poster})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-[40px] text-[#fff] uppercase font-bold">About US</h1>
        <h6 className="text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer"><div onClick={() => { navigate("/") }}>Home</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#ffaa14]" onClick={() => { navigate("/aboutus") }}>About Us</div></h6>
      </div>


      <div className='w-[100%] bg-[#F5F7F8] pt-10' align="center">
        <h1 className=' w-[90%] lg:-[100%] text-[40px] font-bold capitalize text-[#000] py-10' data-aos="fade-up" align="center">About Us <br /><span className="text-[#ffaa14]">MAX-I</span>
        </h1>
        <div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row pb-14' align="center">
          <div className='w-[100%] lg:w-[50%]' align="center">
            <img src={Mainbg} className='rounded w-[100%] lg:w-[300px] lg:h-[300px]' alt="logo" data-aos="fade-right" />
          </div>
          <div className='w-[100%] h-[300px] flex flex-col justify-center lg:w-[40%] mt-[20px] lg:mt-0'>
            <div data-aos="fade-right">
              <p className='text-justify text-[18px] font-semibold'>Welcome to Max-I, a digital marketing agency where creativity meets strategy and innovation thrives! We are a dynamic team of passionate digital marketers dedicated to helping businesses unlock their full potential in the online realm. We develop growth-oriented online marketing campaigns that make a positive impact on businesses.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bg})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-[100%] lg:pt-10' align="center">
          <div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row pb-14' align="center">
            <div className='w-[100%] lg:w-[30%]' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left">01</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">Our Mission</div>
            </div>
            <div className='w-[100%] flex flex-col justify-center lg:w-[70%] mt-[20px] lg:mt-0'>
              <div data-aos="fade-right">
                <p className='text-justify text-[18px] font-semibold'>At MAX-I, our mission is simple yet profound: to empower businesses of all sizes to thrive in the digital age. We believe that every brand has a unique story to tell, and we're here to help you craft and amplify that narrative across various digital channels.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[100%]' align="center">
          <div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row pb-14' align="center">

            <div className='w-[100%] lg:w-[30%] block lg:hidden' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left" data-aos-delay="100">02</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">Our Vision</div>
            </div>

            <div className='w-[100%] flex flex-col justify-center lg:w-[70%] '>
              <div data-aos="fade-right" data-aos-delay="100">
                <p className='text-justify text-[18px] font-semibold'>Our vision at Max-I is to be the trailblazer of digital evolution, sculpting bespoke digital ecosystems that transcend boundaries and redefine industry standards. We envision a dynamic digital landscape where brands not only engage but inspire, leveraging our strategic prowess and innovative technologies to create immersive experiences, foster genuine connections, and drive sustainable growth in the digital frontier.</p>
              </div>
            </div>

            <div className='w-[100%] lg:w-[30%] hidden lg:block' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left" data-aos-delay="100">02</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">Our Vision</div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
