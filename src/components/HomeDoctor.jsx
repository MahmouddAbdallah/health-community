import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import DoctorsLoading from '../components/loading/DoctorsLoading'
const HomeDoctor = () => {
    const [doctors, setDoctors] = useState(null)
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
            {
                doctors ?
                    <div className='grid grid-cols-12 space-y-10 md:space-y-0 lg:gap-5'>
                        {doctors?.map(doctor => {
                            return (
                                <div
                                    key={doctor._id}
                                    className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'
                                >
                                    <Link
                                        className='block'
                                        to={`/profile/${doctor._id}`}
                                    >
                                        <div className='space-y-3 flex flex-col items-center justify-center'>
                                            <div>
                                                <img src={doctor.picture} alt={doctor.name} className="w-72 h-72 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover rounded-full" />
                                            </div>
                                            <div className='text-center'>
                                                <h5 className="text-lg font-medium">{doctor.name}</h5>
                                                <h5 className="">{doctor.specialization}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    : <DoctorsLoading />
            }
        </div>
    )
}

export default HomeDoctor