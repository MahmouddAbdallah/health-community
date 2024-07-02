import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Users = () => {
    const users = useSelector(state => state.search.data.user)
    console.log(users);
    return (
        <div className="py-5">
            <div className="pb-3 font-medium">
                <h3>Users:</h3>
            </div>
            <div className="flex flex-col gap-5">
                {
                    users?.map((user) => {
                        return (
                            <Link key={user._id} to={`/profile/${user._id}`}>
                                <div className="flex gap-3">
                                    <div className="w-28 h-28 bg-black-black/20 rounded-xl overflow-hidden border border-black-black/30">
                                        <img className="w-full h-full  object-contain" src={user.picture || './person.jpg'} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-1 group-hover:text-blue-600 group-hover:underline">
                                        <h2 className="font-semibold whitespace-nowrap">{user.name}</h2>
                                        <div className="flex gap-2 text-xs">
                                            <span className="font-medium uppercase">{user.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users