import axios from 'axios';
import Navbar from '../../../components/Navbar'
import { useQuery } from '@tanstack/react-query';
import { DeleteIcon } from '../../../components/icons';

const Cart = () => {
    const { data } = useQuery({
        queryKey: ['cartPage'],
        queryFn: async () => {
            const { data } = await axios.get('/api/store/cart?fields=product,quantity,price,description');
            return data.carts
        }
    })
    console.log(data);
    return (
        <div>
            <Navbar />
            <div className='min-h-svh pcontainer py-10 space-y-3'>
                {data &&
                    data.map(
                        (cart) => {
                            return (
                                <div key={cart._id}>
                                    <div className="flex gap-3">
                                        <div className='w-44 h-44 border bg-black-black/5'>
                                            <img className='w-full h-full object-contain' src={cart.product.imgs[0]} alt="" />
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='text-2xl font-bold'>{cart.product.title}</h1>
                                            <p className='text-xs'>{cart.product.title}</p>
                                            <h1 className=''>Quantity :{cart.quantity}</h1>
                                            <button><DeleteIcon className={'size-4'} /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Cart