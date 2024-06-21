import PropTypes from 'prop-types'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
const ShowCertification = ({ indexImg, imgs }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const close = () => {
        navigate(pathname)
        document.body.style.overflow = 'auto'
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])
    const eleRef = useCloseOnOutsideClick(close)
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5'>
            <div ref={eleRef} className='bg-white-White rounded-xl w-full sm:w-96 md:w-[500px] lg:w-[600px]'>
                <img src={imgs[indexImg]} alt="" />
            </div>
        </div>
    )
}


ShowCertification.propTypes = {
    indexImg: PropTypes.string,
    imgs: PropTypes.any
}

export default ShowCertification