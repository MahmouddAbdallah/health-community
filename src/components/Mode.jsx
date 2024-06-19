import { useState } from 'react'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick';
import { ModeIcon } from '../components/icons';

const Mode = () => {
    const [openMode, setOpenMode] = useState(false);
    const modeRef = useCloseOnOutsideClick(() => { setOpenMode(false) })
    return (
        <div ref={modeRef} className=" relative flex justify-center">
            <button className="hover:scale-125 hover:font-semibold duration-300 ease-in-out "
                onClick={() => {
                    setOpenMode(!openMode)
                }} >
                <span className="text-base lg:text-lg dark:text-white-White">
                    Mode
                </span>
            </button>
            {
                openMode
                &&
                <div className=" absolute top-12 border bg-gray-900 p-5 rounded-md dark:bg-white-White z-50">
                    <ModeIcon />
                </div>
            }
        </div>
    )
}

export default Mode