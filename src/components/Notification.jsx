import { BellIcon } from 'lucide-react'
import NotificationData from './NotificationData'
import { useEffect, useRef, useState } from 'react'

const Notification = () => {
    const [open, setOpen] = useState(false);

    const ref = useRef()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <div ref={ref} className="flex items-center relative">
            <button onClick={() => setOpen(!open)}>
                <BellIcon />
            </button>
            {
                open &&
                <div className="text-black-black absolute bg-white-White w-96 min-h-96 md:w-[450px] right-0 top-8">
                    <NotificationData />
                </div>
            }
        </div>
    )
}

export default Notification