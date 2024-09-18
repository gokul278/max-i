import React from 'react'
import welcome from "../../assets/Img/Blogs/Img/Welcome.jpg"

export const BlogCard = () => {
    return (
        <div className='w-[100%] flex flex-wrap gap-x-14 gap-y-10 justify-center'>

            <div className='w-[300px] cursor-pointer'>
                <img className='rounded' src={welcome} alt="logo" />
                <div className='w-[100%] py-1' align="start">
                    <div className='py-1 bg-[#ffaa14] text-[#fff] text-[16px] font-semibold rounded w-[100px]' align="center">Business</div>
                </div>
                <h1 className='py-1 text-[20px] font-bold' align="start">Hi welcome to Max-I</h1>
                <div className='text-[#000] font-sans font-normal flex justify-between'>
                    <div><i class="fa-regular fa-calendar-days text-[#ffaa14]"></i>&nbsp;&nbsp;June 13, 2024</div>
                    <div><i class="fa-regular fa-user text-[#ffaa14]"></i>&nbsp;&nbsp;By Admin</div>
                </div>
            </div>

            <div className='w-[300px] cursor-pointer'>
                <img className='rounded' src={welcome} alt="logo" />
                <div className='w-[100%] py-1' align="start">
                    <div className='py-1 bg-[#ffaa14] text-[#fff] text-[16px] font-semibold rounded w-[100px]' align="center">Business</div>
                </div>
                <h1 className='py-1 text-[20px] font-bold' align="start">Hi welcome to Max-I</h1>
                <div className='text-[#000] font-sans font-normal flex justify-between'>
                    <div><i class="fa-regular fa-calendar-days text-[#ffaa14]"></i>&nbsp;&nbsp;June 13, 2024</div>
                    <div><i class="fa-regular fa-user text-[#ffaa14]"></i>&nbsp;&nbsp;By Admin</div>
                </div>
            </div>

            <div className='w-[300px] cursor-pointer'>
                <img className='rounded' src={welcome} alt="logo" />
                <div className='w-[100%] py-1' align="start">
                    <div className='py-1 bg-[#ffaa14] text-[#fff] text-[16px] font-semibold rounded w-[100px]' align="center">Business</div>
                </div>
                <h1 className='py-1 text-[20px] font-bold' align="start">Hi welcome to Max-I</h1>
                <div className='text-[#000] font-sans font-normal flex justify-between'>
                    <div><i class="fa-regular fa-calendar-days text-[#ffaa14]"></i>&nbsp;&nbsp;June 13, 2024</div>
                    <div><i class="fa-regular fa-user text-[#ffaa14]"></i>&nbsp;&nbsp;By Admin</div>
                </div>
            </div>

        </div>
    )
}
