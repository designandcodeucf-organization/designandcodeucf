import { Component } from "react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { photo } from "../officerData.js";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function About() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="App">
      <div className="text-white flex flex-col items-center justify-center">
        <div className=" relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px]">
          <h1 className=" flex flex-col text-center text-[48px] font-bold ">
            About
            <span className="text-[#FFCC37] text-center text-[48px] font-bold">
              Design & Code{" "}
            </span>
          </h1>
        </div>
        <div className="relative flex flex-col flex-none justify-center content-center h-[156px] md:w-[632px] xs:w-[398px]">
          <p className="text-center md:text-[20px] xs:text-[13px] font-medium xs:p-[25px] md:p-[2px]">
            Design & Code is a UCF student organization that specializes in web
            design and development.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 w-[650px] md:w-[1250px] xs:w-[350px] m-auto gap-y-[10px] gap-x-[10px] xs:grid xs:grid-cols-1">
        {/*Who We Are*/}
        <div className="bg-[#1B1B1B] py-[10px] px-[25px] text-white rounded-[18px] text-[16px]">
          <div className=" flex flex-row items-center ">
            <span className="pt-[27.3px] ml-[30px] font-semibold text-[32px]">
              Who We Are
            </span>
            <svg
              className="h-auto w-[35px] pt-[25px] mr-[11.7px] ml-[15px]"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
            Created by a group of Digital Media: Web Design majors, we wanted to
            expand on our knowledge of web and social platforms outside of the
            classroom and apply it to real-world settings.{" "}
          </p>

          <p className="text-left mt-[30px] ml-[30px] mb-[14px]">
            We can only learn so much from semester-long courses, especially
            considering the number of coding languages, platforms, and
            extensions that exist on the World Wide Web.
          </p>
        </div>

        {/* Our Mission*/}
        <div className="bg-[#1B1B1B] py-[10px] px-[25px] text-white rounded-[18px] text-[16px]">
          <div className=" flex flex-row items-center ">
            <span className="pt-[27.3px] ml-[30px] font-semibold text-[32px]">
              Our Mission
            </span>
            <svg
              className="h-auto w-[35px] pt-[25px] mr-[11.7px] ml-[15px]"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7.5H13V9.5H11V7.5ZM11 11.5H13V17.5H11V11.5ZM12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM12 20.5C7.59 20.5 4 16.91 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 16.91 16.41 20.5 12 20.5Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-left mt-[10px] ml-[30px] mb-[14px]">
            Initially established in 2023, we focus on many different aspects of
            the digital world, including art, coding, and everything in between.
            Along with developing websites, mobile applications, and other
            projects, we aim to create a community where we learn, create, and
            grow together as aspiring web professionals who contribute great
            ideas and numerous works to the digital realm.{" "}
          </p>
        </div>
      </div>
      <div className="p-[50px]"></div>
      <div className="text-white flex flex-col items-center justify-center">
      <p className="text-left font-bold text-[32px]">Photo Gallery</p>
      </div>
      <div className="pb-[200px]">
      {/*IMG Gallery*/}
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {photo.map((item) => (
            <img
              className="w-[500px] rounded-[20px] inline-block p-[12px] cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible sm:visible"
          onClick={slideRight}
          size={40}
        />
        </div>
      </div>
    </div>
  );
}

export default About;
