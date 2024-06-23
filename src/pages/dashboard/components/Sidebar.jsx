import PropTypes from 'prop-types'
import LogoWithoutText from '../../../assets/LogoWithoutText.svg'
import { Link } from 'react-router-dom'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import { useState } from 'react'

const Sidebar = ({ open, setOpen }) => {
    const [openHref, serOpenHref] = useState('')
    const items = [
        {
            name: 'Appointment',
            href: '/dashboard/appointment',
            // subs: [
            //     {
            //         name: 'Today',
            //         href: '/dashboard/appointment/today'
            //     },
            //     {
            //         name: 'Upcoming',
            //         href: '/dashboard/appointment/upcoming'
            //     },
            //     {
            //         name: 'Past',
            //         href: '/dashboard/appointment/past'
            //     }
            // ]
        },
        {
            name: 'Messages',
            href: '/dashboard/messages'
        },
    ]
    const eleRef = useCloseOnOutsideClick(() => setOpen(false))
    return (
        <div ref={eleRef} className={`fixed lg:sticky right-0 top-0 w-72 h-svh lg:w-80 text-black-black border-l-2 ${open ? 'rtl z-50' : "ltr"} bg-white-White`}>
            <div className='w-full'>
                <Link to={'/'} className='w-full flex justify-center py-10 border-b'>
                    <img className='w-28' src={LogoWithoutText} alt='' />
                </Link>
                <div>
                    {items.map(item => {
                        return (
                            <div key={item.name} className='overflow-hidden duration-500'>
                                <div className='bg-white-White z-50 relative '>
                                    <Link
                                        onClick={() => serOpenHref(item.href)}
                                        to={item.href}
                                        className='block w-full text-center border-b py-5 font-medium '
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                                <div className={`inner-shadow overflow-hidden z-0 duration-300 ${openHref == item.href ? "ttd" : " dtt"}`}>
                                    {item.subs?.map(sub => {
                                        return (
                                            <div key={sub.name}>
                                                <Link
                                                    to={sub.href}
                                                    className='block w-full text-center border-b py-3 '
                                                >
                                                    {sub.name}
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
}

export default Sidebar