import { Component } from "react";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { photo } from "../officerData.js";
import "react-multi-carousel/lib/styles.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
        <p className="text-left font-bold text-[32px] pb-[10px]">
          Photo Gallery
        </p>
      </div>
      <div className="pb-[20px] md:px-[100px] lg:px-[200px]">
        {/*IMG Gallery*/}
        <div className="relative flex items-center h-[500px]">
          <MdChevronLeft
            className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible md:visible"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth y-scrollbar-hide xs:scrollbar-hide sm:scrollbar-default md:scrollbar-default"
          >
            {photo.map((item) => (
              <img
                className="xs:w-[275px] md:w-[300px] lg:w-[500px] rounded-[20px] inline-block p-[12px] cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="/"
              />
            ))}
          </div>
          <MdChevronRight
            className="opacity-80 cursor-pointer hover:opacity-100 bg-primaryLightBlue rounded-full px-1 py-1 sm:mr-8 sm:ml-8 md:py-1 md:px-1 md:rounded-full xs:invisible md:visible"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>

      <div className="text-white flex flex-col items-center justify-center">
        <p className="text-left font-bold text-[32px]">Get Involved</p>
        <div className="relative flex flex-col flex-none justify-center content-center h-[156px] md:w-[632px] xs:w-[398px]">
          <p className="text-center md:text-[20px] xs:text-[14px] font-medium xs:p-[25px] md:p-[2px]">
            We encourage everyone with a passion for design, coding, or web
            platforms to sign up for Design & Code. If you want to join or learn
            more about our organization, visit our Linktree.
          </p>
        </div>
        <svg
          width="282"
          height="48"
          viewBox="0 0 282 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*Discord*/}
          <a href="#">
            <g clip-path="url(#clip0_1911_316)">
              <path
                d="M40.634 8.73937C37.5747 7.33561 34.294 6.30137 30.8638 5.70903C30.8013 5.6976 30.7389 5.72617 30.7067 5.78331C30.2848 6.53374 29.8175 7.51273 29.4902 8.28222C25.8008 7.72988 22.1304 7.72988 18.5166 8.28222C18.1893 7.49563 17.705 6.53374 17.2811 5.78331C17.249 5.72807 17.1866 5.6995 17.1241 5.70903C13.6958 6.29948 10.4151 7.33371 7.35387 8.73937C7.32737 8.75079 7.30465 8.76986 7.28958 8.7946C1.06678 18.0913 -0.6379 27.1595 0.19836 36.1153C0.202144 36.1591 0.22674 36.201 0.260796 36.2277C4.36642 39.2428 8.34341 41.0732 12.2466 42.2864C12.309 42.3055 12.3752 42.2827 12.415 42.2312C13.3383 40.9704 14.1613 39.6409 14.867 38.2428C14.9086 38.1609 14.8688 38.0638 14.7837 38.0314C13.4783 37.5362 12.2352 36.9324 11.0395 36.2468C10.9449 36.1915 10.9373 36.0562 11.0243 35.9915C11.2759 35.8029 11.5276 35.6067 11.7679 35.4086C11.8114 35.3725 11.872 35.3648 11.9231 35.3877C19.7786 38.9742 28.2831 38.9742 36.0459 35.3877C36.097 35.3629 36.1576 35.3706 36.203 35.4068C36.4433 35.6048 36.6949 35.8029 36.9484 35.9915C37.0354 36.0562 37.0298 36.1915 36.9352 36.2468C35.7394 36.9457 34.4964 37.5362 33.189 38.0295C33.1039 38.0619 33.0661 38.1609 33.1077 38.2428C33.8285 39.6389 34.6515 40.9684 35.5578 42.2293C35.5956 42.2827 35.6637 42.3055 35.7262 42.2864C39.6483 41.0732 43.6252 39.2428 47.7309 36.2277C47.7668 36.201 47.7895 36.161 47.7933 36.1172C48.7942 25.7633 46.117 16.7695 40.6964 8.7965C40.6832 8.76986 40.6605 8.75079 40.634 8.73937ZM16.04 30.6622C13.675 30.6622 11.7263 28.4909 11.7263 25.8243C11.7263 23.1578 13.6372 20.9865 16.04 20.9865C18.4617 20.9865 20.3916 23.1768 20.3538 25.8243C20.3538 28.4909 18.4428 30.6622 16.04 30.6622ZM31.9895 30.6622C29.6245 30.6622 27.6758 28.4909 27.6758 25.8243C27.6758 23.1578 29.5867 20.9865 31.9895 20.9865C34.4113 20.9865 36.3411 23.1768 36.3033 25.8243C36.3033 28.4909 34.4113 30.6622 31.9895 30.6622Z"
                fill="#5DA9E9"
              />
            </g>
          </a>

          <a href="#">
            <g clip-path="url(#clip1_1911_316)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M125.856 14.4209C125.739 11.9478 125.333 10.2588 124.74 8.78118C124.137 7.23085 123.193 5.82658 121.972 4.66587C120.773 3.48389 119.322 2.56886 117.721 1.98532C116.194 1.41135 114.45 1.01889 111.895 0.906505C109.336 0.793057 108.518 0.766113 102 0.766113C95.4822 0.766113 94.6644 0.793057 92.105 0.905795C89.5503 1.01889 87.806 1.4117 86.2793 1.98603C84.6779 2.56922 83.2273 3.48389 82.0283 4.66587C80.8074 5.82623 79.8622 7.23049 79.2594 8.78082C78.6665 10.2588 78.2611 11.9478 78.145 14.4206C78.0278 16.8987 78 17.69 78 23.9998C78 30.31 78.0278 31.1016 78.145 33.5794C78.2615 36.0522 78.6672 37.7411 79.2605 39.2191C79.8629 40.7691 80.8077 42.1737 82.0287 43.3341C83.2273 44.5161 84.6782 45.4307 86.2797 46.0139C87.806 46.5886 89.5507 46.9811 92.1053 47.0942C94.6652 47.2073 95.4825 47.2338 102 47.2338C108.518 47.2338 109.336 47.2073 111.895 47.0942C114.45 46.9811 116.194 46.5886 117.721 46.0139C120.945 44.8071 123.493 42.34 124.74 39.2191C125.333 37.7411 125.739 36.0522 125.856 33.5794C125.972 31.1013 126 30.31 126 24.0002C126 17.69 125.972 16.8987 125.856 14.4209ZM121.536 33.389C121.429 35.6544 121.038 36.8846 120.709 37.7032C119.902 39.7296 118.248 41.331 116.154 42.1128C115.309 42.4308 114.038 42.8094 111.698 42.9126C109.168 43.0246 108.409 43.048 102 43.048C95.5909 43.048 94.8322 43.0246 92.3016 42.9126C89.9619 42.8094 88.6912 42.4308 87.8452 42.1128C86.803 41.7402 85.86 41.1463 85.0858 40.3745C84.2886 39.6251 83.6752 38.7125 83.2903 37.7032C82.9618 36.8846 82.5707 35.6544 82.4641 33.389C82.3488 30.9392 82.3242 30.2043 82.3242 24.0005C82.3242 17.7964 82.3488 17.0618 82.4641 14.6117C82.571 12.3463 82.9618 11.1161 83.2903 10.2975C83.6752 9.28815 84.2889 8.37525 85.0858 7.62579C85.86 6.85399 86.803 6.26016 87.8456 5.88791C88.6912 5.56955 89.9619 5.19127 92.302 5.08775C94.8325 4.97608 95.5917 4.95233 102 4.95233C108.408 4.95233 109.167 4.97608 111.698 5.08811C114.038 5.19127 115.308 5.5699 116.154 5.88791C117.197 6.26052 118.14 6.85434 118.914 7.62579C119.711 8.37525 120.324 9.28815 120.709 10.2975C121.038 11.1161 121.429 12.3463 121.536 14.6117C121.651 17.0614 121.675 17.7964 121.675 24.0002C121.675 30.2043 121.651 30.9389 121.536 33.389ZM102 12.069C95.1932 12.069 89.6755 17.411 89.6755 24.0002C89.6755 30.5893 95.1932 35.9309 102 35.9309C108.806 35.9309 114.324 30.5893 114.324 24.0002C114.324 17.411 108.806 12.069 102 12.069ZM102 31.7447C97.5817 31.7444 93.9998 28.2771 94.0001 23.9998C94.0001 19.7228 97.5817 16.2552 102 16.2552C106.418 16.2556 110 19.7228 110 23.9998C110 28.2771 106.418 31.7447 102 31.7447ZM114.811 14.3858C116.402 14.3858 117.691 13.1376 117.691 11.5979C117.691 10.0578 116.402 8.80954 114.811 8.80954C113.22 8.80954 111.931 10.0578 111.931 11.5979C111.931 13.1376 113.22 14.3858 114.811 14.3858Z"
                fill="#5DA9E9"
              />
            </g>
          </a>

          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M180 0C166.74 0 156 11.0117 156 24.6071C156 35.4957 162.87 44.6926 172.41 47.953C173.61 48.1683 174.06 47.4301 174.06 46.7842C174.06 46.1997 174.03 44.2619 174.03 42.2011C168 43.3392 166.44 40.6939 165.96 39.3098C165.69 38.6023 164.52 36.4184 163.5 35.834C162.66 35.3726 161.46 34.2346 163.47 34.2038C165.36 34.173 166.71 35.9878 167.16 36.726C169.32 40.4478 172.77 39.402 174.15 38.7561C174.36 37.1567 174.99 36.0801 175.68 35.4649C170.34 34.8497 164.76 32.7274 164.76 23.3152C164.76 20.6392 165.69 18.4245 167.22 16.702C166.98 16.0869 166.14 13.5646 167.46 10.1812C167.46 10.1812 169.47 9.53523 174.06 12.7034C175.98 12.1497 178.02 11.8729 180.06 11.8729C182.1 11.8729 184.14 12.1497 186.06 12.7034C190.65 9.50447 192.66 10.1812 192.66 10.1812C193.98 13.5646 193.14 16.0869 192.9 16.702C194.43 18.4245 195.36 20.6084 195.36 23.3152C195.36 32.7581 189.75 34.8497 184.41 35.4649C185.28 36.2339 186.03 37.7103 186.03 40.0172C186.03 43.3084 186 45.9537 186 46.7842C186 47.4301 186.45 48.1991 187.65 47.953C192.414 46.3039 196.555 43.1644 199.488 38.9764C202.421 34.7884 203.999 29.7629 204 24.6071C204 11.0117 193.26 0 180 0Z"
            fill="#5DA9E9"
          />
          <path
            d="M282 34.056C282 42.792 276.792 48 268.056 48H265.2C263.88 48 262.8 46.92 262.8 45.6V31.752C262.8 31.104 263.328 30.552 263.976 30.552L268.2 30.48C268.536 30.456 268.824 30.216 268.896 29.88L269.736 25.296C269.808 24.864 269.472 24.456 269.016 24.456L263.904 24.528C263.232 24.528 262.704 24 262.68 23.352L262.584 17.472C262.584 17.088 262.896 16.752 263.304 16.752L269.064 16.656C269.472 16.656 269.784 16.344 269.784 15.936L269.688 10.176C269.688 9.76798 269.376 9.456 268.968 9.456L262.488 9.55202C258.504 9.62402 255.336 12.888 255.408 16.872L255.528 23.472C255.552 24.144 255.024 24.672 254.352 24.696L251.472 24.744C251.064 24.744 250.752 25.056 250.752 25.464L250.824 30.024C250.824 30.432 251.136 30.744 251.544 30.744L254.424 30.696C255.096 30.696 255.624 31.224 255.648 31.872L255.864 45.552C255.888 46.896 254.808 48 253.464 48H247.944C239.208 48 234 42.792 234 34.032V13.944C234 5.208 239.208 0 247.944 0H268.056C276.792 0 282 5.208 282 13.944V34.056Z"
            fill="#5DA9E9"
          />
          <defs>
            <clipPath id="clip0_1911_316">
              <rect width="48" height="48" fill="white" />
            </clipPath>
            <clipPath id="clip1_1911_316">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(78)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default About;
