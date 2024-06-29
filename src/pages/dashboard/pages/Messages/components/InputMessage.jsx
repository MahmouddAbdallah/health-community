import { useForm } from 'react-hook-form';
// import axios from 'axios'
import toast from 'react-hot-toast'
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UseAppContext } from '../../../../../context/AppContext';
import socket from '../../../../../utils/socket'
import { messagesAction } from '../../../../../redux/actions';
import { useDispatch } from 'react-redux';


const InputMessage = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false)
    const [search] = useSearchParams();
    const userId = search.get('userId');
    const role = search.get('role');
    const { user } = UseAppContext();
    const dispatch = useDispatch()

    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.post(`/api/message/${userId}/${role}`, {
                text: formData.message
            })
            socket.emit('send-msg', {
                senderId: user._id,
                receiverId: userId,
                message: data.message
            })
            dispatch({ type: messagesAction.UPDATE_MESSAGES, payload: data.message })
            reset()
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <form onSubmit={onSubmit}>
            <div className='flex items-center gap-3 px-2'>
                <input
                    {...register('message')}
                    type="text"
                    className='w-full outline-none border border-black-black/20'
                    placeholder="Enter your message" />
                <button>
                    {loading ? <Loader className={'animate-spin'} /> : "send"}
                </button>
            </div>
        </form>
    )
}

export default InputMessage