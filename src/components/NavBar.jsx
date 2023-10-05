import dcLogo from "../assets/DesignCodeTriLogo.png";

function NavBar() {
  return (
    <>
      <header className="p-[2rem] flex w-full items-center justify-center sticky top-[0] z-20 bg-black border-b border-solid border-[#141414]">
        <div className="w-[80rem] flex justify-between">

          <div className="flex-row lg:flex lg:items-center lg:w-auto">
            <img
              src={dcLogo}
              alt="Logo"
              className="h-12 w-auto lg:h-12 lg:w-auto mr-4"
            />
          </div>
          <div className="flex lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-black hover:text-white hover:border-white">
              <svg
                className="fill-current h-[1.6rem] w-[1.6]"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className=" hidden lg:flex ml-auto  justify-center items-center">
            <div className="flex  font-bold lg:flex-row justify-center items-center">
              <a href="#Home" className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">Home</a>
              <a href="#AboutUs" className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4"> About Us</a>
              <a href="#Contact" className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4"> Contact </a>
              <a href="BecomeAMember" className="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white text-[1.6rem] border-white hover:border-transparent hover:text-white hover:bg-primaryLightBlue lg:mt-0">
                Become A Member
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
