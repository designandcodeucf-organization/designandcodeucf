import { Component } from "react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { photo } from "../officerData.js";
import { data } from "../officerData.js";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MeetOurOfficers from "../components/MeetOurOfficers.jsx";


function About() {
  const slideSize = 500;
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = slider.scrollWidth;
    } else {
      slider.scrollLeft -= slideSize;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += slideSize;
    }
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
          <p className="text-center md:text-[20px] xs:text-[16px] font-medium xs:p-[25px] md:p-[2px]">
            Design & Code is a UCF student organization that specializes in web
            design and development.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:w-[750px] lg:w-[1000px] xs:w-[350px] m-auto gap-y-[10px] gap-x-[10px] xs:grid xs:grid-cols-1">
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
              className="h-auto w-[28px] pt-[25px] mr-[11.7px] ml-[15px]"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 19.1 5.4 24.5 12 24.5C18.6 24.5 24 19.1 24 12.5C24 5.9 18.6 0.5 12 0.5ZM12 3.5C16.98 3.5 21 7.52 21 12.5C21 17.48 16.98 21.5 12 21.5C7.02 21.5 3 17.48 3 12.5C3 7.52 7.02 3.5 12 3.5ZM12 6.5C8.7 6.5 6 9.2 6 12.5C6 15.8 8.7 18.5 12 18.5C15.3 18.5 18 15.8 18 12.5C18 9.2 15.3 6.5 12 6.5ZM12 9.5C13.68 9.5 15 10.82 15 12.5C15 14.18 13.68 15.5 12 15.5C10.32 15.5 9 14.18 9 12.5C9 10.82 10.32 9.5 12 9.5Z"
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

      <div className="pt-[70px]">
        <div className="text-white flex flex-col items-center justify-center">
          <p className="text-left font-bold text-[32px] pb-[10px]">
            Photo Gallery
          </p>
        </div>
        <div className="pb-[20px] md:px-[100px] lg:px-[200px]">
          {/*IMG Gallery*/}
          <div className="relative flex items-center w-full">
            <MdChevronLeft
              className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 md:mr-8 md:ml-8 lg:py-1 lg:px-1 md:rounded-full xs:invisible md:visible"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider"
              className=" xs:w-full md:w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {photo.map((item) => (
                <img
                  className="xs:w-[275px] md:w-[350px] lg:w-[500px] rounded-[20px] inline-block p-[12px] cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={item.img}
                  alt={item.alt}
                />
              ))}
            </div>
            <MdChevronRight
              className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 md:mr-8 md:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible md:visible"
              onClick={slideRight}
              size={40}
            />
          </div>
        </div>
      </div>

      <div>
        <MeetOurOfficers />
      </div>
      <div>
        {/*<OfficerModal />*/}
      </div>

      <div className="text-white flex flex-col items-center justify-center mb-[60px] pt-32">
        <p className="text-center font-bold text-[32px]">Get Involved</p>
        <div className="relative flex flex-col flex-none justify-center content-center h-[156px] md:w-[632px] xs:w-[398px] ">
          <p className="text-center md:text-[20px] xs:text-[14px] font-medium xs:p-[25px] md:p-[2px]">
            Dive into the intersection of art and coding at Design & Code! Join
            us to explore the dynamic world of web design and development. Get
            involved and bring your passion for the digital realm to life! Check
            us out on the platforms below!
          </p>
        </div>

        <div className="flex flex-row items-center p-5">
          {/*Discord*/}
          <a href="https://discord.gg/AvhnHqNP6h" target="_blank">
            <div className="px-[30px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1911_317)">
                  <path
                    d="M40.634 8.73937C37.5747 7.33561 34.294 6.30137 30.8638 5.70903C30.8013 5.6976 30.7389 5.72617 30.7067 5.78331C30.2848 6.53374 29.8175 7.51273 29.4902 8.28222C25.8008 7.72988 22.1304 7.72988 18.5166 8.28222C18.1893 7.49563 17.705 6.53374 17.2811 5.78331C17.249 5.72807 17.1866 5.6995 17.1241 5.70903C13.6958 6.29948 10.4151 7.33371 7.35387 8.73937C7.32737 8.75079 7.30465 8.76986 7.28958 8.7946C1.06678 18.0913 -0.6379 27.1595 0.19836 36.1153C0.202144 36.1591 0.22674 36.201 0.260796 36.2277C4.36642 39.2428 8.34341 41.0732 12.2466 42.2864C12.309 42.3055 12.3752 42.2827 12.415 42.2312C13.3383 40.9704 14.1613 39.6409 14.867 38.2428C14.9086 38.1609 14.8688 38.0638 14.7837 38.0314C13.4783 37.5362 12.2352 36.9324 11.0395 36.2468C10.9449 36.1915 10.9373 36.0562 11.0243 35.9915C11.2759 35.8029 11.5276 35.6067 11.7679 35.4086C11.8114 35.3725 11.872 35.3648 11.9231 35.3877C19.7786 38.9742 28.2831 38.9742 36.0459 35.3877C36.097 35.3629 36.1576 35.3706 36.203 35.4068C36.4433 35.6048 36.6949 35.8029 36.9484 35.9915C37.0354 36.0562 37.0298 36.1915 36.9352 36.2468C35.7394 36.9457 34.4964 37.5362 33.189 38.0295C33.1039 38.0619 33.0661 38.1609 33.1077 38.2428C33.8285 39.6389 34.6515 40.9684 35.5578 42.2293C35.5956 42.2827 35.6637 42.3055 35.7262 42.2864C39.6483 41.0732 43.6252 39.2428 47.7309 36.2277C47.7668 36.201 47.7895 36.161 47.7933 36.1172C48.7942 25.7633 46.117 16.7695 40.6964 8.7965C40.6832 8.76986 40.6605 8.75079 40.634 8.73937ZM16.04 30.6622C13.675 30.6622 11.7263 28.4909 11.7263 25.8243C11.7263 23.1578 13.6372 20.9865 16.04 20.9865C18.4617 20.9865 20.3916 23.1768 20.3538 25.8243C20.3538 28.4909 18.4428 30.6622 16.04 30.6622ZM31.9895 30.6622C29.6245 30.6622 27.6758 28.4909 27.6758 25.8243C27.6758 23.1578 29.5867 20.9865 31.9895 20.9865C34.4113 20.9865 36.3411 23.1768 36.3033 25.8243C36.3033 28.4909 34.4113 30.6622 31.9895 30.6622Z"
                    fill="#5DA9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1911_317">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>

          {/*Instagram*/}
          <a href="https://www.instagram.com/designandcodeucf/" target="_blank">
            <div className="px-[30px]">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1911_318)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.8557 14.4209C47.7389 11.9478 47.3331 10.2588 46.7399 8.78118C46.1375 7.23085 45.1926 5.82658 43.9717 4.66587C42.7731 3.48389 41.3221 2.56886 39.7207 1.98532C38.194 1.41135 36.4497 1.01889 33.895 0.906505C31.3356 0.793057 30.5178 0.766113 24 0.766113C17.4822 0.766113 16.6644 0.793057 14.105 0.905795C11.5503 1.01889 9.80603 1.4117 8.2793 1.98603C6.67786 2.56922 5.22729 3.48389 4.02832 4.66587C2.80737 5.82623 1.86218 7.23049 1.2594 8.78082C0.666504 10.2588 0.261108 11.9478 0.14502 14.4206C0.027832 16.8987 0 17.69 0 23.9998C0 30.31 0.027832 31.1016 0.14502 33.5794C0.261475 36.0522 0.667236 37.7411 1.2605 39.2191C1.86292 40.7691 2.80774 42.1737 4.02869 43.3341C5.22729 44.5161 6.67822 45.4307 8.27966 46.0139C9.80603 46.5886 11.5507 46.9811 14.1053 47.0942C16.6652 47.2073 17.4825 47.2338 24.0004 47.2338C30.5182 47.2338 31.3359 47.2073 33.8954 47.0942C36.4501 46.9811 38.1943 46.5886 39.7211 46.0139C42.9448 44.8071 45.4933 42.34 46.7399 39.2191C47.3335 37.7411 47.7389 36.0522 47.8557 33.5794C47.9722 31.1013 48 30.31 48 24.0002C48 17.69 47.9722 16.8987 47.8557 14.4209ZM43.5355 33.389C43.429 35.6544 43.0378 36.8846 42.7094 37.7032C41.9019 39.7296 40.2477 41.331 38.1544 42.1128C37.3088 42.4308 36.0381 42.8094 33.698 42.9126C31.1678 43.0246 30.4087 43.048 24 43.048C17.5909 43.048 16.8322 43.0246 14.3016 42.9126C11.9619 42.8094 10.6912 42.4308 9.84521 42.1128C8.80298 41.7402 7.85999 41.1463 7.08582 40.3745C6.28857 39.6251 5.67517 38.7125 5.29028 37.7032C4.96179 36.8846 4.57068 35.6544 4.46411 33.389C4.34875 30.9392 4.32422 30.2043 4.32422 24.0005C4.32422 17.7964 4.34875 17.0618 4.46411 14.6117C4.57104 12.3463 4.96179 11.1161 5.29028 10.2975C5.67517 9.28815 6.28894 8.37525 7.08582 7.62579C7.85999 6.85399 8.80298 6.26016 9.84558 5.88791C10.6912 5.56955 11.9619 5.19127 14.302 5.08775C16.8325 4.97608 17.5917 4.95233 24 4.95233C30.408 4.95233 31.1672 4.97608 33.698 5.08811C36.0381 5.19127 37.3085 5.5699 38.1544 5.88791C39.1967 6.26052 40.1396 6.85434 40.9138 7.62579C41.7111 8.37525 42.3245 9.28815 42.709 10.2975C43.0378 11.1161 43.429 12.3463 43.5355 14.6117C43.6509 17.0614 43.6754 17.7964 43.6754 24.0002C43.6754 30.2043 43.6512 30.9389 43.5355 33.389ZM23.9996 12.069C17.1932 12.069 11.6755 17.411 11.6755 24.0002C11.6755 30.5893 17.1932 35.9309 23.9996 35.9309C30.8064 35.9309 36.3241 30.5893 36.3241 24.0002C36.3241 17.411 30.8064 12.069 23.9996 12.069ZM23.9996 31.7447C19.5817 31.7444 15.9998 28.2771 16.0001 23.9998C16.0001 19.7228 19.5817 16.2552 24 16.2552C28.4183 16.2556 31.9999 19.7228 31.9999 23.9998C31.9999 28.2771 28.418 31.7447 23.9996 31.7447ZM36.8111 14.3858C38.4016 14.3858 39.691 13.1376 39.691 11.5979C39.691 10.0578 38.4016 8.80954 36.8111 8.80954C35.2203 8.80954 33.9309 10.0578 33.9309 11.5979C33.9309 13.1376 35.2203 14.3858 36.8111 14.3858Z"
                    fill="#5DA9E9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1911_318">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>

          {/*KnightConnect*/}
          <a
            href="https://knightconnect.campuslabs.com/engage/organization/designandcode"
            rel="noreferrer"
            target="_blank"
            className="  "
          >
            <div className=" flex flex-row items-center ">
              <svg
                className="h-auto w-[52px] text-[#5DA9E9] ml-[30px]"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180.000000 180.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
                  stroke="#5DA9E9"
                  strokeWidth="100px"
                >
                  <path
                    d="M747 1650 c-355 -75 -610 -391 -611 -755 0 -136 20 -220 79 -340 79
                -161 194 -278 349 -354 348 -172 769 -62 985 257 89 131 131 273 131 439 0 87
                -20 223 -36 242 -2 2 -12 -3 -21 -11 -17 -14 -95 -61 -193 -116 -25 -14 -86
                -49 -137 -78 -91 -54 -91 -54 -103 -106 -7 -29 -20 -82 -30 -118 -10 -36 -29
                -103 -41 -150 -26 -96 -48 -134 -89 -155 -52 -27 -75 -20 -105 33 -15 26 -39
                67 -53 92 -51 91 -349 606 -362 627 -20 32 4 71 58 95 l44 20 141 -37 c78 -21
                176 -47 218 -60 l76 -22 98 59 c54 32 99 58 101 58 1 0 53 29 114 65 61 36
                115 65 121 65 16 0 10 9 -37 52 -111 104 -252 175 -402 204 -97 18 -187 17
                -295 -6z m351 -41 c92 -23 219 -89 280 -145 53 -48 52 -52 -28 -97 -25 -13
                -100 -57 -167 -96 -74 -44 -133 -71 -150 -71 -16 0 -103 20 -194 45 -90 25
                -187 46 -215 47 -61 2 -112 -25 -139 -76 -24 -44 -33 -23 160 -357 81 -139
                156 -270 167 -289 74 -131 116 -194 135 -203 56 -25 147 28 177 104 9 22 32
                102 51 177 60 231 39 204 243 320 97 55 183 102 191 104 41 9 54 -211 21 -347
                -11 -44 -41 -123 -67 -175 -122 -244 -393 -406 -668 -399 -313 8 -597 219
                -691 514 -38 116 -44 278 -15 398 61 255 247 459 487 533 155 47 273 51 422
                13z"
                  />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
