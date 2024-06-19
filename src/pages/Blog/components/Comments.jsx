import axios from 'axios';
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { Spinner } from '../../../components/icons';
import { useCallback, useEffect, useState } from 'react';
import ImgOrAva from '../../../components/ImgOrAva';
import convetDate from '../../../utils/convertDate';

const Comments = ({ articleId }) => {
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState(null)
    const { register, handleSubmit, formState: { isValid }, reset } = useForm();

    const fetchComments = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/blog/comment/${articleId}`)
                setComments(data.comments)
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }, [articleId]
    )
    useEffect(() => {
        fetchComments()
    }, [fetchComments])

    console.log(comments);

    const addComment = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.post(`/api/blog/comment/${articleId}`,
                {
                    text: formData.text
                })
            setComments((prev) => ([...prev, data.comment]))
            toast.success(data.message)
            reset()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message || 'There is an Error')
            console.log(error);
        }
    })

    return (
        <div className='pt-20 pb-10'>
            <div className='pb-20'>
                <div>
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Comments</h2>
                </div>
                {comments ?
                    <div className=' space-y-10 pt-10'>
                        {comments.map(comment => {
                            return (
                                <div key={comment.createdAt}>
                                    <div className='space-y-3'>
                                        <div className='flex gap-2'>
                                            <ImgOrAva
                                                className={"w-14 h-14"}
                                                img={comment.user.picture}
                                                name={comment.user.name}
                                            />
                                            <div>
                                                <span className='block'>{comment.user.name}</span>
                                                <span className='block'>{convetDate(comment.createdAt)}</span>
                                            </div>
                                        </div>
                                        <p className='tracking-wide font-medium text-[#0000009e]'>
                                            {comment.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    : <div className='pt-10 text-center'>
                        No comments yet
                    </div>
                }
            </div>
            <div>
                <div className='pb-5 space-y-2'>
                    <span className="text-xl font-medium block">
                        Leave a Reply
                    </span>
                    <span className='block'>
                        Your email address will not be published. Required fields are marked *
                    </span>
                </div>
                <form onSubmit={addComment}>
                    <div className="space-y-3">
                        <label >
                            <div className='space-y-2'>
                                <span className='text-'>Comment*</span>
                                <textarea
                                    placeholder='Add Comment...'
                                    className=' w-full py-3 px-5 border-2 focus:border-primary-blue outline-none max-h-44 min-h-[100px]'
                                    {...register('text', { required: "Please Enter the Text" })}>
                                </textarea>
                            </div>
                        </label>
                        <button
                            disabled={(!isValid) || loading}
                            className='w-40 px-3 py-2 bg-blue-500 disabled:bg-blue-300 text-white-White flex justify-center'
                        >
                            {loading ? <Spinner className={'animate-spin'} /> : "Post a comment"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


Comments.propTypes = {
    articleId: PropTypes.string
}

export default Comments