import React from 'react'
import movenpack from "../../assets/Img/Works/WorkCard/movenpack.jpg";
import ublisyoga from "../../assets/Img/Works/WorkCard/ublisyoga.jpg";

export const WorksCard = () => {

    const cardui = " w-[350px] h-[430px] lg:h-[460px] cursor-pointer relative group overflow-hidden"; // added overflow-hidden
    const cardimg = "transition-transform duration-300 ease-in-out"; // added hover effect
    const heading = "w-[100%] h-[40px] bg-[#ffaa14] rounded-t-lg text-[18px] font-bold flex justify-center items-center";
    const button = "w-[100px] absolute opacity-0 transition-opacity duration-300 ease-in-out bg-[#ffaa14] text-[#fff] text-[15px] py-2 px-4 rounded group-hover:opacity-100";


    const cardData = [
        {
            name:"Move N Pack",
            
        }
    ]

    return (
        <div className='w-[100%] flex flex-wrap justify-center gap-x-10 gap-y-5'>
            <div className={cardui} align="center">
                <img className={cardimg} src={movenpack} alt="logo" />
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out'></div> {/* Dark overlay */}
                <div className={heading}>Move N Pack</div>
                <button className={button} style={{ top: '50%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                    Site&nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <button className={button} style={{ top: '50%', left: '69%', transform: 'translate(-50%, -50%)' }}>
                    View&nbsp;&nbsp;<i className="fa-solid fa-eye"></i>
                </button>
            </div>

            <div className={cardui} align="center">
                <img className={cardimg} src={ublisyoga} alt="logo" />
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out'></div> {/* Dark overlay */}
                <div className={heading}>Ublis Yoga</div>
                <button className={button} style={{ top: '50%', left: '33%', transform: 'translate(-50%, -50%)' }}>
                    Site&nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <button className={button} style={{ top: '50%', left: '69%', transform: 'translate(-50%, -50%)' }}>
                    View&nbsp;&nbsp;<i className="fa-solid fa-eye"></i>
                </button>
            </div>
        </div>
    )
}
