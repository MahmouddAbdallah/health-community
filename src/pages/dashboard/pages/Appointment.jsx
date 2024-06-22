import axios from "axios";
import { useEffect, useState } from "react"
import convetDate from "../../../utils/convertDate";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown } from 'lucide-react'

const Appointment = () => {
    const [appointment, setAppointment] = useState(null);
    const [openStatus, setOpenStatus] = useState('')
    const [data, setData] = useState({ status: "", _id: '' })
    const fetchAppointments = async () => {
        try {
            const { data } = await axios.get(`/api/appointment`)
            setAppointment(data.appointments)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (!appointment) {
            fetchAppointments()
        }
    }, [appointment])


    return (
        <div className=' pcontainer py-10 w-full overflow-x-auto'>
            <div className="h-full" >
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 whitespace-nowrap uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                user
                            </th>
                            <th scope="col" className="px-6 py-3">
                                date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time slot
                            </th>
                            <th scope="col" className="px-6 py-3">
                                noted
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment?.map((item) => (
                            <tr key={item._id} className="odd:bg-white even:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap ">
                                    {
                                        item.patient.name ?
                                            <Link target="_blank" to={`/profile/${item.patient._id}`} className="flex gap-2 items-center">
                                                <img className="w-10 h-10 border" src={item.patient.picture} alt="" />
                                                <div >
                                                    <span className="block">{item.patient.name}</span>
                                                    <span className="block">{item.patient.role}</span>
                                                </div>
                                            </Link>
                                            :
                                            <Link target="_blank" to={`/profile/${item.doctor._id}`} className="flex gap-2 items-center">
                                                <img className="w-10 h-10 border" src={item.doctor.picture} alt="" />
                                                <div >
                                                    <span className="block">{item.doctor.name}</span>
                                                    <span className="block">{item.doctor.role}</span>
                                                </div>
                                            </Link>
                                    }
                                </th>
                                <td className="px-6 py-4 text-xs whitespace-nowrap">
                                    {convetDate(item?.date)}
                                </td>
                                <td className="px-6 py-4 text-xs whitespace-nowrap">
                                    {item?.timeSlot}
                                </td>
                                <td className="px-6 py-4 text-xs">
                                    <div className="max-w-44 min-w-28">
                                        {item?.noted}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs">
                                    {/* ["pending", "approved", "rejected"] */}
                                    <div className="relative flex">
                                        <button onClick={() => setOpenStatus(item._id)} className="flex gap-2 items-center ">
                                            <div
                                                className={clsx(
                                                    'w-2 h-2 rounded-full',
                                                    { 'bg-yellow-500': item.status == 'pending' },
                                                    { 'bg-green-500': item.status == 'approved' },
                                                    { 'bg-red-500': item.status == 'rejected' },
                                                )}
                                            />
                                            <div className="flex items-center gap-1">
                                                {item?.status}
                                                <ChevronDown size={15} />
                                            </div>
                                        </button>
                                        {
                                            openStatus == item._id &&
                                            <div className="absolute top-5 w-28 bg-white-White border rounded-b-md z-50">
                                                <button
                                                    onClick={() => {
                                                        setData({ status: "pending", _id: item._id })
                                                        setAppointment((prev) => {
                                                            setAppointment((prev) => {
                                                                const status = 'pending'
                                                                return prev.map((item) => {
                                                                    if (item._id === item._id) {
                                                                        return { ...item, status }
                                                                    }
                                                                })
                                                            })
                                                            return [...prev,]
                                                        })
                                                        setOpenStatus("")
                                                    }}
                                                    className="w-full py-2 flex items-center gap-2 px-3">
                                                    <div>
                                                        <div className='w-2 h-2 rounded-full bg-yellow-500' />
                                                    </div>
                                                    <span>
                                                        pending
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setData({ status: "approved", _id: item._id })
                                                        setAppointment((prev) => {
                                                            setAppointment((prev) => {
                                                                const status = 'approved'
                                                                return prev.map((item) => {
                                                                    if (item._id === item._id) {
                                                                        return { ...item, status }
                                                                    }
                                                                })
                                                            })
                                                            return [...prev,]
                                                        })
                                                        setOpenStatus("")
                                                    }}
                                                    className="w-full py-2 flex items-center gap-2 px-3">
                                                    <div>
                                                        <div className='w-2 h-2 rounded-full bg-green-500' />
                                                    </div>
                                                    <span>
                                                        approved
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setData({ status: "rejected", _id: item._id })
                                                        setAppointment((prev) => {
                                                            setAppointment((prev) => {
                                                                const status = 'rejected'
                                                                return prev.map((item) => {
                                                                    if (item._id === item._id) {
                                                                        return { ...item, status }
                                                                    }
                                                                })
                                                            })
                                                            return [...prev,]
                                                        })
                                                        setOpenStatus("")
                                                    }}
                                                    className="w-full py-2 flex items-center gap-2 px-3">
                                                    <div>
                                                        <div className='w-2 h-2 rounded-full bg-red-500' />
                                                    </div>
                                                    <span>
                                                        rejected
                                                    </span>
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointment