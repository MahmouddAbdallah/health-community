import PropTypes from 'prop-types'
import { useState } from 'react';
import { sliceText } from '../../../utils/sliceText'
import { ShoppingCartIcon, Bookmark } from 'lucide-react'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className='col-span-12 sm:col-span-6 lg:col-span-3 mt-5 sm:mt-0 shadow-sm' key={product._id}>
            <div className="px-3 border rounded-xl py-5">
                <Link to={`/store/product/${product._id}`} className='block h-60 border border-gray-300'>
                    <img
                        src={product.imgs[imgIndex]}
                        alt={product.title}
                        className='w-full h-full object-contain'
                    />
                </Link>
                <div className="mt-3 space-x-2">
                    {
                        product.imgs.map((img, i) => {
                            return (
                                <button onClick={
                                    () => setImgIndex(i)
                                } className='w-14 h-14 bg-black-black/5 border-gray-400' key={img}>
                                    <img className="h-full w-full object-contain" src={img} alt="" />
                                </button>
                            )
                        })
                    }
                </div>
                <div className='space-y-1'>
                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                    <p className='font-medium'>price : {product.price}$</p>
                    <p className='text-sm'>{sliceText(product.description, 80)}</p>
                </div>
                <div className="flex w-full gap-3 mt-5">
                    <Link to={`/store/product/${product._id}`} className=" w-full rounded-full text-white-White bg-blue-500 p-2">
                        <div className='flex justify-center relative'>
                            <div className='absolute left-3 lg:hidden'>
                                <ShoppingCartIcon className='size-6' />
                            </div>
                            <div>
                                Add Cart
                            </div>
                        </div>
                    </Link>
                    <button className=" w-full rounded-full text-white-White bg-black-black p-2">
                        <div className='flex justify-center relative'>
                            <div className='absolute left-3 lg:hidden'>
                                <Bookmark className='size-6' />
                            </div>
                            <div>
                                Save
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.any
}

export default Product