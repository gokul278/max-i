import React from "react";
import search from "../../assets/Img/Home/Logo/Search.svg";
import Settings from "../../assets/Img/Services/Settings.svg";
import content from "../../assets/Img/Services/Content.svg";
import webdesign from "../../assets/Img/Services/webdesign.svg";
import brand from "../../assets/Img/Services/brand.svg";
import app from "../../assets/Img/Services/app.svg";
import media from "../../assets/Img/Services/media.svg";

import "./ServiceCards.css";
import { useTranslation } from "react-i18next";

export const ServiceCards = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[550px] lg:h-[500px]"
            : "h-[600px] lg:h-[550px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                   p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">01</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={search} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead1")}
        </h1>
        <p
          className={`text-[15px] ${
            t("nav.services") === "Our Services"
              ? "h-[240px] lg:h-[220px]"
              : "h-[290px] lg:h-[250px]"
          } text-zinc-500 leading-6 text-justify`}
        >
          {t("services.servicecontent1")}
        </p>
        <p className="text-[15px] text-zinc-500 leading-6 capitalize text-justify">
          <div className="flex flex-wrap justify-start gap-x-3">
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;On-page SEO
            </div>
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Off-Page SEO
            </div>
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Technical SEO
            </div>
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Local SEO
            </div>
          </div>
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[550px] lg:h-[500px]"
            : "h-[650px] lg:h-[550px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
        p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={Settings} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead2")}
        </h1>
        <p
          className={`text-[15px] ${
            t("nav.services") === "Our Services"
              ? "h-[280px] lg:h-[220px]"
              : "h-[370px] lg:h-[250px]"
          } text-zinc-500 leading-6 text-justify`}
        >
          {t("services.servicecontent2")}
        </p>
        <p className="text-[15px] text-zinc-500 leading-6 capitalize text-justify">
          <div className="flex flex-wrap justify-start gap-x-3">
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Google ads
            </div>
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Pay Per Click
            </div>
            <div>
              <i class="fa-solid fa-check"></i>&nbsp;&nbsp;Youtube Ads
            </div>
          </div>
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[450px] lg:h-[400px]"
            : "h-[500px] lg:h-[440px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
            p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">03</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={content} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead3")}
        </h1>
        <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
          {t("services.servicecontent3")}
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[480px] lg:h-[400px]"
            : "h-[520px] lg:h-[440px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
              p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">04</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={webdesign} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead4")}
        </h1>
        <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
          {t("services.servicecontent4")}
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[480px] lg:h-[420px]"
            : "h-[560px] lg:h-[460px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
              p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">05</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={brand} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead5")}
        </h1>
        <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
          {t("services.servicecontent5")}
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[480px] lg:h-[420px]"
            : "h-[550px] lg:h-[460px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">06</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={app} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead5")}
        </h1>
        <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
          {t("services.servicecontent6")}
        </p>
      </div>

      <div
        className={`card-container w-[90%] lg:w-[450px] ${
          t("nav.services") === "Our Services"
            ? "h-[490px] lg:h-[400px]"
            : "h-[560px] lg:h-[420px]"
        } cursor-pointer bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] 
                p-9 space-y-3 relative overflow-hidden rounded transition-all duration-300`}
      >
        <div className="card-number w-24 h-24 bg-[#ffaa14] rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">07</p>
        </div>
        <div className="card-icon w-[70px] pt-[20px] h-[100px]">
          <img src={media} alt="logo" />
        </div>
        <h1 className="font-bold text-xl capitalize">
          {t("services.servicehead6")}
        </h1>
        <p className="text-[15px] h-[200px] text-zinc-500 leading-6 text-justify">
          {t("services.servicecontent7")}
        </p>
      </div>
    </>
  );
};
