import { Link } from "react-router-dom";

function Navbar(){
    // use this array to add more menu items to the navbar
    const navbarMenuItems = [["HOME", "/"], ["ABOUT", "/about"], ["PROJECTS", "/projects"], ["CONTACT", "/contact"]]

    return (
    <nav className="m-10 flex flex-col md:flex-row place-content-between pr-2">
        <div className='md:inline-flex md:self-center'>
            <img className='w-10' src="logo192.png" alt="" />
            <h1 id="title" className="inline-block pr-2 md:pl-3 text-4xl font-mono transition ease-in-out hover:opacity-60 duration-300 "> <a href="https://github.com/red-peel/portfolio"> &#123;ELIAS_GONZALEZ&#125; </a> </h1>
        </div>
        <menu className="flex flex-col md:flex-row sm:flex-col">
            {navbarMenuItems.map(([title, link]) => {
                return (
                    <h2 className="font-extralight transition ease-in-out hover:opacity-40 m-2 text-xl "><Link to={link}>{title}</Link></h2>
                )
            })}
        </menu>
        
    </nav>
    )
}
export default Navbar;