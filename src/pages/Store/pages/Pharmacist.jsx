import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Pharmacist = ({ id }) => {
    const { data, } = useQuery({
        queryKey: ['pharmacist', id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/pharmacist/${id}?fields=name,picture,country`)
            return data.pharmacist
        },
        gcTime: 'Infinity'
    })
    return (
        data &&
        <Link className="block" to={`/profile/${id}`}>
            <div className="flex gap-2">
                <div className="w-12 h-12">
                    <img className='rounded-full object-cover w-full h-full' src={data.picture || './person.jpg'} alt="" />
                </div>
                <div>
                    <h3 className="text-sm font-medium">{data.name}</h3>
                    <p className="text-sm font-medium">{data.country}</p>
                </div>
            </div>
        </Link>
    )
}

Pharmacist.propTypes = {
    id: PropTypes.string
}

export default Pharmacist