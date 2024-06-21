import { useCallback, useEffect, useState } from 'react';
import ErrorMsg from './ErrorMsg';
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast';
import axios from 'axios';
import { sliceText } from '../utils/sliceText'
import useCloseOnOutsideClick from '../hook/useCloseOnOutsideClick';
import { Spinner } from './icons';
import { XIcon } from 'lucide-react';
const SearchBlogCategory = () => {
    const [keyword, setKeyword] = useState('');
    const [able, setAble] = useState(false);
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])

    const { formState: { errors }, setValue } = useFormContext()

    const fetchCategories = useCallback(
        async () => {
            try {
                if (keyword) {
                    setLoading(true)
                    const { data } = await axios.get(`/api/blog/category?keyword=${keyword}&fields=name,img,limit=4`)
                    setCategories(data.categories)
                    setLoading(false)
                } else {
                    setAble(false)
                }
            } catch (error) {
                toast.error(error?.response?.data?.message || 'There is an Error')
                setLoading(false)
                console.error(error);
            }
        }, [keyword]
    )
    useEffect(() => {
        fetchCategories()
    }, [fetchCategories, keyword])

    const refele = useCloseOnOutsideClick(() => {
        setAble(false)
    })
    return (
        <div ref={refele} className='flex relative '>
            <div className='w-full'>
                <div className="w-full relative flex items-center">
                    <input
                        placeholder="category..."
                        type="text"
                        className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md'
                        value={keyword}
                        onChange={(e) => {
                            setAble(true)
                            setKeyword(e.target.value)
                        }}
                    />
                    <div className='absolute right-2'>
                        {loading ?
                            <Spinner className={' stroke-gray-600 animate-spin size-4'} />
                            :
                            <div>
                                {keyword && <button
                                    onClick={() => {
                                        setKeyword('')
                                    }}
                                >
                                    <XIcon className='size-3' />
                                </button>}
                            </div>
                        }
                    </div>
                </div>
                <ErrorMsg message={errors?.category?.message} />
            </div>
            {able &&
                <div className='absolute bottom-10 py-3 px-2 border-2  border-gray-500 bg-white-White w-full max-h-44 overflow-y-auto'>
                    <div>
                        {categories.length ?
                            categories?.map(item => {
                                return (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setValue('categoryId', item._id,)
                                            setKeyword(item.name)
                                            console.log('heloo');
                                        }}
                                        key={item._id}>
                                        <div className='flex items-center gap-3'>
                                            <div className='size-10'>
                                                <img className='w-full h-full rounded-md' src={item.img} alt={item.name} />
                                            </div>
                                            <span>{sliceText(item.name, 30)}</span>
                                        </div>
                                    </button>
                                )
                            })
                            :
                            <div className='text-center'>
                                No Category
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}



export default SearchBlogCategory