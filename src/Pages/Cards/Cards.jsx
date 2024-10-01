import React from "react";
import digital from "../../assets/Img/Home/Logo/Digital.svg";
import web from "../../assets/Img/Home/Logo/Web.svg";
import search from "../../assets/Img/Home/Logo/Search.svg";
import "./Cards.css";
import { useTranslation } from "react-i18next";

export const Cards = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <div
        data-aos="flip-right"
        className={`card-container w-[300px] ${t("home.heading1") === "Creative Agency" ? "h-[380px]" : "h-[400px]"} cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div
          data-aos="flip-left"
          className="
                card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7"
        >
          <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
        </div>
        <div className="card-icon w-[80px] pt-[20px] h-[100px]">
          <img src={digital} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("home.whatweanswerheading1")}
        </h1>
        <p className="text-[15px] text-zinc-500 leading-6">
          {t("home.whatweanswercontent1")}
        </p>
      </div>

      <div
        data-aos="flip-right"
        className={`card-container w-[300px] ${t("home.heading1") === "Creative Agency" ? "h-[380px]" : "h-[400px]"} cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
        </div>
        <div className="card-icon w-[80px] pt-[20px] h-[100px]">
          <img src={web} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("home.whatweanswerheading2")}
        </h1>
        <p className="text-[15px] text-zinc-500 leading-6">
          {t("home.whatweanswercontent2")}
        </p>
      </div>

      <div
        data-aos="flip-right"
        className={`card-container w-[300px] ${t("home.heading1") === "Creative Agency" ? "h-[380px]" : "h-[400px]"} cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={search} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("home.whatweanswerheading3")}
        </h1>
        <p className="text-[15px] text-zinc-500 leading-6">
          {t("home.whatweanswercontent3")}
        </p>
      </div>
    </>
  );
};
