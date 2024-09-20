import React, { useState } from 'react';
import logoimg from "../../assets/Img/Works/Img.jpg";
import chillax from "../../assets/Img/Works/LogoDesigns/chillax.png"
import swiss from "../../assets/Img/Works/LogoDesigns/swiss.png";
import movenpack from "../../assets/Img/Works/LogoDesigns/movenpack.png";
import brandnew from "../../assets/Img/Works/LogoDesigns/brandnewoutlet.png";
import smarthandy from "../../assets/Img/Works/LogoDesigns/smarthandy.png";
export const LogoCard = () => {
    const [modalImage, setModalImage] = useState(null); // State to store the selected image for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open

    const cardui = " w-[350px] h-[auto] cursor-pointer relative group overflow-hidden";
    const cardimg = "w-[300px] h-[200px] transition-transform duration-300 ease-in-out rounded-t-md ";
    const heading = "w-[100%] h-[40px] bg-[#ffaa14] rounded-b-md text-[18px] font-bold flex justify-center items-center";
    const button = "w-[100px] absolute opacity-0 transition-opacity duration-300 ease-in-out bg-[#ffaa14] text-[#fff] text-[15px] py-2 px-4 rounded group-hover:opacity-100";

    const cardData = [
        { name: "Chillax", img: chillax, fullimg: chillax},
        { name: "My Swiss Tamil", img: swiss, fullimg: swiss},
        { name: "Move N Pack", img: movenpack, fullimg: movenpack},
        { name: "Brands New Outlet", img: brandnew, fullimg: brandnew},
        { name: "Smart Handy Reparatur", img: smarthandy, fullimg: smarthandy},
    ];

    // Function to handle opening the modal with the selected image
    const handleViewClick = (img) => {
        setModalImage(img);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <div className='w-[100%] flex flex-wrap justify-center gap-x-10 gap-y-8'>
            {cardData.map((card, index) => (
                <div key={index} className={cardui} align="center">
                    <img className={cardimg} src={card.img} alt={card.name} />
                    <div className='absolute inset-0 bg-black rounded-md  opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out'></div>
                    <div className={heading}>{card.name}</div>
                    <button
                        className={button}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        onClick={() => handleViewClick(card.fullimg)} // Set the image for the modal
                    >
                        View&nbsp;&nbsp;<i className="fa-solid fa-eye"></i>
                    </button>
                </div>
            ))}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                    <div className="relative w-[100%]" onClick={(e) => e.stopPropagation()}>
                        <div className='w-[80%] mb-5' align="end">
                            <button
                                className="bg-[#ffaa14] text-[#fff] rounded-full px-[11px] py-[5px]"
                                onClick={handleCloseModal}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className='w-[80%] h-[80vh] overflow-auto'>

                            <img src={modalImage} alt="Modal" className="w-[90%] lg:w-[50%] rounded-lg" />

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
