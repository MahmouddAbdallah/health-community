import PropTypes from 'prop-types'
import { ThumbsUp, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const LikeAndComment = ({ isLike, likes, postId }) => {
    const [like, setLike] = useState(isLike)
    const [likesCount, setLikesCount] = useState(likes)
    const addLike = () => {
        const likes = JSON.parse(localStorage.getItem('likes')) || [];
        const index = likes.findIndex(i => i == postId);
        setLikesCount(prev => isLike ? prev - 1 : prev + 1)
        setLike(prev => prev ? 0 : 1);
        if (index !== -1) {
            likes.splice(index, 1);
        } else {
            likes.push(postId);
        }
        localStorage.setItem('likes', JSON.stringify(likes));
    }

    return (
        <div className='space-y-2 border'>
            {likesCount ?
                <div className='px-2 py-1'>
                    {likesCount} likes
                </div> : ""}
            <div className='flex'>
                <button className='w-full flex justify-center  py-2' onClick={addLike}>
                    <ThumbsUp size={20} className={`${like ? 'fill-blue-500 stroke-blue-500' : ""}`} />
                </button >
                <button className='w-full flex justify-center py-2' >
                    <MessageSquare size={20} />
                </button >

            </div>
        </div>
    )
}

LikeAndComment.propTypes = {
    isLike: PropTypes.any,
    likes: PropTypes.any,
    postId: PropTypes.any
}

export default LikeAndComment