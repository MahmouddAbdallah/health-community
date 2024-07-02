import { useState } from 'react'
// import PropTypes from 'prop-types'
import { ImagesIcon } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import PostImg from './PostImg'
import clsx from 'clsx'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Spinner } from '../../../components/icons'
const AddPost = () => {
    const [open, setOpen] = useState(false)
    const handleArticleForm = useForm()
    const [loading, setLoading] = useState(false)
    const { handleSubmit, register, } = handleArticleForm;
    const eleRef = useCloseOnOutsideClick(() => {
        document.body.style.overflow = 'auto'
        setOpen(false)
    })
    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append("title", data.title)
            formData.append("description", data.description)
            if (data.img) {
                formData.append("imgs", data.img[0])
            }
            await axios.post('/api/community/post', formData)
            window.location.reload()
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <div className="border p-5 space-y-2">
            <textarea
                className="resize-none h-44 border border-gray-300 rounded-xl px-5 py-2 w-full outline-none"
                placeholder='Write Something...'
            ></textarea>
            <button onClick={() => {
                document.body.style.overflow = 'hidden'
                setOpen(true)
            }} className="w-full py-2 flex justify-center bg-blue-300 hover:bg-blue-500 text-white-White rounded">
                <ImagesIcon />
            </button>

            <div className={clsx(
                { "hidden": !open },
                { "fixed z-[9999] bg-black-black/20 top-0 left-0 h-full w-full flex justify-center items-center px-5": open },
            )}>
                <div ref={eleRef} className='py-5 px-5 bg-white-White  w-full md:w-[500px]'>
                    <FormProvider {...handleArticleForm}>
                        <form onSubmit={onSubmit} className='space-y-3'>
                            <PostImg />
                            <input
                                placeholder='Title'
                                {...register('title', { required: true })}
                                type="text"
                                className="w-full py-3 px-2 border rounded-md outline-none focus:border-blue-500"
                            />
                            <textarea
                                placeholder='Description'
                                {...register('description', { required: true })}
                                type="text"
                                className="w-full py-3 px-2 border rounded-md outline-none focus:border-blue-500"
                            />
                            <button className='w-full py-2 flex justify-center rounded-md bg-blue-500 text-white-White'>
                                {loading ? <Spinner className={'animate-spin'} /> : "Post"}
                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div >
    )
}

AddPost.propTypes = {}

export default AddPost