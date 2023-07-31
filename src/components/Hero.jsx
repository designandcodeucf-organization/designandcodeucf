
function Hero() {
  return (  
    <>
    <section className=" content-center items-center justify-center flex-col flex py-8 max-w-full h-screen">
      <div className="content-center items-center justify-center flex-wrap flex-col flex max-w-7xl">
        <div className="w-full max-w-lg gap-8 flex-wrap flex-col flex">
          <h1 className="text-white text-center text-5xl font-bold">Introducing <br/>Design & Code</h1>
          <p className="text-[#BBBBBB] text-xl text-center">We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
        </div>
          <button className="transition duration-300 hover:scale-105 bg-white font-bold rounded-xl py-4 px-8 mt-8">Become a member</button>
          
      </div>

    </section>
    </>
  )
}

export default Hero