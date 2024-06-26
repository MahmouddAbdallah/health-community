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
                <BellIcon className='' />
            </button>
            {
                open &&
                <div className="text-black-black fixed top-0 max-md-left-0 w-full h-full md:absolute border-2 bg-white-White min-h-96 md:w-[450px] md:right-0 md:top-8 z-50 md:rounded-md">
                    <NotificationData setOpen={setOpen} />
                </div>
            }
        </div>
    )
}

export default Notification