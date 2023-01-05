import { Link } from "react-router-dom";

function Footer() {
    const navbarMenuItems = [["HOME", "/"], ["ABOUT", "/about"], ["PROJECTS", "/oops"], ["CONTACT", "/contact"]]
    return (
        <nav className="m-10 flex flex-col place-content-between pr-2">
            <div className='md:self-center'>
                <a href="https://github.com/red-peel"><img className='max-h-10 max-w-10' src="logo192.png" alt="" /></a>
            </div>
            <p className="opacity-20 md:self-center">I don't have a copyright yet.</p>
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

export default Footer;