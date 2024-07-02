import PropTypes from 'prop-types'
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import clsx from 'clsx'

const Siderbar = ({ userId }) => {
    const chats = useSelector(state => state.chats)
    const { pathname } = useLocation()

    return (
        <div className="border-l">
            <div className="border-b py-3 px-2">
                <h1 className="text-xl font-bold">Chats:</h1>
            </div>
            <div className="w-72 ">
                {
                    chats.data ? chats.data.map(chat => {
                        return (
                            <Link
                                key={chat._id}
                                to={`${pathname}?userId=${chat.user._id}&chatId=${chat._id}&role=${chat.user.role}`}
                                className={clsx(
                                    "block p-2 border-b-2",
                                    { 'bg-blue-500 text-white-White': chat.user._id == userId }
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-black-black/5 bg-black-black/20">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={chat.user.picture || '../person.jpg'}
                                            alt="" />
                                    </div>
                                    <div className="-space-y-4">
                                        <h6 className="font-medium">
                                            {chat.user.name}
                                        </h6>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                        : ""
                }
            </div>
        </div>
    )
}


Siderbar.propTypes = {
    userId: PropTypes.string
}

export default Siderbar