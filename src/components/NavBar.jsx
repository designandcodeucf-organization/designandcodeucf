
function NavBar(){
    const name = "Andres";

    const exampleElement = <h2 className="text-white">{name}</h2>
    
    return(
        <nav className=" bg-opacity-100 flex flex-row justify-around float-right">
        
            {/* main page navbar links */}
            <div className="m-8 ">
                <ul className="flex items-center gap-[3vw] mx-auto">
                    <li className="text-white transition hover:text-gray-500">
                        <a href="#">Home</a>
                    </li>
                    <li className="text-white transition hover:text-gray-500">
                        <a href="#officers">About Us</a>
                    </li>
                    <li className="text-white transition hover:text-gray-500">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            
            {/* Sign up button */}
            <div className="m-8">
                <button className="text-white transition hover:text-gray-500 w-[89px] h-[34px] left-[1043.5px] top-[41.5px] rounded-full bg-[#252526]">Sign Up</button>
            </div>
        </nav>
    )
}


export default NavBar;