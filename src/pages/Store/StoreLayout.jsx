import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import axios from "axios"
import { useDispatch } from "react-redux"
import { cartAction } from "../../redux/actions"
import { useQuery } from "@tanstack/react-query"

const StoreLayout = () => {
    const dispatch = useDispatch()
    useQuery({
        queryFn: async () => {
            const { data } = await axios.get('/api/store/cart/count')
            dispatch({ type: cartAction.UPDATE_CARTS, payload: data.counts })
            return data.count
        },
        queryKey: ["cart"]
    })
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default StoreLayout