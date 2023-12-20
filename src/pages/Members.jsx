import { Component } from 'react';
import Checkmark from '../components/Checkmark';
class Members extends Component {
    render() {
        return (
            <>
                <header>
                    {/*Heading*/}
                    <div className='text-white flex flex-col items-center justify-center'>  
                        <div className=' relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px] min-w-[]'>
                            <h1 className=' flex flex-col text-center font-bold text-[45px] s:text-[32px] '>
                                Join
                                <span className= 'text-[#FFCC37] text-center text-[45px] font-bold s:text-[32px]'>Design &amp; CodeCode</span>
                            </h1>
                        </div>  
                        <article  className='relative flex flex-col flex-none justify-center content-center h-[156px] max-w-[632px] s:h-[234px] s:max-w-[350px]'>
                            <p className='text-center text-[15px] font-medium s:text-[14px]'>
                            Are you ready to unlock a world of design and code possibilities? 
                            Our club is your gateway to a community of passionate individuals, endless inspiration, and incredible opportunities. 
                            As a member, you&#39;ll have access to exclusive resources, industry insights, and a network of like-minded creators. Whether you&#39;re an aspiring designer or a coding wizard, 
                            joining our club is your key to growth, collaboration, and recognition.
                            </p>
                        </article>
                    </div>
                </header>
                <main>
                <div className='flex flex-row items-center justify-center gap-[80px] text-white mt-[100px] mb-[100px] s:mt-[60px] s:flex-col'> 
                    {/* free member choice */}
                    <section className='flex flex-col items-center'>
                        <div className='bg-[#1B1B1B] w-[300px] h-[385px] rounded-[15px] s:h-[335px] s:w-[244px]'>
                            <div className='bg-white w-auto h-[100px] flex items-center justify-center rounded-t-[15px] s:w-[244px]'>
                                <h3 className='text-black font-bold text-center text-[25px] s:text-[24px]'>
                                    Free Member
                                </h3>
                            </div>
                            <h2 className='font-bold text-center text-[40px] mt-[70px] mb-[73px] s:text-[25px] s:mt-[32px] s:mb-[33px] '>FREE</h2>
                            <p className=' font-medium text-[#777] text-[15px] pl-[10px]'>Lorem ipsum dolor sit amet consectetur. Nulla metus nunc venenatis nunc dis eget duis mauris. </p>
                        </div>

                        <button
                        className='bg-white text-black w-[150px] h-[50px] mt-[25px] rounded-[12px] font-bold text-[20px] hover:bg-[#101010] hover:text-white'>
                            Select
                        </button>
                    </section>

                    {/* paid member choice */}
                    <section className='flex flex-col items-center'>
                        <div className='bg-[#1B1B1B] w-[300px] h-[385px] rounded-[15px] s:h-[335px] s:w-[244px]'>
                            <div className=' bg-[#FFCC37] w-auto h-[100px] flex items-center justify-center rounded-t-[15px]'>
                            <div className='w-auto h-[55px] flex items-center justify-center rounded-t-[15px] s:w-[244px]'>
                                <h3 className='text-black font-bold text-center text-[25px] s:text-[24px]'>
                                    Paid Member
                                </h3>
                            </div>   
                            </div>
                            <div className='text-white font-bold text-center text-[25px] mt-[35px] mb-[55px] s:text-[18px] s:mt-[9px] s:mb-[23px]'>
                                    <h2>$10 for 1 semester</h2>
                                    <h3>or</h3>
                                    <h2>$20 for 2 semesters</h2>
                                </div>
                            <p className=' font-medium text-[#777] text-[15px] pl-[10px]'>Lorem ipsum dolor sit amet consectetur. Nulla metus nunc venenatis nunc dis eget duis mauris. </p>
                        </div>
                        <button
                        className='bg-[#FFCC37] text-black w-[150px] h-[50px] mt-[25px] rounded-[12px] font-bold text-[20px] hover:bg-[#101010] hover:text-[#FFCC37]'>
                            Select
                        </button>
                    </section>
                </div>

                <section className='text-white flex flex-col items-center justify-center text-[32px] mb-[80px] s:mb-[50px]'> 
                    <div className='font-bold text-[45px] s:text-[30px]'>
                        <h1>Membership Comparison</h1>
                    </div>
                    <div className='flex flex-row text-[25px] text-center m-[65px] gap-[50px] s:m-[70px] s:gap-0 '>
                        <div className='bg-[#1B1B1B] h-[674px] w-[346px] rounded-[9px] s:w-[185px] s:h-[725px] s:rounded-l-[9px] s:rounded-r-[0px]'>
                            <h2 className='mt-[22px] mb-[22px] mr-[100px] ml-[100px] font-bold s:text-[24px] s:ml-[10px] s:mr-[10px]'>Benefits</h2>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] '>
                                <p className='mt-[17px] mb-[17px] mr-[71px] ml-[71px] text-[16px] s:mt-[9px] s:mb-[9px] s:ml-[12px] s:mr-[12px] s:text-[15px] '>
                                Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            
                        </div>
                        <div className='bg-[#ffffff] h-[674px] w-[208px] rounded-[9px] text-black  s:w-[123px] s:h-[725px] s:rounded-r-[0px] s:rounded-l-[0px]'>
                            <h2 className='mt-[31px] mb-[12px] mr-[31px] ml-[31px] font-bold s:text-[24px] s:ml-[10px] s:mr-[10px] s:mt-[23px] s:mb-[21px]'>Free</h2>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>

                            <div className='border-t border-b border-[#00000040]'>
                                <div className='w-auto h-[55px] s:mb-[8px]'>
                                </div>
                            </div>

                            <div className='border-t border-b border-[#00000040]'>
                                <div className='w-auto h-[55px] s:mb-[8px]'>
                                </div>
                            </div>

                            <div className='border-t border-b border-[#00000040]'>
                                <div className='w-auto h-[55px] s:mb-[8px]'>
                                </div>
                            </div>

                            <div className='border-t border-b-[2px] border-[#00000040]'>
                                <div className='w-auto h-[55px] s:mb-[8px]'>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FFCC37] h-[674px] w-[208px] rounded-[9px] text-black  s:w-[123px] s:h-[725px] s:rounded-l-[0px] s:rounded-r-[9px]'>
                            <h2 className='mt-[31px] mb-[12px] mr-[31px] ml-[31px] font-bold s:text-[24px] s:ml-[10px] s:mr-[10px] s:mt-[23px] s:mb-[21px]'>Paid</h2>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[14px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                            <div className='border-t border-b border-[#00000040] flex items-center'>
                                <p className='mt-[8px] mb-[13px] mr-[86px] ml-[86px] text-[9px] s:mt-[13px] s:mb-[17px] s:ml-[42px] s:mr-[42px]'>
                                    <Checkmark />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                    {/*Social Boxes*/}
                    <section>

                        <div className='text-white flex flex-col items-center justify-center'>  
                            <div className=' relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px]'>
                            <h1 className=' flex flex-col text-center text-[50px] font-bold s:text-[30px]'>
                            Have Questions?
                            <span className= 'text-[#FFCC37] text-center text-[50px] font-bold s:text-[30px]'>We&#39;re here to help </span>
                            </h1>
                            </div>  
                            <div  className='relative flex flex-col flex-none justify-center content-center h-[156px] max-w-[632px] s:h-[126px] s:w-[358px] '>
                            <p className='text-center text-[15px] font-medium'>
                            If you have any questions or need assistance, please don&#39;t hesitate to reach out to us.
                            We&#39;re here to provide you with the information and support you need. 
                            Feel free to message us on our social media or via email, and we&#39;ll get back to you as soon as possible.
                            </p>
                            </div>
                        </div>
                        
                        <div className='grid grid-cols-2 w-[650px] m-auto gap-y-[10px] gap-x-[10px] s:grid-cols-1 s:w-[352px] s:gap-y-[16px] s:gap-x-[16px] s:mt-[63px] s:mb-[150px]'>
                        {/* Instagram social box*/}
                        <div className='bg-[#1B1B1B]  text-white rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]'>
                        <a
                            href="https://www.instagram.com/designandcodeucf/"
                            rel="noreferrer"
                            target="_blank"
                        > 
                            <div className=' flex flex-row items-center '>
                            <svg
                                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px] "
                                fill="#5DA9E9"
                                viewBox="0 0 24 24"
                                aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className='pt-[27.3px] font-semibold'>Instagram</span>
                            </div>
                            <p className='text-left mt-[10px] ml-[30px] mb-[14px]'>
                            Lorem ipsum dolor sit amet consectetur. 
                            </p>
                        </a>
                        </div>
        
