import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick'
import PropTypes from 'prop-types'
import { XIcon } from 'lucide-react'
import AddImageFileArticle from './AddImageFileArticle';
import { useForm, FormProvider } from 'react-hook-form'
import ErrorMsg from './ErrorMsg';
import SearchBlogCategory from './SearchBlogCategory';
import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from './icons';
import { useSearchParams } from 'react-router-dom';

const AddArticle = ({ setOpen, }) => {
    const [loading, setLoading] = useState(false)
    const [warning, setWarning] = useState(false)
    const [edit, setEdit] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const handleArticleForm = useForm()
    const { handleSubmit, register, formState: { errors } } = handleArticleForm;
    const close = () => {
        if (edit) {
            setWarning(true)
            console.log({ edit, warning });
        } else {
            setOpen(false)
            document.body.style.overflow = 'auto'
        }
    }

    const eleRef = useCloseOnOutsideClick(close)
    const onSubmit = handleSubmit(async (data) => {
        // API call to add article
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append("title", data.title)
            formData.append("description", data.description)
            formData.append("img", data.img[0])
            formData.append("categoryId", data.categoryId)
            const res = await axios.post('/api/blog/article', formData)
            toast.success(res.data.message)
            setSearchParams('next=sections')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.error(error?.response?.data?.message || 'There is an Error')
        }
    })
    return (
        <div>
            <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5 '>
                <div ref={eleRef} className='bg-white-White w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 '>
                    <div>
                        <div className='flex justify-between items-center border-b p-3'>
                            <h2 className='text-lg font-medium'>Add article</h2>
                            <button onClick={close}>
                                <XIcon className='size-5 ' />
                            </button>
                        </div>
                        <div className='py-10 px-3 overflow-auto h-[85svh]'>
                            {searchParams.get('next') == 'sections' ?
                                <div>

                                </div>
                                :
                                <div className="px-3 md:px-20 lg:px-32">
                                    <FormProvider {...handleArticleForm}>
                                        <form onSubmit={onSubmit} className="space-y-2">
                                            <div className="space-y-3">
                                                <AddImageFileArticle />
                                                <div>
                                                    <input
                                                        onFocus={() => {
                                                            setEdit(true)
                                                        }}
                                                        placeholder="title..."
                                                        type="text"
                                                        className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md'
                                                        {...register("title", { required: 'Please Enter the title' })}
                                                    />
                                                    <ErrorMsg message={errors?.title?.message} />
                                                </div>
                                                <div>
                                                    <textarea
                                                        onFocus={() => {
                                                            setEdit(true)
                                                        }}
                                                        placeholder="description..."
                                                        type="text"
                                                        className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md min-h-44 max-h-72'
                                                        {...register("description", { required: 'Please Enter the description' })}
                                                    />
                                                    <ErrorMsg message={errors?.description?.message} />
                                                </div>
                                                <SearchBlogCategory />
                                            </div>
                                            <button disabled={loading} className="w-full py-2 flex justify-center bg-blue-500 text-white-White rounded-md">
                                                {loading ?
                                                    <Spinner className={' stroke-gray-600 animate-spin size-4'} />
                                                    :
                                                    "Next"
                                                }
                                            </button>
                                        </form>
                                    </FormProvider>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
            {warning &&
                <div className='fixed top-0 left-0 h-full w-full bg-black-black/70 flex justify-center items-center px-5 z-50'>
                    <div className='bg-white-White px-5 flex flex-col items-center w-72 md:w-96 justify-center rounded-xl'>
                        <div className='text-center py-5'>
                            <h2 className='text-lg font-medium'>Discard Editing?</h2>
                            <p className='text-sm'>If you leave, your edits won&lsquo;t be saved.</p>
                        </div>
                        <button
                            className='font-medium py-2 border-b w-full text-red-500 text-sm'
                            onClick={() => {
                                setWarning(false)
                                setEdit(false)
                                setOpen(false)
                                document.body.style.overflow = 'auto'
                            }} >
                            Discard
                        </button>
                        <button
                            className='font-medium py-2  w-full  text-sm'
                            onClick={() => {
                                setWarning(false)
                            }} >
                            Cancel
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

AddArticle.propTypes = {
    setOpen: PropTypes.func,
}
export default AddArticle