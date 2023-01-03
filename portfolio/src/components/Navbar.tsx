function Navbar(){
    // use this array to add more menu items to the navbar
    const navbarMenuItems = [["HOME", "/home"], ["ABOUT", "/about"], ["PROJECTS", "/about"], ["OTHER", "/about"]]

    return <nav className="m-10 bg-gray-200 flex flex-row place-content-between ">
        <h1 className="pl-3 text-5xl decoration-2 underline-offset-2 underline font-serif self-center"> ELIAS GONZALEZ </h1>
        <menu className="flex flex-row self-center">
            {navbarMenuItems.map(([title, link]) => {
                return <p className="mr-3 text-xl">{title}</p>
            })}
        </menu>
        
        
    </nav>
    
}
export default Navbar;