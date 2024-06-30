import axios from "axios";
import { useQuery } from '@tanstack/react-query';

import PropTypes from 'prop-types'
import Stars from "../../../components/Stars";
import { Link } from "react-router-dom";

const ProductsCategory = ({ id }) => {
    const fetchCategories =
        async () => {
            const { data } = await axios.get(`/api/store/product/${id}/category?fields=imgs,title,price,rating`)
            return data.products
        }

    const { data } = useQuery({
        queryKey: ['prodcutCate', id],
        queryFn: fetchCategories
    })
    return (
        <div className="flex gap-5">
            {data && data.map(product => {
                return (
                    <Link className="block" to={`/store/product/${product._id}`} key={product._id}>
                        <div className="w-64 space-y-3">
                            <div className="w-64 h-64 flex items-center border border-gray-400 bg-black-black/5">
                                <img className=' object-cover' src={product.imgs[0]} alt={product.title} />
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-semibold text-[#007185]">{product.title}</h1>
                                <div><Stars rate={product.rating} /></div>
                                <p className="font-medium text-lg flex items-start"><span className="text-xs">EGP</span>{product.price}$</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

ProductsCategory.propTypes = {
    id: PropTypes.string
}

export default ProductsCategory