                    {/* Discord social box*/}
                    <div className='bg-[#1B1B1B]  text-white rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]'>
                        <a
                            href="https://discord.gg/AvhnHqNP6h"
                            rel="noreferrer"
                            target="_blank"
                        > 
                            <div className=' flex flex-row items-center '>
                            <svg
                                className="h-auto w-[35px] pt-[20px] mr-[11.7px] ml-[25px]"
                                fill="#5DA9E9"
                                viewBox="0 0 35 24"
                                aria-hidden="true"
                            >
                                <path
                                fillRule="evenodd"
                                d="M10.9749 0.23801C10.8857 0.223973 10.795 0.221818 10.7051 0.23161C8.91056 0.427066 6.17968 1.39522 4.56778 2.26946C4.46092 2.32742 4.36524 2.40394 4.2852 2.49546C3.61603 3.26056 3.00897 4.51005 2.53239 5.69085C2.04255 6.9045 1.63688 8.18357 1.40572 9.10777C0.653287 12.1161 0.239996 15.7291 0.186648 19.1536C0.183977 19.3251 0.224394 19.4945 0.304191 19.6461C0.946507 20.8677 2.32565 22.0005 3.70792 22.8286C5.10574 23.6662 6.73561 24.3284 8.05087 24.4555C8.36981 24.4862 8.68475 24.3659 8.90201 24.1306C9.23135 23.7735 9.7905 22.9404 10.2132 22.2934C10.4051 21.9998 10.5847 21.7195 10.7274 21.4951C12.1391 21.7522 13.9102 21.9004 16.1494 21.9004C18.386 21.9004 20.1556 21.7524 21.5667 21.496C21.7092 21.7204 21.8886 22.0003 22.0802 22.2934C22.503 22.9404 23.0622 23.7735 23.3914 24.1306C23.6087 24.3659 23.9236 24.4862 24.2426 24.4555C25.5578 24.3284 27.1876 23.6662 28.5856 22.8286C29.9678 22.0005 31.347 20.8677 31.9893 19.6461C32.0691 19.4945 32.1094 19.3251 32.1069 19.1536C32.0535 15.7291 31.6401 12.1161 30.8877 9.10777C30.6566 8.18357 30.2509 6.9045 29.7611 5.69085C29.2845 4.51005 28.6773 3.26056 28.0083 2.49546C27.9283 2.40394 27.8325 2.32742 27.7256 2.26946C26.1137 1.39522 23.3828 0.427066 21.5883 0.23161C21.4984 0.221818 21.4078 0.223973 21.3185 0.23801C20.8784 0.307151 20.4994 0.533988 20.2199 0.745124C19.9248 0.968036 19.6508 1.24247 19.4142 1.5201C19.0713 1.92249 18.74 2.41196 18.5265 2.87568C17.797 2.81757 17.0056 2.78555 16.1493 2.78555C15.2911 2.78555 14.498 2.81772 13.7672 2.87609C13.5537 2.41224 13.2222 1.9226 12.8793 1.5201C12.6427 1.24247 12.3686 0.968036 12.0735 0.745124C11.794 0.533988 11.415 0.307151 10.9749 0.23801ZM23.6546 20.9577C23.7003 21.0283 23.7472 21.1004 23.7948 21.1732C24.0787 21.608 24.3599 22.025 24.5777 22.3288C25.424 22.1383 26.5003 21.6907 27.533 21.0718C28.6923 20.3772 29.6102 19.5787 30.0538 18.9005C29.9844 15.6871 29.5878 12.3508 28.9009 9.60471C28.6933 8.77507 28.3174 7.586 27.862 6.45738C27.4332 5.39517 26.9766 4.49567 26.5771 3.97851C25.1895 3.25956 23.0035 2.4993 21.5795 2.29461C21.5484 2.31278 21.5068 2.33973 21.4544 2.37926C21.3091 2.48902 21.1417 2.65043 20.973 2.84838C20.8845 2.95231 20.8035 3.0567 20.731 3.1578C21.3824 3.27688 21.9633 3.41936 22.4772 3.57751C23.9358 4.0263 24.9873 4.64238 25.5019 5.32848C25.8413 5.78092 25.7495 6.42276 25.2971 6.76208C24.8446 7.10141 24.2029 7.00972 23.8635 6.55728C23.738 6.39005 23.1895 5.93947 21.8748 5.53493C20.6066 5.1447 18.7383 4.83355 16.1493 4.83355C13.5604 4.83355 11.6921 5.1447 10.4238 5.53493C9.10907 5.93947 8.56061 6.39005 8.43519 6.55728C8.09586 7.00972 7.45403 7.10141 7.00159 6.76208C6.54915 6.42276 6.45746 5.78092 6.79679 5.32848C7.31137 4.64238 8.36289 4.0263 9.8215 3.57751C10.3342 3.41973 10.9135 3.27754 11.563 3.15863C11.4904 3.0573 11.4092 2.95261 11.3204 2.84838C11.1517 2.65043 10.9844 2.48902 10.8391 2.37926C10.7867 2.33973 10.745 2.31278 10.714 2.29461C9.28989 2.4993 7.10397 3.25956 5.71634 3.97851C5.31681 4.49567 4.86026 5.39517 4.43154 6.45738C3.97601 7.586 3.60003 8.77507 3.39253 9.60471C2.70568 12.3508 2.30903 15.6871 2.23969 18.9005C2.68313 19.5787 3.60121 20.3772 4.76048 21.0718C5.79321 21.6907 6.86939 22.1383 7.71583 22.3288C7.93354 22.025 8.21471 21.608 8.49877 21.1732C8.54668 21.0998 8.59387 21.0273 8.63991 20.9562C6.96577 20.3623 6.06636 19.5446 5.48402 18.6712C5.17032 18.2006 5.29749 17.5648 5.76803 17.2511C6.23861 16.9374 6.87436 17.0646 7.18807 17.5351C7.74564 18.3715 9.20223 19.8524 16.1494 19.8524C23.0965 19.8524 24.553 18.3717 25.1106 17.5351C25.4244 17.0646 26.0602 16.9374 26.5308 17.2511C27.0014 17.5648 27.1285 18.2006 26.8147 18.6712C26.2319 19.5454 25.3314 20.3638 23.6546 20.9577ZM8.85437 11.3023C9.37412 10.7425 10.0795 10.4263 10.8161 10.4228C11.5528 10.4263 12.2582 10.7425 12.7779 11.3023C13.2977 11.862 13.5895 12.6197 13.5895 13.4095C13.5895 14.1993 13.2977 14.957 12.7779 15.5167C12.2582 16.0765 11.5528 16.3927 10.8161 16.3962C10.0795 16.3927 9.37412 16.0765 8.85437 15.5167C8.33461 14.957 8.04281 14.1993 8.04281 13.4095C8.04281 12.6197 8.33461 11.862 8.85437 11.3023ZM21.4802 10.4228C20.7435 10.4263 20.0382 10.7425 19.5184 11.3023C18.9987 11.862 18.7069 12.6197 18.7069 13.4095C18.7069 14.1993 18.9987 14.957 19.5184 15.5167C20.0382 16.0765 20.7435 16.3927 21.4802 16.3962C22.217 16.3927 22.9222 16.0765 23.4419 15.5167C23.9618 14.957 24.2536 14.1993 24.2536 13.4095C24.2536 12.6197 23.9618 11.862 23.4419 11.3023C22.9222 10.7425 22.217 10.4263 21.4802 10.4228Z"
                                clipRule="evenodd"
                                />
                            </svg>
                            <span className='pt-[27.3px] font-semibold'>Discord</span>
                            </div>
                            <p className='text-left mt-[10px] ml-[30px] mb-[14px]'>
                            Lorem ipsum dolor sit amet consectetur. 
                            </p>
                        </a>
                        </div>

