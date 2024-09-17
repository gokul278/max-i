import { useEffect, useState } from "react";
import { Loader } from '../../Pages/Loader/Loader';
import { useNavigate } from "react-router-dom";
import poster from "../../assets/Img/Services/Poster.jpg";
import { ServiceCards } from "../../Pages/ServiceCards/ServiceCards";

export const Services = () => {

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
                <h1 className="text-[40px] text-[#fff] uppercase font-bold">Our Services</h1>
                <h6 className="text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer"><div onClick={() => { navigate("/") }}>Home</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#ffaa14]" onClick={() => { navigate("/services") }}>Our Services</div></h6>
            </div>

            <div className="w-[100%]" align="center">
                <div className="mt-10 mb-10 w-[90%] lg:w-[80%] text-[18px] font-semibold text-center">
                    We're laser-focused on generating ROI, executing targeted acquisition initiatives, fostering customer loyalty, and elevating brand perception. With a proven track record of success, we've been instrumental in driving growth for startups, established brands, and multinational enterprises across the globe.
                </div>
            </div>

            <div className='w-[100%] flex justify-center gap-14 flex-wrap items-center pb-20'>
                <ServiceCards/>
            </div>
        </div>
    )
}
