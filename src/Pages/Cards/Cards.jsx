import React from 'react';
import digital from "../../assets/Img/Home/Logo/Digital.svg"
import web from "../../assets/Img/Home/Logo/Web.svg"
import search from '../../assets/Img/Home/Logo/Search.svg'
import "./Cards.css"

export const Cards = () => {
    return (
        <>
            <div data-aos="flip-right"
                className="card-container w-[300px] h-[380px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div data-aos="flip-left" className="
                card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
                </div>
                <div className="card-icon w-[80px] pt-[20px] h-[100px]">
                    <img src={digital} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Digital marketing</h1>
                <p className="text-[15px] text-zinc-500 leading-6">
                    Our social media advertising strategies are geared towards amplifying your brand's reach, driving meaningful engagements, and fostering connections.
                </p>
            </div>

            <div data-aos="flip-right"
                className="card-container w-[300px] h-[380px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
                </div>
                <div className="card-icon w-[80px] pt-[20px] h-[100px]">
                    <img src={web} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Web design</h1>
                <p className="text-[15px] text-zinc-500 leading-6">
                    In today's digital landscape, having a user-friendly website is essential, but it's equally crucial for it to be SEO-friendly. Our website development strategy focuses.
                </p>
            </div>

            <div data-aos="flip-right"
                className="card-container w-[300px] h-[380px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={search} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">SEO</h1>
                <p className="text-[15px] text-zinc-500 leading-6">
                    We specialize in providing SEO solutions tailored to help businesses enhance their online visibility, generate more leads, and boost revenue.
                </p>
            </div>
        </>
    );
};