                    {/* Mail social box*/}
                        <div className='bg-[#1B1B1B]  text-white rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]'>
                        <a
                                href="mailto:designcodeatucf@gmail.com"
                                rel="noreferrer"
                                target="_blank"
                                className='  '
                                > 
                            <div className=' flex flex-row items-center '>
                            <svg
                                className="h-auto w-[35px] text-[#5DA9E9] pt-[20px] mr-[11.7px] ml-[25px] "
                                fill="currentColor"
                                viewBox="0 0 31 28"
                                aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                d="M27.9 0L3.1 0C1.395 0 0.0155 1.42083 0.0155 3.15741L0 22.1019C0 23.8384 1.395 25.2593 3.1 25.2593H27.9C29.605 25.2593 31 23.8384 31 22.1019V3.15741C31 1.42083 29.605 0 27.9 0ZM27.9 6.31482L15.5 14.2083L3.1 6.31482V3.15741L15.5 11.0509L27.9 3.15741V6.31482Z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className='pt-[27.3px] font-semibold'>Email</span>
                            </div>
                            <p className='text-left mt-[10px] ml-[30px] mb-[14px]'>
                            Lorem ipsum dolor sit amet consectetur. 
                            </p>
                        </a>
                        </div>

                    {/* KnightsConnect social box*/}
                        <div className='bg-[#1B1B1B]  text-white rounded-[18px] text-[16px]  shadow-inner hover:shadow-[#101010] hover:brightness-[0.7]'>
                        <a
                                href="https://knightconnect.campuslabs.com/engage/organization/designandcode"
                                rel="noreferrer"
                                target="_blank"
                                className='  '
                                > 
                            <div className=' flex flex-row items-center '>
                            <svg
                            className="h-auto w-[35px] text-[#5DA9E9] pt-[20px] mr-[11.7px] ml-[25px]"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 180.000000 180.000000"
                            preserveAspectRatio="xMidYMid meet"
                            
                        >
                            <g
                            transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
                            stroke="#5DA9E9"
                            strokeWidth="50px"
                            >
                            <path d="M747 1650 c-355 -75 -610 -391 -611 -755 0 -136 20 -220 79 -340 79
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
                            <span className='pt-[27.3px] font-semibold'>KnightConnect</span>
                            </div>
                            <p className='text-left mt-[10px] ml-[30px] mb-[14px]'>
                            Lorem ipsum dolor sit amet consectetur. 
                            </p>
                        </a>
                        </div>
                    </div>
                    </section>




            </main>

            </>

            
        );
    }
}

export default Members;