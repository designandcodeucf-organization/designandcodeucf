import React, { Component } from 'react';

export default class SocialHeading extends Component {
  render() {
    return (
        <div className='text-white flex flex-col items-center justify-center'>  
        <div className=' relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px]'>
        <h1 className=' flex flex-col text-center text-[4.2rem] text-4xl font-bold '>
        Have Questions?
        <span className= 'text-[#FFCC37] text-center text-[4.2rem] text-4xl font-bold'>We're here to help </span>
        </h1>
        </div>  
        <div  className='relative flex flex-col flex-none justify-center content-center h-[156px] max-w-[632px]'>
          <p className='text-center text-[1.4rem] font-medium'>
          If you have any questions or need assistance, please don't hesitate to reach out to us.
           We're here to provide you with the information and support you need. 
          Feel free to message us on our social media or via email, and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }
}
