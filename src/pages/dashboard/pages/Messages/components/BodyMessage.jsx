import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { UseAppContext } from '../../../../../context/AppContext';
import clsx from "clsx";
import socket from '../../../../../utils/socket'
import { useDispatch, useSelector } from "react-redux";
import { messagesAction } from "../../../../../redux/actions";

const BodyMessage = () => {
    const [search] = useSearchParams();
    const chatId = search.get('chatId')
    const { user } = UseAppContext();


    useEffect(() => {
        const handleReceivedMessage = (data) => {
            // setMessages((prevMessages) => [...prevMessages, data]);
            dispatch({ type: messagesAction.UPDATE_MESSAGES, payload: data })
        };
        socket.on('msg-receive', handleReceivedMessage);
        return () => {
            socket.off('msg-receive', handleReceivedMessage);
        };
    }, [chatId, dispatch])

    const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: messagesAction.FETCH_MESSAGES_REQUEST, payload: { chatId } })
    }, [dispatch, chatId])
    console.log(messages);

    return (
        <div>
            {
                messages.data ?
                    <div className="space-y-2">
                        {messages.data.map(msg => {
                            return (
                                <div key={msg._id} className={clsx(
                                    'w-full flex',
                                    { 'justify-end': user._id == msg.sender }
                                )}>
                                    <div className={clsx("px-3 py-2 bg-blue-50 max-w-64 rounded-full")}>
                                        {msg.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    : ""
            }
        </div>
    );
};

export default BodyMessage;
