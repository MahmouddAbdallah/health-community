import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_NOTIFICATION_REQUEST, UPDATE_NOTIFICATION } from '../redux/actions'
import convetDate from '../utils/convertDate';
import clsx from 'clsx';
import { ThreeDotsIcon } from './icons';
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Spinner } from './icons'
import { ArrowRightIcon } from 'lucide-react'
import PropTypes from 'prop-types'
const NotificationData = ({ setOpen }) => {
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const notification = useSelector((state) => state.notification);
    useEffect(() => {
        dispatch({ type: FETCH_NOTIFICATION_REQUEST, limit: 10, });
    }, [dispatch])

    const deleteOne = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/notification/${id}`)
            const update = notification.data.filter((not) => {
                return not._id != id
            })
            dispatch({ type: UPDATE_NOTIFICATION, notification: update });
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    }
    const deleteAll = async () => {
        try {
            setLoading(true)
            const { data } = await axios.delete(`/api/notification`)
            dispatch({ type: UPDATE_NOTIFICATION, notification: [] });
            toast.success(data.message)
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    }

    console.log(notification);
    return (
        <div>
            <div className='py-3 flex justify-between md:justify-center border-b-2'>
                <button
                    onClick={deleteAll}
                    className='text-sm font-medium text-red-500 hidden md:block'>
                    Delete All
                </button>
                <div className='flex-1 flex justify-center font-medium md:hidden'>
                    Notification
                </div>
                <button
                    onClick={() => {
                        setOpen(false)
                    }}
                    className='md:hidden'>
                    <ArrowRightIcon />
                </button>
            </div>
            {
                notification?.data?.map((item) => {
                    return (
                        <div key={item._id} className=''>
                            <div className='border-b-2'>
                                <div className=' py-2 px-3 md:px-5 flex justify-between'>
                                    <div className='flex gap-2'>
                                        <img className='h-14 w-14 object-cover rounded-full' src={item?.from?.picture} alt="" />
                                        <div>
                                            <h3 className='text-xs font-medium'>{item?.from?.name}</h3>
                                            <h3 className='text-xs '>{item?.message}</h3>
                                            <div className='flex items-center gap-2'>
                                                <div className={clsx('w-2 h-2 rounded-full', { 'bg-yellow-500': item.status == 'pending' }, { 'bg-green-500': item.status == 'approved' }, { 'bg-red-500': item.status == 'rejected' },)} />
                                                <span className='text-xs'>
                                                    {item.status}
                                                </span>
                                            </div>
                                            <h3 className='text-xs font-medium'>{convetDate(item?.createdAt)}</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => setId(item._id == id ? '' : item._id)}>
                                            <ThreeDotsIcon />
                                        </button>
                                    </div>
                                </div>
                                {id == item?._id &&
                                    <div className='flex justify-center pb-2'>
                                        <button
                                            disabled={loading}
                                            onClick={deleteOne}
                                            className='text-sm text-red-500 font-medium'>
                                            {loading ? <Spinner className={'animate-spin'} /> : "Delete Notification"}
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
NotificationData.propTypes = {
    setOpen: PropTypes.func
}
export default NotificationData