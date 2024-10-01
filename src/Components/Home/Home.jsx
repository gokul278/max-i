import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import bg from "../../assets/Img/Home/Bg.jpg";
import bg2 from "../../assets/Img/Home/Bg-2.svg";
import "./Home.css";
import { Cards } from "../../Pages/Cards/Cards";
import { useNavigate } from "react-router-dom";
import welcomeimg from "../../assets/Img/Home/Welcome.png";
import whywe1 from "../../assets/Img/Home/whywe1.png";
import whywe2 from "../../assets/Img/Home/whywe2.png";
import Slider from "../../Pages/Slider/Slider";
import { Loader } from "../../Pages/Loader/Loader";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");

  const [loadingstatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStatus(false);
    }, 1000); // 1000 milliseconds = 1 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loadingstatus ? <Loader /> : <></>}
      <div
        className="flex justify-center h-[60vh] lg:h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] pt-[100px]">
          <div className="w-[100%] lg:w-[40%] mt-[50px] flex justify-center flex-col">
            <h1 className="topic text-[24px] lg:text-[28px] text-[#fff]">
              <Typewriter
                options={{
                  strings: [
                    t("home.label1"),
                    t("home.label2"),
                    t("home.label3"),
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Branding - Marketing - Sales */}
            </h1>
            <div className="flex justify-center pt-2 pb-10">
              <div className="line" align="center"></div>
            </div>
            <p className="header text-[#fff] text-[50px] lg:text-[70px] text-center font-bold tracking-widest">
              {t("home.heading1")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center pt-[20px] align-center flex-col h-[auto] lg:h-[100vh]"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-[50px] font-bold capitalize text-[#ffaa14] py-10"
          data-aos="fade-up"
          align="center"
        >
          {t("home.whatwequestion")}
        </h1>
        <div className="w-[100%] flex justify-center gap-14 flex-wrap items-center">
          <Cards data-aos="flip-left" />
        </div>
        <div className="flex justify-center py-10">
          <button
            onClick={() => {
              navigate("/services");
            }}
            className={`button ${
              t("home.heading1") === "Creative Agency"
                ? "w-[220px]"
                : "w-[300px]"
            }`}
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            {t("home.explore")}
          </button>
        </div>
      </div>

      <div className="w-[100%] bg-[#F5F7F8]" align="center">
        <h1
          className=" w-[90%] lg:-[100%] text-[30px] font-bold capitalize text-[#000] py-10"
          data-aos="fade-up"
          align="center"
        >
          {t("home.welcome")} Max-I,
          <br />
          <span className="text-[#ffaa14] underline">
            {t("home.welcomehead")}
          </span>
        </h1>
        <div
          className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row pb-14"
          align="center"
        >
          <div
            className="w-[100%] h-[400px] lg:h-[450px] lg:w-[50%]"
            align="center"
          >
            <img
              src={welcomeimg}
              className="rounded w-[100%] lg:w-[400px] h-auto lg:h-[450px]"
              alt="logo"
              data-aos="fade-right"
            />
          </div>
          <div className="w-[100%] h-[450px] flex flex-col justify-center lg:w-[50%]">
            <div data-aos="fade-right">
              <h2 className="text-[25px] text-start font-bold mt-10 lg:mt-0">
                {t("home.welcomesubhead")}
              </h2>
              <p className="text-justify text-[16px] font-normal mt-5">
                {t("home.welcomecontent1")}
              </p>
              <p className="text-justify text-[16px] font-normal mt-5">
                {t("home.welcomecontent2")}
              </p>
              <div className="flex justify-start pt-10">
                <button
                  onClick={() => {
                    navigate("/services");
                  }}
                  className={`button ${
                    t("home.heading1") === "Creative Agency"
                      ? "w-[220px]"
                      : "w-[300px]"
                  }`}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  {t("home.explore")}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#ffaa14] py-14" align="center">
        <h1
          className="text-[50px] font-bold capitalize text-[#000]"
          data-aos="fade-up"
          align="center"
        >
         {t("home.whatwedoquestion")}
        </h1>
        <div
          className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row"
          align="center"
          data-aos="fade-right"
        >
          <div className={`w-[100%] h-[600px] ${t("home.heading1") === "Creative Agency" ? "lg:h-[450px]" : "lg:h-[500px]"} flex flex-col lg:w-[60%]`}>
            <h2 className="text-[30px] text-start font-bold mt-[10px] lg:mt-[50px]">
              Max-I
            </h2>
            <p className="text-justify text-[17px] font-normal mt-5">
            MAX-I, {t("home.whatwedoanswer1")}
            </p>
            <p className="text-justify text-[17px] font-normal mt-5">
            {t("home.whatwedoanswer2")}
            </p>
          </div>
          <div
            className="w-[100%] h-[350px] lg:h-[430px] lg:w-[40%] lg:mt-0 flex flex-col justify-center items-start lg:items-center"
            align="center"
          >
            <img
              src={whywe1}
              className="w-[250px] h-[250px] rounded"
              alt="img"
              data-aos="fade-right"
            />
            <img
              src={whywe2}
              className="w-[250px] h-[250px] rounded mt-[-100px] ml-[70px] lg:mr-[-100px]"
              alt="img"
              data-aos="fade-right"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>

      <div className="background py-10">
        <div className="w-[100%] lg:w-[100%] flex justify-center items-center flex-wrap gap-16">
          <div>
            <div
              className="w-[230px] h-[230px] review"
              style={{ "--percentage": 99 }}
              data-aos="fade-right"
            >
              <div className="reviewinside">
                <div className="data">99</div>
                <div className="percentage">%</div>
              </div>
            </div>
            <h1
              className="text-[#fff] text-[23px] font-semibold mt-5 uppercase"
              align="center"
            >
              {t("home.clientstaisfaction")}
            </h1>
          </div>
          <div>
            <div
              className="w-[230px] h-[230px] review"
              style={{ "--percentage": 87 }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="reviewinside">
                <div className="data">87</div>
                <div className="percentage">%</div>
              </div>
            </div>
            <h1
              className="text-[#fff] text-[23px] font-semibold mt-5 uppercase"
              align="center"
            >
              {t("home.cupofcoffee")}
            </h1>
          </div>
          <div>
            <div
              className="w-[230px] h-[230px] review"
              style={{ "--percentage": 95 }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="reviewinside">
                <div className="data">95</div>
                <div className="percentage">%</div>
              </div>
            </div>
            <h1
              className="text-[#fff] text-[23px] font-semibold mt-5 uppercase"
              align="center"
            >
              {t("home.productivity")}
            </h1>
          </div>
          <div>
            <div
              className="w-[230px] h-[230px] review"
              style={{ "--percentage": 91 }}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="reviewinside">
                <div className="data">91</div>
                <div className="percentage">%</div>
              </div>
            </div>
            <h1
              className="text-[#fff] text-[23px] font-semibold mt-5 uppercase"
              align="center"
            >
              {t("home.reviews")}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[100%] py-10" align="center">
        <div className="w-[100%] lg:w-[60%]">
          <Slider />
        </div>
      </div>
    </div>
  );
};
