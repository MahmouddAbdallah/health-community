import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Siderbar = () => {
    const [chats, setChats] = useState(null)
    const { pathname } = useLocation()
    const fetchChats = async () => {
        try {
            const { data } = await axios.get('/api/chat');
            setChats(data.chats)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchChats()
    }, [])
    return (
        <div className="w-72 space-y-5 pl-5 border-r pt-3">
            {
                chats ? chats.map(chat => {
                    return (
                        <Link to={`${pathname}?userId=${chat.user._id}&chatId=${chat._id}&role=${chat.user.role}`} className="block" key={chat._id}>
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-black-black/20 bg-black-black/20">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={chat.user.picture || '../person.jpg'}
                                        alt="" />
                                </div>
                                <div className="-space-y-4">
                                    <h6 className="font-medium">
                                        {chat.user.name}
                                    </h6>
                                    <span className="text-xs">
                                        {chat.lastMessage}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                })
                    : ""
            }
        </div>
    )
}

export default Siderbar