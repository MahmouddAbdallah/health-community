import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Doctor = () => {
    const { data } = useQuery({
        queryKey: ["community"],
        queryFn: async () => {
            const { data } = await axios.get("/api/doctor?limit=6&fields=name,picture,specialization")
            return data.doctor
        }
    })
    return (
        <div>
            <div className='py-2'>
                <h1 className='font-semibold text-xl'>Doctors:</h1>
            </div>
            <div className='space-y-3'>
                {data?.map((item) => (
                    <Link
                        className='block'
                        to={`/profile/${item._id}`}
                        key={item._id}
                    >
                        <div className='flex gap-2'>
                            <div className='w-20 h-20'>
                                <img src={item.picture} alt="" className='w-full h-full object-cover rounded-lg' />
                            </div>
                            <div>
                                <h3 className='font-medium'>{item.name}</h3>
                                <h3 className=''>{item.specialization}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Doctor