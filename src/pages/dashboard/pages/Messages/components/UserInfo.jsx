import PropTypes from 'prop-types'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserInfo = ({ userId }) => {
    const { data } = useQuery({
        queryKey: ['user', userId],
        queryFn: async () => {
            const { data } = await axios.get(`/api/user/${userId}`)
            return data.user
        }
    })
    return (
        <div className="flex gap-3 px-5 py-1 border-b-2">
            <div className="w-11 h-11 rounded-full overflow-hidden">
                <img src={data?.picture || './person.jpg'} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
                <h3 className="font-medium">{data?.name}</h3>
                <h3 className="text-xs">{data?.role}</h3>
            </div>
        </div>
    )
}

UserInfo.propTypes = {
    userId: PropTypes.string
}

export default UserInfo