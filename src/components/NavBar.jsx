
function NavBar(){
    const name = "Andres";

    const exampleElement = <h2 className="text-white">{name}</h2>
    
    return(
        <>
        <h1 className="text-white text-[1.6rem]" >navbar</h1>
        <div>{exampleElement}</div>
        </>
    )
}


export default NavBar;