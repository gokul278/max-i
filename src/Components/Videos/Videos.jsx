import React from 'react'
import poster from "../../assets/Img/Works/VideoPoster.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from '../../Pages/Loader/Loader';
import { SocialMediaCard } from '../../Pages/SocialMediaCard/SocialMediaCard';
import { VideoCard } from '../../Pages/VideoCard/VideoCard';
import { useTranslation } from 'react-i18next';

export const Videos = () => {

    const { t, i18n } = useTranslation("global");

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
            <div className="h-[60vh] flex flex-col justify-center items-center" style={{ backgroundImage: `url(${poster})`, width: "100%", backgroundSize: 'cover', backgroundPosition: 'center' }} align="center">
                <h1 className="text-[40px] text-[#fff] uppercase font-bold">Videos</h1>
                <h6 className=" text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer"><div onClick={() => { navigate("/") }}>{t("nav.home")}</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#fff]" onClick={() => { navigate("/works") }}>{t("nav.works")}</div>&nbsp;&nbsp;-&nbsp;&nbsp;<div className="text-[#ffaa14] " onClick={() => { navigate("/works/videos") }}>Videos</div></h6>
            </div>
            <div className="w-[100%]" align="center">
                <div className="py-20 w-[90%]">
                    <VideoCard />
                </div>
            </div>
        </div>
    )
}
