import dcLogo from "../assets/DesignCodeTriLogo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
	const [isActive, setIsActive] = useState(false);
	const toggleStyles = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<header
				className="p-[2rem] flex max-w-full w-full items-center justify-center sticky top-[0] z-50 bg-black border-b border-solid border-[#141414] mb-[4rem]"
				style={{ backgroundColor: "rgba(11, 11, 14,.8)" }}>
				<div className="max-w-[120.6rem] w-full flex justify-between">
					<div className="flex-row lg:flex lg:items-center lg:w-auto space-between">
						<NavLink
							to="/"
							className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">
							<img
								src={dcLogo}
								alt="Logo"
								className="h-12 w-auto lg:h-12 lg:w-auto mr-4"
							/>
						</NavLink>
					</div>
					<div className="z-50 flex md:hidden">
						<button
							onClick={toggleStyles}
							className="flex ml-auto items-center px-3 py-2 border rounded text-white border-black hover:text-white hover:border-white">
							{isActive ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M18 6 6 18"></path>
									<path d="m6 6 12 12"></path>
								</svg>
							) : (
								<svg
									className="fill-current h-[1.6rem] w-[1.6]"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							)}
						</button>
					</div>
					<nav
						className={`${
							isActive
								? "yo:opacity-1 yo:translate-x-0"
								: "yo:opacity-0 yo:translate-x-[100vw]"
						} yo:translate-x-0 fixed inset-0 z-40 h-full overflow-auto md:relative md:h-auto md:overflow-visible`}>
						<ul className="bg-black md:bg-transparent flex font-bold flex-col justify-center items-center h-full w-full  gap-5 md:flex-row md:justify-start  lg:flex-row">
							<NavLink
								to="/about"
								className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">
								About
							</NavLink>
							<NavLink
								to="/projects"
								className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">
								Projects
							</NavLink>
							<NavLink
								to="/events"
								className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">
								Events
							</NavLink>
							<NavLink
								to="/contact"
								className="block lg:mt-0 text-white text-[1.6rem] hover:text-primaryLightBlue mr-4">
								Contact
							</NavLink>

							<NavLink
								to="/membership"
								className="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white text-[1.6rem] border-white hover:border-transparent hover:text-white hover:bg-primaryLightBlue lg:mt-0">
								Become A Member
							</NavLink>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default NavBar;
