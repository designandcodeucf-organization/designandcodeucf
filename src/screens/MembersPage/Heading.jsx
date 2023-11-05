import React, { Component } from 'react';

export default class MemberHeading extends Component {
  render() {
    return (
      <div className='text-white flex flex-col items-center justify-center'>  
        <div className=' relative flex flex-col flex-none justify-center content-center h-[120px] max-w-[473px]'>
        <h1 className=' flex flex-col text-center text-[50px] font-bold '>
        Join
        <span className= 'text-[#FFCC37] text-center text-[50px] font-bold'>Design & Code </span>
        </h1>
        </div>  
        <div  className='relative flex flex-col flex-none justify-center content-center h-[156px] max-w-[632px]'>
          <p className='text-center text-[15px] font-medium'>
          Are you ready to unlock a world of design and code possibilities? 
          Our club is your gateway to a community of passionate individuals, endless inspiration, and incredible opportunities. 
          As a member, you'll have access to exclusive resources, industry insights, and a network of like-minded creators. Whether you're an aspiring designer or a coding wizard, 
          joining our club is your key to growth, collaboration, and recognition.
          </p>
        </div>
      </div>
    );
  }
}
