import PropTypes from 'prop-types'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import { XIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'
import { timeSlots } from '../../../utils/timeSlot'
import clsx from 'clsx'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Spinner } from '../../../components/icons'
const BookingAppointment = ({ setOpen, doctorId }) => {
    const close = () => {
        setOpen(false)
        document.body.style.overflow = 'auto'
    }
    const eleRef = useCloseOnOutsideClick(close)
    const [date, setDate] = useState()
    const [timeSlot, setTimeSlot] = useState("");
    const [note, setNote] = useState("")
    const [loading, setLoading] = useState(false)

    const appointment = async () => {
        try {
            if (!doctorId) {
                toast.error('This not doctor')
                close()
            }
            setLoading(true)
            const { data } = await axios.post('/api/appointment', {
                date: date,
                timeSlot: timeSlot,
                doctorId: doctorId,
                noted: note
            })
            toast.success(data.message)
            setLoading(false)
            close()
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    }

    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5'>
            <div ref={eleRef} className='bg-white-White rounded-xl w-full sm:w-96 md:w-[420px] lg:w-[700px]'>
                <div className='flex items-center justify-between px-2 py-2 border-b'>
                    <span className="block font-medium">
                        Book Appointment
                    </span>
                    <button onClick={close}>
                        <XIcon className='w-5 h-5' />
                    </button>
                </div>
                <div className='h-[80vh] overflow-y-scroll lg:h-full lg:overflow-y-auto'>
                    <div className="grid grid-cols-12 px-3">
                        <div className="col-span-12 lg:col-span-6 py-3">
                            <div className='space-y-2'>
                                <span className="block font-medium">Date:</span>
                                <div>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className='space-y-2 pt-3 pl-3'>
                                <span className="block font-medium">Time slots:</span>
                                <div>
                                    <div className='grid gap-2 grid-cols-12 '>
                                        {timeSlots.map((_) => {
                                            return (
                                                <button
                                                    onClick={() => {
                                                        setTimeSlot(_)
                                                    }}
                                                    className={clsx(
                                                        "col-span-4 py-2 border rounded-full",
                                                        { 'bg-blue-500 text-white-White': timeSlot == _ }
                                                    )} key={_}>
                                                    {_}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-5 my-3 space-y-3'>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder='Leave message...'
                            className=' w-full outline-none border-2 focus:border-blue-500 p-1 rounded-md resize-none min-h-20 max-h-44'>
                        </textarea>
                        <button onClick={appointment} className='w-full py-2 rounded-md text-white-White bg-blue-500 flex justify-center'>
                            {loading ? <Spinner className={'animate-spin'} /> : "Booking"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

BookingAppointment.propTypes = {
    setOpen: PropTypes.any,
    doctorId: PropTypes.string
}

export default BookingAppointment