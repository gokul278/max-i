import React from 'react'
import { WorksCard } from '../../Pages/WorksCard/WorksCard';
import poster from "../../assets/Img/Works/WebPoster.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from '../../Pages/Loader/Loader';

export const WebDesigns = () => {

    const navigate = useNavigate();

    const [loadingstatus, setLoadingStatus] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingStatus(false)
        }, 1000); // 1000 milliseconds = 1 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loadingstatus ? <Loader /> : <></>}
            <div className="h-[60vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${poster})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className="text-[40px] text-[#fff] uppercase font-bold">Web Designs</h1>
                <h6 className="text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer"><div onClick={() => { navigate("/") }}>Home</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#fff]" onClick={() => { navigate("/works") }}>Our Works</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#ffaa14]" onClick={() => { navigate("/works/webdesigns") }}>Web Designs</div></h6>
            </div>
            <div className="w-[100%]" align="center">
                <div className="py-20 w-[90%]">
                    <WorksCard />
                </div>
            </div>
        </div>
    )
}
