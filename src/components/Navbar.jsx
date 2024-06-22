import PropTypes from 'prop-types'
import { useState } from "react"
import { Link } from "react-router-dom"
import { UseAppContext } from "../context/AppContext"
import { MenuIcon } from "../components/icons"
import UserNavbar from "./UserNavbar"
import Logo from '../assets/Logo.svg'
import WhiteLogo from '../assets/WhiteLogo.svg'
import clsx from 'clsx'
import MenuNavbar from './MenuNavbar'

const Navbar = ({ inderbg }) => {
    const { user } = UseAppContext()
    const navbarItem = [{ name: 'Home', href: '/home' }, { name: 'Store', href: '/store' }, { name: 'Doctor', href: '/doctor' }, { name: 'Blog', href: '/blog' }, { name: 'Contact', href: '/contact' }]
    const [open, setOpen] = useState(false);

    return (
        <nav className={clsx(
            'flex justify-between items-center py-5 top-0 md:static',
            { "border-b": !inderbg },
            { "pcontainer": !inderbg },
        )}>
            <Link to={'/'}>
                <div>
                    {inderbg ?
                        <img className="w-[200px] md:w-[248px]" src={WhiteLogo} alt="" />
                        :
                        <img className="w-[200px] md:w-[248px]" src={Logo} alt="" />
                    }
                </div>
            </Link>
            <div className="hidden md:flex gap-10">
                <ul className="flex items-center gap-3 md:gap-4 lg:gap-5 ">
                    {navbarItem.map(item =>
                        <li key={item.name} className={clsx(
                            "duration-300 ease-in-out ",
                            { "text-white-White": inderbg },
                        )}>
                            <Link className=" text-base lg:text-lg" to={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    )}
                    {user ?
                        <li className={clsx({ "text-white-White": inderbg })}>
                            <UserNavbar />
                        </li>
                        :
                        <li className={`flex gap-5`}>
                            <Link to={'/sign-up'} className="block px-6 md:px-2 md:text-sm lg:px-6 lg:text-base py-2 text-white-White font-semibold bg-red-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-pink-200 hover:cursor-pointer">
                                Sign up
                            </Link>
                            <Link to={'/sign-in'} className="block px-5 md:px-2 md:text-sm lg:px-6 lg:text-base py-2 text-white-White font-semibold bg-black-black rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc]  ">
                                Sign In
                            </Link>
                        </li>
                    }
                </ul>
            </div>
            <div className="block md:hidden ">
                <button onClick={() => {
                    setOpen(!open)
                    document.body.style.overflowY = 'hidden'
                }} >
                    <MenuIcon className={clsx(
                        'w-7 h-7',
                        { "fill-white-White": inderbg },
                    )} />
                </button>
            </div>
            < MenuNavbar
                open={open}
                setOpen={setOpen}
                navbarItem={navbarItem}
            />
        </nav>
    )
}

Navbar.propTypes = {
    inderbg: PropTypes.bool
}

export default Navbar