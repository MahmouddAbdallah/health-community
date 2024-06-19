import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PersonIcon } from '../components/icons'
import { LogOutIcon } from '../components/icons'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'
import clsx from 'clsx'

const UserNavbar = ({ user, isMenu, setOpen }) => {
    const [openUser, setOpenUser] = useState(false);

    const userRef = useCloseOnOutsideClick(() => { setOpenUser(false) })
    return (
        <>
            {user ?
                <li ref={userRef} className={clsx(
                    `relative min-w-[150px] flex justify-center`,
                    { 'flex-col border-b': isMenu }
                )}>
                    <button onClick={() => { setOpenUser(!openUser) }} className="cursor-pointer" >
                        <div className="flex items-center justify-center md:justify-normal px-2 py-3 md:py-1 gap-2 hover:bg-black-black/10  duration-300 rounded-md">
                            <div className="">
                                {user.name}
                            </div>
                            <div className=" h-7 w-7 bg-white-White rounded-md overflow-hidden">
                                <img className=" h-8 w-8 object-cover " src={user.picture} alt="" />
                            </div>
                        </div>
                    </button>
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
                                        setOpen(false)
                                        setOpenUser(false)
                                        document.body.style.overflowY = 'auto'
                                    }} to={`/profile/${user._id}`} >
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
                                    <Link to={'/sign-in'} onClick={() => {
                                        setOpen(false)
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
                </li>
                :
                <li>{user && <div className=" w-44 h-7 rounded-md bg-slate-200 dark:bg-gray-500 animate-pulse" />}</li>
            }
        </>
    )
}

UserNavbar.propTypes = {
    user: PropTypes.object.isRequired,
    isMenu: PropTypes.bool,
    setOpen: PropTypes.any
}

export default UserNavbar