/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { DeleteIcon } from '../../../components/icons'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { sliceText } from '../../../utils/sliceText';
import { Link, useSearchParams } from 'react-router-dom';
import DeleteArticle from '../../../components/DeleteArticle';
import { UseAppContext } from '../../../context/AppContext';
import { EditIcon, PlusIcon } from 'lucide-react';
import AddArticle from '../../../components/AddArticle';
const Articles = ({ userData }) => {
    const [articles, setArticles] = useState([]);
    const [openDele, setOpenDele] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const { user } = UseAppContext();
    const [_, setSearchParams] = useSearchParams()


    const fetchArticles = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/blog/article/user/${userData?._id}?fields=title,img,description`)
                setArticles(data.articles)
            } catch (error) {
                console.error(error);
            }
        }, [userData]
    )
    useEffect(() => {
        if (userData?._id) {
            fetchArticles()
        }
    }, [fetchArticles, userData?._id])
    return (
        <div className='flex flex-col items-center px-5'>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 md:mt-10'>
                <div className="p-3 space-y-3">
                    <div className="flex justify-between items-center">
                        <p className='font-medium'>Articles</p>
                        <button onClick={() => {
                            setOpenAdd(true)
                            document.body.style.overflow = 'hidden'
                        }}>
                            <PlusIcon />
                        </button>
                    </div>
                    <div className='grid gap-5 grid-cols-12'>
                        {
                            (articles.map((article, index) => (
                                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 space-y-2">
                                    <div className='flex relative group duration-300'>
                                        <div className='space-y-3'>
                                            <img src={article.img} alt="" className="w-full h-64 object-cover rounded-md" />
                                            <div>
                                                <span className='block font-medium'>
                                                    {sliceText(article.title, 40)}
                                                </span>
                                                <span className='block text-sm'>
                                                    {sliceText(article.description, 90)}
                                                </span>
                                            </div>
                                        </div>
                                        {
                                            user?._id == userData?._id ?
                                                <div className='absolute w-full h-full bg-black-black rounded-md p-2 hidden group-hover:flex justify-center items-center'>
                                                    <button className="flex gap-2">
                                                        <button onClick={() => {
                                                            setOpenAdd(true)
                                                            setSearchParams(`articleId=${article._id}`)
                                                        }} className=''>
                                                            <EditIcon className='w-8 h-8 stroke-white-White hover:stroke-blue-500 duration-150' />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setOpenDele(true)
                                                            }}
                                                        >
                                                            <DeleteIcon className='w-8 h-8 stroke-white-White hover:stroke-red-500 duration-150' />
                                                        </button>
                                                    </button>
                                                </div>
                                                :
                                                <Link target='_blank' to={`/blog/articles/${article._id}`} className='absolute w-full h-full bg-black-black/50 hidden group-hover:block rounded-md p-2'>
                                                    <p className='text-sm font-medium text-white-White'>
                                                        {sliceText(article.title, 70)}
                                                    </p>
                                                </Link>
                                        }
                                    </div>
                                </div>
                            )))}
                    </div>
                    <div>
                        {
                            !articles?.length &&
                            <p className='text-gray-400 font-medium text-center py-10'>No articles yet</p>
                        }
                    </div>
                </div>
            </div>
            {openDele && <DeleteArticle
                setOpen={setOpenDele}
                handleDelete={() => { }}
            />}
            {openAdd && <AddArticle
                setOpen={setOpenAdd}
                handleDelete={() => { }}
            />}
        </div>
    )
}
Articles.propTypes = {
    userData: PropTypes.object
}

export default Articles