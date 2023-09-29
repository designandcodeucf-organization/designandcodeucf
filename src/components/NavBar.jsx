import dcLogo from "../assets/DesignCodeTriLogo.png";

function NavBar() {
  return (
    <>
      <nav className="nav-bar  p-[2rem] flex w-full items-center justify-center sticky top-[0] z-20 bg-black">
        <div className="w-[80rem] flex justify-between">
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
          <div className="w-full flex-row lg:flex lg:items-center lg:w-auto">
            <img
              src={dcLogo}
              alt="Logo"
              className="h-0 w-auto lg:h-12 lg:w-auto mr-4"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex  font-bold lg:flex-row justify-center items-center">
              <a
                href="#Home"
                className="block mt-4  lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4"
              >
                Home
              </a>
              <a
                href="#AboutUs"
                className="block mt-4 lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4"
              >
                About Us
              </a>
              <a
                href="#Contact"
                className="block mt-4 lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4"
              >
                Contact
              </a>
              <a
                href="BecomeAMember"
                className="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white text-[1.6rem] border-white hover:border-transparent hover:text-white hover:bg-primaryLightBlue mt-4 lg:mt-0"
              >
                Become A Member
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
