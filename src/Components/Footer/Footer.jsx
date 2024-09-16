import { useNavigate } from "react-router-dom"
import logo from "../../assets/Img/Home/logo.png"
export const Footer = () => {

    const navigate = useNavigate();
    return (
        <div className="bg-[#000]">
            <div className=" w-[100%] flex flex-wrap gap-10 justify-center py-10">
                <div className="w-[90%] lg:w-[30%]">
                    <img src={logo} alt="logo" />
                    <p className="mt-10 text-justify text-semibold text-[#fff]">Welcome to Max-I, a digital marketing agency where creativity meets strategy and innovation thrives! We are a dynamic team of passionate digital marketers dedicated to helping businesses unlock their full potential in the online realm. We develop growth-oriented online marketing campaigns that make a positive impact on businesses.</p>
                </div>
                <div className="w-[90%] lg:w-[25%]">
                    <h1 className="text-[#ffaa14] text-[30px] font-bold">Get In Touch</h1>
                    <a target="_blank" href="tel:04273562462" className="flex items-center cursor-pointer mt-10 text-[#fff] hover:text-[#ffaa14]">
                        <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-solid fa-phone"></i></div>
                        &nbsp;&nbsp;
                        <div className="font-sans">0427-3562462</div>
                    </a>

                    <a target="_blank" href="mailto:contact@max-idigital.com" className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]">
                        <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-solid fa-envelope"></i></div>
                        &nbsp;&nbsp;
                        <div className="font-sans">contact@max-idigital.com</div>
                    </a>

                    <a target="_blank" href="https://maps.app.goo.gl/34zejcCaCaD2ofhv7" className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]">
                        <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-solid fa-location-dot"></i></div>
                        &nbsp;&nbsp;
                        <div className="font-sans">38/37 No.1 Logi Street, Gugai,<br /> Salem - 636006, Tamilnadu, India</div>
                    </a>

                    <div className="flex">
                        <a target="_blank" href="https://www.facebook.com/people/Max-I/pfbid02kVFZE1pMCFF3nDWYjZbvEqZ1KHLcd4usvXzyWoEBdRVA1s65ngWymkN5Wqj2C3MPl/?sk=about" className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]">
                            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-brands fa-facebook"></i></div>
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://www.linkedin.com/in/max-i-digital-solution-b33a6030a/" className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]">
                            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-brands fa-linkedin-in"></i></div>
                        </a>
                        &nbsp;&nbsp;
                        <a target="_blank" href="https://www.youtube.com/@Max-IDigitalSolutions/videos" className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]">
                            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]"><i class="fa-brands fa-youtube"></i></div>
                        </a>
                    </div>

                </div>
                <div className="w-[90%] lg:w-[20%]">
                    <h1 className="text-[#ffaa14] text-[30px] font-bold">Useful Links.</h1>
                    <div className="text-[#fff] mt-10 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Home</div>
                    <div className="text-[#fff] mt-4 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/aboutus") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;About Us</div>
                    <div className="text-[#fff] mt-4 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/services") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Our Services</div>
                    <div className="text-[#fff] mt-4 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/works") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Out Works</div>
                    <div className="text-[#fff] mt-4 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/contact") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Contact Us</div>
                    <div className="text-[#fff] mt-4 cursor-pointer hover:text-[#ffaa14] font-semibold" onClick={() => { navigate("/") }}><i class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Privacy Policy</div>
                </div>
            </div>
            <div className="w-[100%] h-[2px] bg-[#ffaa14]"></div>
            <div className="text-[#fff] text-[17px] font-normal py-4" align="center">© Copyright @ MAX-I - 2024. All Rights Reserved</div>
        </div>
    )
}
