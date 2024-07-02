import { useSearchParams } from 'react-router-dom';
import BodyMessage from './components/BodyMessage'
import InputMessage from './components/InputMessage'
import Siderbar from './components/Siderbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { chatsAction } from '../../../../redux/actions';

const Messages = () => {
    const [search] = useSearchParams();
    const dispatch = useDispatch()

    const userId = search.get('userId')
    useEffect(() => {
        dispatch({ type: chatsAction.FETCH_MESSAGES_REQUEST })
    }, [dispatch])
    return (
        <div className='flex h-[calc(100svh-64px)] lg:h-[calc(100svh-1px)] border-t'>
            <div className='flex-1 h-[calc(100svh-64px)] overflow-auto lg:h-[calc(100svh-1px)] flex flex-col justify-between'>
                {userId ?
                    <>
                        <BodyMessage />
                        <InputMessage />
                    </> :
                    <div className='w-full h-full flex justify-center items-center'>
                        Select Chat
                    </div>
                }
            </div>
            <Siderbar userId={userId} />
        </div>
    )
}

export default Messages