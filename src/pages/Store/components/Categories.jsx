import { Link } from 'react-router-dom'
import axios from 'axios'
import StoreCategoryLoading from '../../../components/loading/StoreCategoryLoading'
import { useQuery } from '@tanstack/react-query'


const Categories = () => {
    const fetchCategories =
        async () => {
            try {
                const { data } = await axios.get('/api/store/category?fields=name,img&sort=createdAt')
                return data.categories
            } catch (error) {
                console.error(error);
            }
        }
    const { data } = useQuery({
        queryKey: ['category'],
        queryFn: fetchCategories,
    })
    return (
        <div className='w-full pcontainer py-10 space-y-10'>
            <div className="">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">Categories:</h4>
            </div>
            <div>
                {
                    data ?
                        <div className="grid grid-cols-12 space-y-5 md:gap-5">
                            {
                                data?.map(item =>
                                    <Link to={`/store/category/${item._id}`} className="block col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2" key={item._id}>
                                        <div className='w-full px-10 space-y-2'>
                                            <img src={item.img} alt={item.name} className='w-full h-full object-contain' />
                                            <p className="text-center font-medium text-sm">{item.name}</p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                        :
                        <StoreCategoryLoading />
                }
            </div>
        </div>
    )
}

export default Categories