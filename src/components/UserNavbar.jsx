import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { DashboardIcon, PersonIcon } from '../components/icons'
import { LogOutIcon } from '../components/icons'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'
import clsx from 'clsx'
import { UseAppContext } from '../context/AppContext'
import Notification from './Notification'
import { ShoppingCartIcon } from 'lucide-react'
import { useSelector } from 'react-redux'

const UserNavbar = ({ isMenu }) => {
    const [openUser, setOpenUser] = useState(false);
    const { user } = UseAppContext()
    const userRef = useCloseOnOutsideClick(() => { setOpenUser(false) })
    const { pathname } = useLocation()
    const cartNumber = useSelector(state => state.cart.count)
    return (
        (user) &&
        <div>
            <div ref={userRef} className={clsx(
                `relative min-w-[150px] flex justify-center`,
                { 'flex-col border-b': isMenu }
            )}>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={() => { setOpenUser(!openUser) }} className="cursor-pointer" >
                        <div className="flex items-center justify-center md:justify-normal px-1 py-3 md:py-1 gap-2 md:hover:bg-black-black/10  duration-300 rounded-md">
                            <div className="font-medium" >
                                {user?.name}
                            </div>
                            <div className=" h-7 w-7 bg-white-White rounded-md overflow-hidden">
                                <img className=" h-8 w-8 object-cover " src={user?.picture} alt="" />
                            </div>
                        </div>
                    </button>
                    <div className={clsx(
                        'hidden md:flex gap-3',
                        { 'stroke-white-White': isMenu }
                    )}>
                        <Notification />
                        {
                            pathname.includes('store') &&
                            <Link className='flex relative' to={'/store/cart'}>
                                <ShoppingCartIcon />
                                {cartNumber ? <div className=' absolute -right-2 -top-1 flex justify-center items-center text-xs bg-blue-500 text-white-White rounded-full w-4 h-4'>
                                    {cartNumber}
                                </div> : ""}
                            </Link>
                        }
                    </div>
                </div>
                {openUser &&
                    <div className={clsx(
                        { "static md:absolute w-full slow top-10 text-black-black bg-blue-300 dark:bg-gray-700 dark:md:bg-gray-700 px-2 py-2 rounded-md z-50": !isMenu },
                    )}>
                        <ul className={clsx(
                            " space-y-1 ",
                            { 'border-t': isMenu }
                        )}>
                            <li>
                                <Link onClick={() => {
                                    setOpenUser(false)
                                    document.body.style.overflowY = 'auto'
                                }} to={`/profile/${user?._id}`} >
                                    <div className={clsx(
                                        "flex px-2 py-3 dark:hover:bg-gray-900 rounded-md",
                                        { "hover:bg-blue-200": !isMenu }
                                    )}>
                                        <div>{!isMenu && <PersonIcon className="w-6 h-6" />}</div>
                                        <div className=" w-full flex justify-center">
                                            <span> Profile</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={clsx(
                                { 'border-t': isMenu }
                            )}>
                                <Link to={'/dashboard'}
                                    onClick={() => {
                                        setOpenUser(false)
                                        document.body.style.overflowY = 'auto'
                                    }}
                                    className="">
                                    <div className={clsx(
                                        "flex px-2 py-3 dark:hover:bg-gray-900 rounded-md",
                                        { "hover:bg-blue-200": !isMenu }
                                    )}>
                                        <div>{!isMenu && <DashboardIcon className="w-6 h-6" />}</div>
                                        <div className=" w-full flex justify-center">
                                            <span> Dashboard</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={clsx(
                                { 'border-t': isMenu }
                            )}>
                                <Link to={'/sign-in'} onClick={() => {
                                    setOpenUser(false)
                                    document.body.style.overflowY = 'auto'
                                }}
                                    className="">
                                    <div className={clsx(
                                        "flex px-2 py-3 dark:hover:bg-gray-900 rounded-md",
                                        { "hover:bg-blue-200": !isMenu }
                                    )}>
                                        <div>{!isMenu && <LogOutIcon className="w-6 h-6" />}</div>
                                        <div className=" w-full flex justify-center">
                                            <span> Log out</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

UserNavbar.propTypes = {
    isMenu: PropTypes.bool,
    close: PropTypes.any
}

export default UserNavbar