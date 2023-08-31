
function NavBar(){
    const name = "Andres";

    const exampleElement = <h2 className="text-white">{name}</h2>
    
    return(
        <>
        <h1 className="text-white">navbar</h1>
        <div>{exampleElement}</div>
        </>
    )
}


export default NavBar;