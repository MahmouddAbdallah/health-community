import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { UseAppContext } from '../../../../../context/AppContext';
import clsx from "clsx";
import socket from '../../../../../utils/socket'
import { useDispatch, useSelector } from "react-redux";
import { messagesAction } from "../../../../../redux/actions";

const BodyMessage = () => {
    const [search] = useSearchParams();
    const chatId = search.get('chatId');
    const { user } = UseAppContext();
    const dispatch = useDispatch();
    const chatRef = useRef(null);

    useEffect(() => {
        const handleReceivedMessage = (data) => {
            dispatch({ type: messagesAction.UPDATE_MESSAGES, payload: data });
        };
        socket.on('msg-receive', handleReceivedMessage);
        return () => {
            socket.off('msg-receive', handleReceivedMessage);
        };
    }, [chatId, dispatch]);

    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        dispatch({ type: messagesAction.FETCH_MESSAGES_REQUEST, payload: { chatId, limit: 10 } });
    }, [dispatch, chatId]);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="lg:max-h-[calc(100svh-48px)] overflow-auto" ref={chatRef}>
            <div className="px-5 py-2">
                {messages.data && (
                    <div className="space-y-2">
                        {messages.data.map((msg) => (
                            <div
                                key={msg._id}
                                className={clsx(
                                    'w-full flex',
                                    { 'justify-end': user?._id === msg.sender }
                                )}
                            >
                                <div className={clsx(
                                    "px-4 py-2  max-w-64 rounded-full",
                                    { 'bg-blue-500 text-white-White': user?._id !== msg.sender },
                                    { 'bg-blue-100': user?._id === msg.sender }
                                )}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BodyMessage;
