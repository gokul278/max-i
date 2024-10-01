import { useEffect, useState } from "react";
import { Loader } from "../../Pages/Loader/Loader";
import { useNavigate } from "react-router-dom";
import poster from "../../assets/Img/Contatcus/Poster.jpg";
import "./Contactus.css";
import { useTranslation } from "react-i18next";

export const Contactus = () => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();

  const [loadingstatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false);
    }, 1000); // 1000 milliseconds = 1 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F5F7F8]">
      {loadingstatus ? <Loader /> : <></>}
      <div
        className="h-[60vh] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${poster})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[40px] text-[#fff] uppercase font-bold">
          {t("nav.contact")}
        </h1>
        <h6 className="text-[18px] text-[#fff] mt-3 uppercase font-semibold flex justify-center items-center cursor-pointer">
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            {t("nav.home")}
          </div>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <div
            className="text-[#ffaa14]"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {t("nav.contact")}
          </div>
        </h6>
      </div>

      <div className="w-[100%]" align="center">
        <h1
          className=" w-[90%] lg:-[100%] text-[35px] font-bold capitalize text-[#000] py-10"
          data-aos="fade-up"
          align="center"
        >
          Get In Touch
        </h1>

        <div className="w-[90%] lg:w-[75%] bg-[#F5F7F8] flex flex-col lg:flex-row">
          <div
            className="w-[100%] lg:w-[40%] py-10 bg-[#fff] rounded-l-md"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
            }}
          >
            <a
              target="_blank"
              href="tel:04273562462"
              className="py-5 w-[90%] cursor-pointer"
            >
              <div className="text-[30px]">
                <i className="fa-solid fa-phone border border-[#ffaa14] p-3 text-[#ffaa14] rounded-[50%]"></i>
              </div>
              <div className="mt-3 text-[20px] text-[#000] font-bold">
                0427-3562462
              </div>
            </a>
            <br />
            <br />

            <a
              target="_blank"
              href="mailto:contact@max-idigital.com"
              className="py-5 w-[90%] cursor-pointer"
            >
              <div className="text-[30px]">
                <i className="fa-regular fa-envelope border border-[#ffaa14] p-3 text-[#ffaa14] rounded-[50%]"></i>
              </div>
              <div className="mt-3 text-[20px] text-[#000] font-bold">
                contact-us@max-idigital.com
              </div>
            </a>
            <br />
            <br />

            <a
              target="_blank"
              href="https://maps.app.goo.gl/34zejcCaCaD2ofhv7"
              className="pt-10 w-[70%] cursor-pointer"
            >
              <div className="text-[30px]">
                <i className="fa-solid fa-location-dot border border-[#ffaa14] p-3 px-4 text-[#ffaa14] rounded-[50%]"></i>
              </div>
              <div className="mt-3 text-[20px] text-[#000] font-bold">
                38/37 No.1 Logi Street, Gugai,
                <br /> Salem - 636006, Tamilnadu,
                <br /> India
              </div>
            </a>
          </div>
          <div className="w-[100%] bg-[#fff] rounded-r-md lg:w-[60%]">
            <div className="w-[90%]">
              <div className="text-[30px] font-bold capitalize text-[#000] pt-10 pb-5">
                <span className="text-[#ffaa14] uppercase underline">
                  drop us a line
                </span>
              </div>

              <div class="relative my-6">
                <input
                  id="id-l01"
                  type="text"
                  name="id-l01"
                  placeholder="your name"
                  class="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#fff] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  for="id-l01"
                  class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Enter Your Name
                </label>
              </div>

              <div class="relative my-6">
                <input
                  id="id-l02"
                  type="text"
                  name="id-l01"
                  placeholder="your name"
                  class="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#fff] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  for="id-l02"
                  class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Enter E-Mail
                </label>
              </div>

              <div class="relative  pb-5">
                <textarea
                  id="id-l03"
                  type="text"
                  name="id-l01"
                  rows="3"
                  placeholder="Write your message"
                  class="relative w-full p-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#ffaa14] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-l03"
                  class="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Write your message
                </label>
              </div>

              <button className="conatctbutton mb-10 lg:mb-0">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[90%] lg:w-[75%] h-[450px] bg-[#F5F7F8] py-5 lg:py-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3907.6855225128643!2d78.1524955!3d11.6457436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf02bb4fa4d13%3A0xf3ada7f3555f0f5f!2s38%2F37B%2C%20Logi%20Chetty%20Street%20Number%201%2C%20Logi%20Street%2C%20Gugai%2C%20Salem%2C%20Tamil%20Nadu%20636006!5e0!3m2!1sen!2sin!4v1726567998067!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "5px" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
