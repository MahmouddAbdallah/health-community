import axios from "axios";
import { useEffect, useState } from "react"
import convetDate from "../../../utils/convertDate";

const Appointment = () => {
    const [appointment, setAppointment] = useState([]);
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
    console.log(appointment);
    return (
        <div className='pcontainer py-10 w-full'>
            <div className="w-full py-2 px-4 rounded-md">
                <div className="flex justify-between">
                    <div className="w-full text-center">
                        <span className="font-medium">
                            Patient
                        </span>
                    </div>
                    <div className="w-full text-center">
                        <span className="font-medium">
                            Date
                        </span>
                    </div>
                    <div className="w-full text-center">
                        <span className="font-medium">
                            Time Slot
                        </span>
                    </div>
                    <div className="w-full text-center">
                        <span className="font-medium">
                            Message
                        </span>
                    </div>
                    <div className="w-full text-center">
                        <span className="font-medium">
                            Status
                        </span>
                    </div>
                </div>
            </div>

            {
                appointment?.map(
                    item => {
                        return (
                            <div key={item._id}>
                                <div className="w-full shadow-md py-2 px-4 rounded-md">
                                    <div className="flex justify-between">
                                        {
                                            item.patient ?
                                                <div className="flex flex-col items-center">
                                                    <img className="w-16 h-16 border rounded-md object-cover" src={item.patient.picture} alt="" />
                                                    <div>
                                                        <h2 className="text-sm font-medium">{item.patient.name}</h2>
                                                    </div>
                                                </div>
                                                : ""
                                        }
                                        <div className="flex flex-col items-center">
                                            <div className="h-full flex items-center">
                                                <span className="text-sm font-medium">
                                                    {convetDate(item.date)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="h-full flex items-center">
                                                <span className="text-sm font-medium">
                                                    {item.timeSlot}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="h-full flex items-center">
                                                <span className="text-sm font-medium">
                                                    {item.noted}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="h-full flex items-center">
                                                <span className="text-sm font-medium">
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Appointment