import { useEffect, useState } from "react";
import { Loader } from '../../Pages/Loader/Loader';
import { useNavigate } from "react-router-dom";
import poster from "../../assets/Img/Aboutus/Poster.jpg";
import Mainbg from "../../assets/Img/Aboutus/Mainbg.jpg"
import bg from "../../assets/Img/Aboutus/Bg.jpg";
import "./AboutUs.css"
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t, i18n } = useTranslation("global");

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
    <div className="bg-[#f5f7f8]">
      {loadingstatus ? <Loader /> : <></>}
      <div className="h-[60vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${poster})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-[40px] text-[#fff] uppercase font-bold">{t("nav.about")}</h1>
        <h6 className="text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer"><div onClick={() => { navigate("/") }}>{t("nav.home")}</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#ffaa14]" onClick={() => { navigate("/aboutus") }}>{t("nav.about")}</div></h6>
      </div>


      <div className='w-[100%] bg-[#F5F7F8] pt-10' align="center">
        <h1 className=' w-[90%] lg:-[100%] text-[40px] font-bold capitalize text-[#000] py-10' data-aos="fade-up" align="center">{t("nav.about")} <br /><span className="text-[#ffaa14]">MAX-I</span>
        </h1>
        <div className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row pb-14' align="center">
          <div className='w-[100%] lg:w-[50%]' align="center">
            <img src={Mainbg} className='rounded w-[100%] lg:w-[300px] lg:h-[300px]' alt="logo" data-aos="fade-right" />
          </div>
          <div className='w-[100%] h-[300px] flex flex-col justify-center lg:w-[40%] mt-[20px] lg:mt-0'>
            <div data-aos="fade-right">
              <p className='text-justify text-[18px] font-semibold'>{t("about.content")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8" style={{ backgroundImage: `url(${bg})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-[100%] pt-10 lg:pt-10' align="center">
          <div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row pb-14' align="center">
            <div className='w-[100%] lg:w-[30%]' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left">01</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">{t("about.ourmission")}</div>
            </div>
            <div className='w-[100%] flex flex-col justify-center lg:w-[70%] mt-[20px] lg:mt-0'>
              <div data-aos="fade-right">
                <p className='text-justify text-[18px] font-semibold'>{t("about.mission")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[100%]' align="center">
          <div className='w-[90%] lg:w-[70%] flex flex-col lg:flex-row pb-14' align="center">

            <div className='w-[100%] lg:w-[30%] block lg:hidden' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left" data-aos-delay="100">02</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">{t("about.ourvission")}</div>
            </div>

            <div className='w-[100%] flex flex-col justify-center mt-8 lg:mt-0 lg:w-[70%] '>
              <div data-aos="fade-right" data-aos-delay="100">
                <p className='text-justify text-[18px] font-semibold'>{t("about.vission")}</p>
              </div>
            </div>

            <div className='w-[100%] lg:w-[30%] hidden lg:block' align="center">
              <div className="w-[80px] h-[80px] bg-[#ffaa14] rounded-[50px] flex justify-center items-center text-[#fff] font-bold text-[25px]" data-aos="flip-left" data-aos-delay="100">02</div>
              &nbsp;&nbsp;<div className="text-[#000] font-bold text-[25px] mt-[-10px]">{t("about.ourvission")}</div>
            </div>
          </div>
        </div>


      </div>

      <div className="bg-[#f5f7f8]">
        <br />
      </div>
    </div>
  )
}
