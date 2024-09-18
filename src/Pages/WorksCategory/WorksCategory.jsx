import React from 'react'
import img from "../../assets/Img/Works/WorkCategory/Img.jpg";
import { useNavigate } from 'react-router-dom';

export const WorksCategory = () => {

    const navigate = useNavigate();

    const categoryData = [
        {
            img: img,
            name: "Logo Designs",
            link: "/logodesigns"
        },
        {
            img: img,
            name: "Web Designs",
            link: "/webdesigns"
        },
        {
            img: img,
            name: "Poster Designs",
            link: "/posterdesigns"
        },
        {
            img: img,
            name: "Videos",
            link: "/videos"
        }
    ]

    return (
        <div className='flex flex-wrap gap-x-7 gap-y-10 justify-center'>
            {
                categoryData.map((element) => (
                    <div className='w-[300px] cursor-pointer group relative drop-shadow-md' onClick={() => {
                        navigate("/works" + element.link)
                    }}>
                        <div className='group-hover:filter group-hover:brightness-50'>
                            <img
                                src={element.img}
                                alt="img"
                                className='transition rounded-t-md duration-300 ease-in-out'
                            />
                            <div className='py-2 rounded-b-md text-[18px] font-semibold bg-[#ffaa14]'>
                                {element.name}
                            </div>

                        </div>
                        <button
                            className='opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded'
                        >
                            Open&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
