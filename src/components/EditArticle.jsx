import { useEffect } from 'react'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import PropTypes from 'prop-types'

const EidtArticle = ({ setOpen }) => {
    const close = () => {
        setOpen(false)
        document.body.style.overflow = 'auto'
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])
    const eleRef = useCloseOnOutsideClick(close)
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5'>
            <div ref={eleRef} className='bg-white-White rounded-xl w-full sm:w-96 md:w-[500px] lg:w-[600px]'>
            </div>
        </div>
    )
}

EidtArticle.propTypes = {
    setOpen: PropTypes.func
}
export default EidtArticle