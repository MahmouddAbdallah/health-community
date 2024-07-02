// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import convetDate from '../../../utils/convertDate';
import LikeAndComment from './LikeAndComment';
import { useEffect } from 'react';
const Posts = () => {
    // const [posts, setPosts] = useState(null);
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await axios.get('/api/posts?sort=-createdAt')
            return data.posts
        }
    })
    const addLikes = () => {
        const likes = localStorage.getItem('likes')
        const likesIds = JSON.parse(likes) || []
        if (likesIds?.length) {
            likesIds.forEach(async (element) => {
                try {
                    await axios.put('/api/post/like', {
                        postId: element
                    })
                    const index = likesIds.findIndex((item) => item == element)
                    likesIds.splice(index, 1)
                    localStorage.setItem('likes', JSON.stringify(likesIds))
                } catch (error) {
                    console.error(error);
                }
            })
        }
    }
    useEffect(() => {
        const intervalLikes = setInterval(addLikes, 5000)
        return () => { clearInterval(intervalLikes) }
    }, [])
    return (
        <div className='pt-10 space-y-10'>
            {data &&
                data.map(post => {
                    return (
                        <div key={post}>
                            <div className='space-y-3'>
                                <div className='flex gap-2'>
                                    <div>
                                        <img className='w-14 h-14 rounded-full object-cover' src={post.post.user.picture} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold'>{post.post.user.name}</h1>
                                        <p className='text-sm'>{convetDate(post.post.createdAt)}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold'>{post.post.title}</p>
                                    <p className=''>{post.post.description}</p>
                                </div>
                                <div>
                                    <img
                                        className='w-full'
                                        src={post.post.imgs[0]} alt="" />
                                </div>
                                <div className=''>
                                    <LikeAndComment likes={post.likes} isLike={post.isLike} postId={post.post._id} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts