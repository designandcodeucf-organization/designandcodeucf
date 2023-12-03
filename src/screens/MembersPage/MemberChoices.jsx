import { Component } from 'react';

export default class MemberChoices extends Component {
  render() {
    return (
      <div className='flex flex-row items-center justify-center gap-[80px] text-white mt-[100px] mb-[100px] s:mt-[60px] s:flex-col'> 
        {/* free member choice */}
        <div className='flex flex-col items-center'>
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
        </div>

        {/* paid member choice */}
        <div className='flex flex-col items-center'>
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
        </div>
        

      </div>
    );
  }
}
