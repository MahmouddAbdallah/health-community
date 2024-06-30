import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar'
import Product from '../components/Product';
import { useQuery } from '@tanstack/react-query';

const Category = () => {
    const { id } = useParams()
    const fetchCategories =
        async () => {
            const { data } = await axios.get(`/api/store/product/${id}/category?fields=imgs,title,description,price`)
            return data
        }


    const { data, isLoading } = useQuery({
        queryKey: ['storeCategory', id],
        queryFn: fetchCategories
    })
    return (
        <div>
            <Navbar />
            <div className='min-h-svh pcontainer py-10'>
                <div className='grid grid-cols-12 sm:gap-5 md:gap-10 lg:gap-5'>
                    {
                        !isLoading && data.products.map((product) => {
                            return (
                                <Product key={product._id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category