import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
const LayoutDashboard = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex'>
            <div className='flex-1'>
                <div className='lg:hidden'>
                    <Navbar setOpen={setOpen} />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <div className=''>
                <Sidebar
                    open={open}
                    setOpen={setOpen}
                />
            </div>
        </div>
    )
}

export default LayoutDashboard