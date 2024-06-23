import axios from "axios";
import { useEffect, useState } from "react"
import convetDate from "../../../utils/convertDate";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ChevronDown } from 'lucide-react'
import useCloseOnOutsideClick from "../../../hook/useCloseOnOutsideClick";
import toast from "react-hot-toast";
import { Spinner } from "../../../components/icons";
import { UseAppContext } from '../../../context/AppContext'
const Appointment = () => {
    const [appointment, setAppointment] = useState(null);
    const [loading, setLoading] = useState(false)
    const [openStatus, setOpenStatus] = useState('')
    const statuses = ["pending", "approved", "rejected"]
    const [data, setData] = useState({ status: "", _id: '' })
    const { user } = UseAppContext()

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


    const updateStatus = async () => {
        try {
            setLoading(true)
            await axios.put(`/api/appointment/${data._id}`, {
                status: data.status
            })
            setAppointment((prev) => {
                const appin = prev.map(item => {
                    if (item._id == data._id) {
                        item.status = data.status
                    }
                    return item
                })
                return appin
            })
            setData({ status: "", _id: '' })
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    }

    const eleRef = useCloseOnOutsideClick(() => setOpenStatus(''))
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
                            {data._id && <th scope="col" className="px-6 py-3">
                                action
                            </th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {appointment?.map((item) => {
                            let status = data?._id == item?._id ? data?.status : item?.status
                            return (
                                <tr key={item?._id} className="odd:bg-white even:bg-gray-50 ">
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
                                        <div className="relative flex">
                                            <button
                                                disabled={!(user?.role == 'doctor')}
                                                onClick={() => setOpenStatus(item?._id == openStatus ? "" : item._id)} className="flex gap-2 items-center ">
                                                <div
                                                    className={clsx(
                                                        'w-2 h-2 rounded-full',
                                                        { 'bg-yellow-500': status == 'pending' },
                                                        { 'bg-green-500': status == 'approved' },
                                                        { 'bg-red-500': status == 'rejected' },
                                                    )}
                                                />
                                                <div className="flex items-center gap-1">
                                                    {status}
                                                    {user?.role == 'doctor' && <ChevronDown size={15} />}
                                                </div>
                                            </button>
                                            {
                                                openStatus == item._id &&
                                                <div ref={eleRef} className="absolute top-5 w-28 bg-white-White border rounded-b-md z-50">
                                                    {
                                                        statuses.map(status => (
                                                            <button
                                                                key={status}
                                                                onClick={() => {
                                                                    setData({ status: status, _id: item?._id })
                                                                    setOpenStatus("")
                                                                }}
                                                                className="w-full py-2 flex items-center gap-2 px-3">
                                                                <div
                                                                    className={clsx(
                                                                        'w-2 h-2 rounded-full',
                                                                        { 'bg-yellow-500': status == 'pending' },
                                                                        { 'bg-green-500': status == 'approved' },
                                                                        { 'bg-red-500': status == 'rejected' },
                                                                    )}
                                                                />
                                                                {status}
                                                            </button>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </td>
                                    {
                                        data?._id == item?._id &&
                                        <td className="px-6 py-4 text-xs">
                                            <button onClick={updateStatus} className="text-blue-500 font-medium">
                                                {loading ? <Spinner className={'animate-spin'} /> : "Save"}
                                            </button>
                                        </td>
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointment
