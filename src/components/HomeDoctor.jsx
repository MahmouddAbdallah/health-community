import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const HomeDoctor = () => {
    const [doctors, setDoctors] = useState()
    const fetchDoctors = async () => {
        try {
            const { data } = await axios.get(`/api/doctor?limit=6&fields=name,picture,specialization`)
            setDoctors(data.doctor)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (!doctors) {
            fetchDoctors()
        }
    }, [doctors])
    return (
        <div className="pcontainer py-10 space-y-10">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">Our special doctors</h4>
            <div className='flex gap-5 flex-wrap'>
                {doctors?.map(doctor => {
                    return (
                        <Link
                            key={doctor._id}
                            className='block'
                            to={`/profile/${doctor._id}`}
                        >
                            <div className='space-y-3'>
                                <div>
                                    <img src={doctor.picture} alt={doctor.name} className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover rounded-full" />
                                </div>
                                <div className='text-center'>
                                    <h5 className="text-lg font-medium">{doctor.name}</h5>
                                    <h5 className="">{doctor.specialization}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeDoctor