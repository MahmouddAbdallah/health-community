import PropTypes from 'prop-types'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UseAppContext } from "../context/AppContext"
import { MenuIcon } from "../components/icons"
import UserNavbar from "./UserNavbar"
import Logo from '../assets/Logo.svg'
import LogoWithoutText from '../assets/LogoWithoutText.svg'
import WhiteLogo from '../assets/WhiteLogo.svg'
import clsx from 'clsx'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'

const Navbar = ({ inderbg }) => {
    const { user } = UseAppContext()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const navBarItem = [
        {
            name: 'Home',
            href: '/home'
        },
        {
            name: 'Store',
            href: '/store'
        },
        {
            name: 'Doctor',
            href: '/doctor'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ]
    const eleRef = useCloseOnOutsideClick(() => {
        setOpen(false)
        document.body.style.overflowY = 'auto'
    })

    return (
        <nav className={clsx(
            'flex justify-between items-center py-5 pcontainer top-0 md:static',
            { "sticky z-10": open },
            { "border-b": !inderbg },
            { "text-white-White": inderbg },
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
                    {navBarItem.map(item =>
                        <li key={item.name} className="duration-300 ease-in-out ">
                            <Link className=" text-base lg:text-lg" to={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    )}
                    {user ?
                        <UserNavbar user={user} />
                        :
                        <li className={`space-x-5 block`}>
                            <button className="px-6 py-[6px] text-white-White font-semibold bg-red-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-pink-200 hover:cursor-pointer"
                                onClick={() => { navigate("/sign-up") }}>
                                Sign up
                            </button>
                            <button className="px-6 py-[6px] text-white-White font-semibold bg-black-black rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer dark:bg-white-White dark:text-black-black"
                                onClick={() => { navigate("/sign-in") }}>
                                Sign In
                            </button>
                        </li>
                    }
                </ul>
            </div>
            <div ref={eleRef} className="block md:hidden ">
                <button onClick={() => {
                    setOpen(!open)
                    document.body.style.overflowY = 'hidden'
                }} >
                    <MenuIcon className={'w-7 h-7'} />
                </button>
                <div className={`duration-200 ${open ? 'text-black-black border-l-2 bg-white-White flex translate-x-0' : "translate-x-[100%] "} pb-32  flex-col justify-between items-center gap-5 fixed right-0 h-screen top-0 w-72 bg-white-Light_Gray dark:bg-gray-800`}>
                    <ul className=" md:flex items-center gap-3 md:gap-4 lg:gap-5 w-full">
                        <div className='w-full flex justify-center py-5 border-b'>
                            <img src={LogoWithoutText} alt='' />
                        </div>
                        <UserNavbar isMenu={open} user={user} setOpen={setOpen} />
                        {
                            navBarItem.map(item =>
                                <li
                                    onClick={() => {
                                        setOpen(!open)
                                        document.body.style.overflowY = 'auto'
                                    }}
                                    key={item.name} className="text-base lg:text-lg">
                                    <Link to={item.href} className="duration-300 ease-in-out py-3 border-b w-full flex justify-center">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    <div className={`space-x-5 ${user ? "hidden" : "block"}`}>
                        <Link
                            onClick={() => {
                                setOpen(!open)
                                document.body.style.overflowY = 'auto'
                            }} to={'sign-up'} className="px-6 py-2 text-white-White font-semibold bg-red-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-pink-200 hover:cursor-pointer">
                            Sign up
                        </Link>
                        <Link
                            onClick={() => {
                                setOpen(!open)
                                document.body.style.overflowY = 'auto'
                            }} to={'sign-in'} className="px-6 py-2 text-white-White font-semibold bg-black-black rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer dark:bg-white-White dark:text-black-black">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    inderbg: PropTypes.bool
}

export default Navbar