import React from 'react';
import search from '../../assets/Img/Home/Logo/Search.svg'
import Settings from "../../assets/Img/Services/Settings.svg"
import content from "../../assets/Img/Services/Content.svg"
import webdesign from "../../assets/Img/Services/webdesign.svg"
import brand from "../../assets/Img/Services/brand.svg"
import app from "../../assets/Img/Services/app.svg"
import media from "../../assets/Img/Services/media.svg"

import "./ServiceCards.css"

export const ServiceCards = () => {
    return (
        <>
            <div
                className="card-container w-[90%] lg:w-[450px] h-[550px] lg:h-[500px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={search} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Search Engine Optimisation(SEO)</h1>
                <p className="text-[15px] h-[240px] lg:h-[200px] text-zinc-500 leading-6 text-justify">
                    We specialize in providing SEO solutions tailored to help businesses enhance their online visibility, generate more leads, and boost revenue. With our expertise in white hat SEO practices, we craft customized strategies to address your unique business goals, delivering measurable results and tangible ROI.
                </p>
                <p className="text-[15px] text-zinc-500 leading-6 capitalize text-justify">
                    <div className='flex flex-wrap justify-start gap-x-3'>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;On-page SEO</div>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Off-Page SEO</div>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Technical SEO</div>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Local SEO</div>
                    </div>
                </p>
            </div>

            <div
                className="card-container w-[90%] lg:w-[450px] h-[570px] lg:h-[500px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={Settings} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Search Engine Marketing</h1>
                <p className="text-[15px] h-[290px] lg:h-[200px] text-zinc-500 leading-6 text-justify">
                    At Max-I, we craft bespoke growth strategies that seamlessly integrate with your business goals, ensuring every marketing effort is purpose-driven and results-oriented. By analyzing your target audience's search behaviors across their purchase cycles, we tailor SEM campaigns that resonate at each touchpoint, propelling prospects towards meaningful brand engagements.
                </p>
                <p className="text-[15px] text-zinc-500 leading-6 capitalize text-justify">
                    <div className='flex flex-wrap justify-start gap-x-3'>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Google ads</div>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Pay Per Click</div>
                        <div><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Youtube Ads</div>
                    </div>
                </p>
            </div>


            <div
                className="card-container w-[90%] lg:w-[450px] h-[460px] lg:h-[400px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={content} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Content Marketing</h1>
                <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
                    Our content marketing services engage audiences, build brand authority, and boost conversions. We create valuable content for blogs, social media, and email campaigns, attracting and retaining customers. With strategic campaigns, we fuel online growth, helping businesses succeed in the digital landscape.
                </p>
            </div>

            <div
                className="card-container w-[90%] lg:w-[450px] h-[480px] lg:h-[400px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">04</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={webdesign} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Web Design</h1>
                <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
                    In today's digital landscape, having a user-friendly website is essential, but it's equally crucial for it to be SEO-friendly. Our website development strategy focuses on striking the perfect balance between aesthetics, functionality, and search engine optimization, ensuring your site attracts and retains visitors while also ranking well organically.
                </p>
            </div>

            <div
                className="card-container w-[90%] lg:w-[450px] h-[520px] lg:h-[420px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">05</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={brand} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Brand Management</h1>
                <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
                    Our brand management services encompass strategic planning, identity development, reputation management, and ongoing brand enhancement to ensure your brand resonates with your target audience. Achieve brand differentiation and relevance in your industry with our strategic approach, focusing on brand positioning, market insights, and continuous improvement.
                </p>
            </div>


            <div
                className="card-container w-[90%] lg:w-[450px] h-[500px] lg:h-[420px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">06</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={app} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">App store optimization (ASO)</h1>
                <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
                    Our app store optimization (ASO) strategies are meticulously crafted to elevate your app's visibility, driving organic downloads and user engagement. Drive app success with our comprehensive ASO solutions, designed to optimize keywords, enhance app descriptions, and elevate user experiences for sustained growth.
                </p>
            </div>


            <div
                className="card-container w-[90%] lg:w-[450px] h-[500px] lg:h-[400px] cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300"
            >
                <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">07</p>
                </div>
                <div className="card-icon w-[70px] pt-[20px] h-[100px]">
                    <img src={media} alt="logo" />
                </div>
                <h1 className="font-bold text-xl capitalize">Social Media Advertising</h1>
                <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
                    Our social media advertising strategies are geared towards amplifying your brand's reach, driving meaningful engagements, and fostering lasting connections with your target audience. Achieve your business objectives with data-driven advertising, designed to optimize ad performance, drive traffic, and generate valuable leads.
                </p>
            </div>
        </>
    );
};
