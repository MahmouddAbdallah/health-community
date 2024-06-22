import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import UserNavbar from "./UserNavbar"
import LogoWithoutText from '../assets/LogoWithoutText.svg'
import { UseAppContext } from "../context/AppContext"


const MenuNavbar = ({ navbarItem, open, setOpen }) => {
    const close = () => {
        setOpen(false)
        document.body.style.overflowY = 'auto'
    }
    const { user } = UseAppContext()

    return (
        <div className={`fixed right-0 top-0 w-72 text-black-black border-l-2 ${open ? ' rtl z-50' : "ltr"} pb-32 md:hidden `}>
            {open && <div onClick={close} className="fixed h-full w-full top-0 left-0 bg-black-black/30" />}
            <div className=" md:flex items-center gap-3 md:gap-4 lg:gap-5 w-full z-50 bg-white-Light_Gray h-svh">
                <div className="h-full flex flex-col justify-between items-center">
                    <div className="w-full">
                        <div className='w-full flex justify-center py-5 border-b'>
                            <img src={LogoWithoutText} alt='' />
                        </div>
                        <UserNavbar isMenu={open} close={close} />
                        {navbarItem.map(item => {
                            return (
                                <div onClick={close}
                                    key={item.name}
                                    className="text-base lg:text-lg"
                                >
                                    <Link to={item.href} className="duration-300 ease-in-out py-3 border-b w-full flex justify-center">
                                        {item.name}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`space-x-5 mb-10 ${user ? "hidden" : "block"}`}>
                        <Link onClick={close} to={'/sign-up'} className="px-6 py-2 text-white-White font-semibold bg-red-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-pink-200 hover:cursor-pointer">
                            Sign up
                        </Link>
                        <Link onClick={close} to={'/sign-in'} className="px-6 py-2 text-white-White font-semibold bg-black-black rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer dark:bg-white-White dark:text-black-black">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

MenuNavbar.propTypes = {
    navbarItem: PropTypes.array,
    setOpen: PropTypes.func,
    open: PropTypes.bool
}

export default MenuNavbar