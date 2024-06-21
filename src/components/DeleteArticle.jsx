import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'
import PropTypes from 'prop-types'
import { LucideMessageCircleWarning } from 'lucide-react'

const DeleteArticle = ({ setOpen, handleDelete }) => {
    const close = () => {
        setOpen(false)
        document.body.style.overflow = 'auto'
    }

    const eleRef = useCloseOnOutsideClick(close)
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5'>
            <div ref={eleRef} className='bg-white-White rounded-xl w-full sm:w-96 md:w-[500px] lg:w-[600px]'>
                <div className='p-3 space-y-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-bold'>Delete Article</h2>
                        <LucideMessageCircleWarning className='size-5 stroke-yellow-400' />
                    </div>
                    <p className='text-sm '>Are you sure you want to delete this article<br />This action cannot be undone.</p>
                    <div>
                        <button onClick={handleDelete} className='bg-red-500 hover:bg-red-600 text-white-White font-bold py-2 px-4 rounded-full'>Delete</button>
                        <button onClick={close} className='bg-gray-500 hover:bg-gray-600 text-white-White font-bold py-2 px-4 rounded-full ml-4'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

DeleteArticle.propTypes = {
    setOpen: PropTypes.func,
    handleDelete: PropTypes.func
}
export default DeleteArticle