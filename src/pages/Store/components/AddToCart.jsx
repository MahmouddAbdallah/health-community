import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../../redux/actions'
import axios from 'axios'


const AddToCart = ({ productId, productPrice }) => {
    const dispatch = useDispatch()
    const addToCart = async () => {
        try {
            const { data } = await axios.post('/api/store/cart', { product: productId, quantity: 1, price: productPrice })
            dispatch({ type: cartAction.ADD_CART, payload: data.count })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <button onClick={
            addToCart
        } className='w-full py-2 rounded-full bg-blue-500 text-white-White'>Add To Cart</button>
    )
}

AddToCart.propTypes = {
    productId: PropTypes.string,
    productPrice: PropTypes.string
}

export default AddToCart