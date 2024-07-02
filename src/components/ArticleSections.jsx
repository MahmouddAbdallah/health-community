import PropTypes from 'prop-types'
import { PlusIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddImageFileArticle from './AddImageFileArticle';
import { useForm, FormProvider } from 'react-hook-form'
import ErrorMsg from './ErrorMsg';
import SearchBlogCategory from './SearchBlogCategory';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Spinner } from './icons';

const ArticleSections = ({ articleId }) => {
    const [loading, setLoading] = useState(false)
    const { data } = useQuery({
        queryKey: 'blogCategory',
        queryFn: async () => {
            const { data } = await axios.get(`/api/blog/article/sections/${articleId}`)
            return data.sections
        }
    })
    const [open, setOpen] = useState()
    const handleArticleForm = useForm()
    const { handleSubmit, register, formState: { errors } } = handleArticleForm;
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
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error);
            toast.error(error?.response?.data?.message || 'There is an Error')
        }
    })
    return (
        <div>
            {!open ? <div className="w-full">
                <div>{data.map(item => {
                    return (
                        <div key={item._id} className='w-full'>
                            <div className='w-full border-y py-2 flex justify-center'>
                                {item.name}
                            </div>
                        </div>
                    )
                })}</div>
                <button onClick={() => setOpen(true)} className='w-full border-y py-2 flex justify-center'>
                    <PlusIcon /> Add section
                </button>
            </div>
                :
                <div>Add section:
                    <FormProvider {...handleArticleForm}>
                        <form onSubmit={onSubmit} className="space-y-2">
                            <div className="space-y-3">
                                <AddImageFileArticle />
                                <div>
                                    <input
                                        placeholder="title..."
                                        type="text"
                                        className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md'
                                        {...register("title", {
                                            required: 'Please Enter the title',
                                        })}
                                    />
                                    <ErrorMsg message={errors?.title?.message} />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="description..."
                                        type="text"
                                        className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md min-h-44 max-h-72'
                                        {...register("description", {
                                            required: 'Please Enter the description',
                                        })}
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
    )
}

ArticleSections.propTypes = {
    articleId: PropTypes.string
}

export default ArticleSections