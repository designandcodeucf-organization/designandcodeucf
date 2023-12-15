
import React from "react";
import { data } from "../officerData.js";

const officersData = [
  {
    name: "John Doe",
    position: "President",
    image: "john-doe.jpg", // Replace with the actual image filename
    socials: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
  },
  // Add more officers as needed
];

const OfficerCard = ({ name, position, image, socials }) => (
  <>
  <div className="text-white xs:text-[32px] flex flex-col text-center md:text-[36px] font-bold bg-[#1B1B1B] p-8 rounded-t-lg">
      <p>Meet Our Officers</p>
    </div>
  <div className="flex-col md:grid md:grid-cols-3 gap-x-1 gap-y-4 items-center pt-8 pb-8 mb-8 bg-[#1B1B1B] rounded-b-lg">

    {data.map((item) => (
      <div key={item.id} className="flex flex-col items-center mt-8 mb-8">
        <img
          src={item.img}
          alt={item.name}
          className="xs:w-32 xs:h-32  md:w-48 md:h-48 rounded-full mb-4 object-cover"
        />
        <p className="text-[18px] text-white font-semibold">
          {item.name}
        </p>
        <p className="text-md text-center mt-2 text-primaryLight">{item.position}</p>
        <div className="flex mt-4">
          {item.LinkedIn && (
          <a
            href={item.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0273 0H11.9727C5.36036 0 0 5.36035 0 11.9727V12.0273C0 18.6397 5.36036 24 11.9727 24H12.0273C18.6396 24 24 18.6397 24 12.0273V11.9727C24 5.36035 18.6396 0 12.0273 0Z"
                fill="#5DA9E9"
              />
              <path
                d="M5.72356 7.97698C5.40741 7.68353 5.25018 7.32029 5.25018 6.8881C5.25018 6.45591 5.40825 6.07669 5.72356 5.78239C6.03972 5.48894 6.44669 5.3418 6.9453 5.3418C7.44392 5.3418 7.83491 5.48894 8.15023 5.78239C8.46638 6.07585 8.62361 6.44498 8.62361 6.8881C8.62361 7.33122 8.46554 7.68353 8.15023 7.97698C7.83407 8.27043 7.43299 8.41758 6.9453 8.41758C6.45762 8.41758 6.03972 8.27043 5.72356 7.97698ZM8.35791 9.66034V18.6573H5.51504V9.66034H8.35791Z"
                fill="#0B0B0E"
              />
              <path
                d="M17.8215 10.549C18.4412 11.2217 18.7506 12.145 18.7506 13.3205V18.4983H16.0507V13.6854C16.0507 13.0926 15.8968 12.6318 15.5899 12.3039C15.283 11.9759 14.8693 11.8111 14.3514 11.8111C13.8334 11.8111 13.4197 11.9751 13.1128 12.3039C12.8059 12.6318 12.652 13.0926 12.652 13.6854V18.4983H9.93616V9.63505H12.652V10.8105C12.927 10.4187 13.2978 10.1093 13.7636 9.88142C14.2295 9.65356 14.7533 9.54004 15.336 9.54004C16.3736 9.54004 17.2026 9.87637 17.8215 10.5482V10.549Z"
                fill="#0B0B0E"
              />
            </svg>
          </a>
          )}
          {item.portfolio && ( 
          <a href={item.portfolio} 
             target="_blank" 
             rel="noopener noreferrer"
             className="mr-4">
              
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5644 8.10118C22.0549 9.30306 22.3256 10.6188 22.3256 12H24C24 10.3983 23.6858 8.8678 23.1147 7.46852L21.5644 8.10118ZM22.3256 12C22.3256 12.7337 22.2492 13.4487 22.1042 14.1377L23.7427 14.4824C23.9115 13.6808 24 12.8503 24 12H22.3256ZM22.1042 14.1377C21.2653 18.1241 18.1241 21.2653 14.1377 22.1042L14.4824 23.7427C19.1185 22.7672 22.7672 19.1185 23.7427 14.4824L22.1042 14.1377ZM14.1377 22.1042C13.4487 22.2492 12.7337 22.3256 12 22.3256V24C12.8503 24 13.6808 23.9115 14.4824 23.7427L14.1377 22.1042ZM12 22.3256C11.2663 22.3256 10.5513 22.2492 9.86233 22.1042L9.51757 23.7427C10.3192 23.9115 11.1497 24 12 24V22.3256ZM1.67442 12C1.67442 10.6178 1.94555 9.301 2.43676 8.09836L0.886649 7.46524C0.314768 8.86541 0 10.397 0 12H1.67442ZM9.86233 22.1042C5.87589 21.2653 2.73462 18.1241 1.89579 14.1377L0.257247 14.4824C1.23276 19.1185 4.88154 22.7672 9.51757 23.7427L9.86233 22.1042ZM1.89579 14.1377C1.75082 13.4487 1.67442 12.7337 1.67442 12H0C0 12.8503 0.0885656 13.6808 0.257247 14.4824L1.89579 14.1377ZM2.43676 8.09836C3.71524 4.96816 6.48654 2.60613 9.86233 1.89579L9.51757 0.257247C5.58961 1.08377 2.37194 3.82873 0.886649 7.46524L2.43676 8.09836ZM9.86233 1.89579C10.5513 1.75082 11.2663 1.67442 12 1.67442V0C11.1497 0 10.3192 0.0885656 9.51757 0.257247L9.86233 1.89579ZM12 1.67442C12.7337 1.67442 13.4487 1.75082 14.1377 1.89579L14.4824 0.257258C13.6808 0.0885656 12.8503 0 12 0V1.67442ZM14.1377 1.89579C17.5145 2.60634 20.2865 4.96959 21.5644 8.10118L23.1147 7.46852C21.63 3.83038 18.4116 1.08403 14.4824 0.257258L14.1377 1.89579ZM13.5124 1.33102C13.8204 2.29632 14.9606 6.00899 15.4279 9.42011L17.0869 9.19285C16.5987 5.62993 15.4203 1.80175 15.1076 0.822028L13.5124 1.33102ZM15.4279 9.42011C15.5531 10.3343 15.6279 11.2122 15.6279 12H17.3023C17.3023 11.1132 17.2187 10.1555 17.0869 9.19285L15.4279 9.42011ZM22.0054 7.0209C20.7803 7.39248 18.4792 8.04507 16.1055 8.48317L16.4093 10.1298C18.8714 9.67539 21.2398 9.00285 22.4914 8.62324L22.0054 7.0209ZM16.1055 8.48317C14.6655 8.74895 13.2276 8.93023 12 8.93023V10.6047C13.3721 10.6047 14.9223 10.4043 16.4093 10.1298L16.1055 8.48317ZM15.6279 12C15.6279 13.1671 15.464 14.5251 15.2189 15.8957L16.8672 16.1904C17.1208 14.7721 17.3023 13.3058 17.3023 12H15.6279ZM15.2189 15.8957C14.6819 18.8998 13.7795 21.8322 13.5124 22.6689L15.1076 23.178C15.3817 22.3192 16.3105 19.304 16.8672 16.1904L15.2189 15.8957ZM22.6689 13.5124C21.8322 13.7795 18.8998 14.6819 15.8957 15.2189L16.1904 16.8672C19.304 16.3105 22.3192 15.3817 23.178 15.1076L22.6689 13.5124ZM15.8957 15.2189C14.5251 15.464 13.1671 15.6279 12 15.6279V17.3023C13.3058 17.3023 14.7721 17.1208 16.1904 16.8672L15.8957 15.2189ZM12 15.6279C10.8329 15.6279 9.47483 15.464 8.10426 15.2189L7.80956 16.8672C9.22796 17.1208 10.6942 17.3023 12 17.3023V15.6279ZM8.10426 15.2189C5.10012 14.6819 2.16778 13.7795 1.33102 13.5124L0.822028 15.1076C1.68076 15.3817 4.69601 16.3105 7.80956 16.8672L8.10426 15.2189ZM6.69767 12C6.69767 13.3058 6.87916 14.7721 7.13277 16.1904L8.78105 15.8957C8.536 14.5251 8.37209 13.1671 8.37209 12H6.69767ZM7.13277 16.1904C7.68947 19.304 8.61838 22.3192 8.89238 23.178L10.4876 22.6689C10.2205 21.8322 9.31818 18.8998 8.78105 15.8957L7.13277 16.1904ZM8.89238 0.822028C8.57977 1.80175 7.40127 5.62993 6.91316 9.19285L8.57209 9.42011C9.03939 6.00899 10.1796 2.29632 10.4876 1.33102L8.89238 0.822028ZM6.91316 9.19285C6.7813 10.1555 6.69767 11.1132 6.69767 12H8.37209C8.37209 11.2122 8.44685 10.3343 8.57209 9.42011L6.91316 9.19285ZM12 8.93023C10.7724 8.93023 9.33459 8.74895 7.89457 8.48317L7.59068 10.1298C9.0777 10.4043 10.6279 10.6047 12 10.6047V8.93023ZM7.89457 8.48317C5.51989 8.04491 3.21808 7.39202 1.99331 7.02051L1.50728 8.62284C2.75849 9.00237 5.12775 9.67524 7.59068 10.1298L7.89457 8.48317ZM21.9538 7.04183C21.9686 7.03414 21.9862 7.02671 22.0054 7.0209L22.4914 8.62324C22.574 8.5982 22.6516 8.56613 22.7253 8.52787L21.9538 7.04183ZM1.22492 8.49603C1.31166 8.54909 1.40583 8.59207 1.50728 8.62284L1.99331 7.02051C2.032 7.03225 2.06767 7.04872 2.09849 7.06756L1.22492 8.49603Z"
                fill="#5DA9E9"
              />
            </svg>
          </a>
          )}
          {item.github && (
          <a href={item.github} 
             target="_blank" 
             rel="noopener noreferrer"
             className="mr-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
                fill="#5DA9E9"
              />
            </svg>
          </a>
          )}
        </div>
      </div>
    ))}
  </div>
  </>
);

const MeetOurOfficers = () => (
  <div className="container mx-auto py-12">
    <div className="">
      {officersData.map((officer, index) => (
        <OfficerCard key={index} {...officer} />
      ))}
    </div>
  </div>
);

export default MeetOurOfficers;
