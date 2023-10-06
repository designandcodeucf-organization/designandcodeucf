import dcLogo from "../assets/DesignCodeTriLogo.png";

function NavBar() {
  return (
    <>
      <nav
        className=" nav-bar w-full block items-center py-4 px-16 justify-end sticky z-20"
        style={{ backgroundColor: "rgba(11, 11, 14, 0.8)" }}
      >
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-black hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-row lg:flex lg:items-center lg:w-auto float-left">
          <a href="https://designandcodeucf.com/">
            <img
              src={dcLogo}
              alt="Logo"
              className="h-0 w-auto lg:h-12 lg:w-auto mr-4"
            />
          </a>
        </div>
        <div className="w-full flex-row lg:flex lg:items-center lg:w-auto float-right">
          <div className="text-sm flex lg:flex-row justify-center items-center float-right">
            <a
              href="#top"
              className="block mt-4  lg:mt-0 text-white hover:text-primaryLightBlue mr-4"
            >
              Home
            </a>
            <a
              href="#AboutUs"
              className="block mt-4 lg:mt-0 text-white hover:text-primaryLightBlue mr-4"
            >
              About Us
            </a>
            <a
              href="mailto:designcodeatucf@gmail.com" target="_blank"
              className="block mt-4 lg:mt-0 text-white hover:text-primaryLightBlue mr-4"
            >
              Contact
            </a>
            <a
              href="https://knightconnect.campuslabs.com/engage/organization/designandcode" target="_blank"
              className="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white border-white hover:border-transparent hover:text-white hover:bg-primaryLightBlue mt-4 lg:mt-0"
            >
              Become A Member
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
