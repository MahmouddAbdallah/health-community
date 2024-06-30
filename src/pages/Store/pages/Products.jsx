import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Stars from '../../../components/Stars';
import Pharmacist from './Pharmacist';
import ProductsCategory from '../components/ProductsCategory';


const Products = () => {
    const { id } = useParams();
    const [imgIndex, setImgIndex] = useState(0)

    const fetchProduct = async () => {
        const response = await axios.get(`/api/store/product/${id}`);
        return response.data;
    };

    const { data } = useQuery({
        queryKey: ['product', id],
        queryFn: fetchProduct,
        gcTime: 'Infinity',
    });
    const product = data?.product

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className='min-h-svh pcontainer py-10'>
                {
                    product &&
                    <div>
                        <div className='grid grid-cols-12 lg:gap-10 border-b-2 pb-10'>
                            <div className='col-span-12 lg:col-span-6 '>
                                <div className='flex gap-5 sticky z-50 top-0'>
                                    <div className='flex flex-col'>
                                        {
                                            product.imgs.map((img, i) =>
                                                <button onMouseEnter={
                                                    () => setImgIndex(i)
                                                } className='w-14 h-14 bg-black-black/5 border-gray-400' key={img}>
                                                    <img className="h-full w-full object-contain" src={img} alt="" />
                                                </button>
                                            )
                                        }
                                    </div>
                                    <div className='w-full lg:h-96 bg-black-black/5'>
                                        <img
                                            className='w-full h-full object-contain'
                                            src={product.imgs[imgIndex]}
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6 space-y-4'>
                                <h3 className='text-4xl font-bold'>{product.title}</h3>
                                <p>{product.description}</p>
                                <div>
                                    <h3 className='font-medium'>Price : <span className='text-xl font-bold'>{product.price}</span>$</h3>
                                </div>
                                <div><Stars rate={product.rating} /></div>
                                <Pharmacist id={product.pharmacist} />
                                <div>
                                    <span className="font-medium">
                                        Use to :&nbsp;
                                    </span>
                                    <p className='ml-2 text-sm'>{product.useTo}</p>
                                </div>
                                <div>
                                    <span className="font-medium">
                                        Warning :&nbsp;
                                    </span>
                                    <ul className=' ml-2 mt-2'>
                                        {product.warning.map(item => <li className='text-sm' key={item}>
                                            <div className='flex gap-2'>
                                                <div className='pt-2'>
                                                    <div className='w-2 h-2 rounded-full bg-black-black' />
                                                </div>
                                                {item}
                                            </div>
                                        </li>)}
                                    </ul>
                                </div>
                                <div>
                                    <span className="font-medium">
                                        Ingredient :&nbsp;
                                    </span>
                                    <ul className=' ml-2 mt-2'>
                                        {product.ingredient.map(item => <li className='text-sm' key={item}>
                                            <div className='flex gap-2'>
                                                <div className='pt-2'>
                                                    <div className='w-2 h-2 rounded-full bg-black-black' />
                                                </div>
                                                {item}
                                            </div>
                                        </li>)}
                                    </ul>
                                </div>
                                <div className='flex w-full gap-3 mt-5'>
                                    <button className='w-full py-2 rounded-full bg-blue-500 text-white-White'>Add To Cart</button>
                                    <button className='w-full py-2 rounded-full bg-black-black text-white-White'>Save</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 lg:mt-20'>
                            <ProductsCategory id={product.category} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Products;
