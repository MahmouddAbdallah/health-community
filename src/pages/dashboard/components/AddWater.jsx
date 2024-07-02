import { useEffect, useState } from 'react'
import glass from '../../../assets/glasses.png'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Loader } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import convetDate from '../../../utils/convertDate'
const AddWater = () => {
    const [amount, setAmount] = useState()
    const [note, setNote] = useState("")
    const [waterLoading, setWaterLoading] = useState(false)
    const [noteLoading, setNoteLoading] = useState(false)
    const [water, setWater] = useState(null)
    const [notesFoodData, setNotesFoodData] = useState(null)

    const addWater = async () => {
        try {
            setWaterLoading(true)
            const { data } = await axios.post('/api/water-add', {
                amount
            })
            setWater((prev) => [...prev, data.water])
            setWaterLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setWaterLoading(false)
            console.error(error);
        }
    }
    const addNote = async () => {
        try {
            setNoteLoading(true)
            const { data } = await axios.post('/api/foodnote-add', {
                note
            })
            setNotesFoodData((prev) => [...prev, data.note])
            setNoteLoading(false)
            setNote("")
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setNoteLoading(false)
            console.error(error);
        }
    }
    const { data } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get('/api/water?fields=amount,createdAt');
            return data.water
        },
        queryKey: ['water'],
    })
    useEffect(() => {
        setWater(data)
    }, [data])

    const notesFood = useQuery({
        queryFn: async () => {
            const { data } = await axios.get('/api/foodnote');
            return data.note
        },
        queryKey: ['notesFood',]
    })
    useEffect(() => {
        setNotesFoodData(notesFood.data)
    }, [notesFood.data])
    return (
        <div>
            <div className='mb-5'>
                <div className='border border-gray-300'>
                    {water && <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                        <thead className="text-xs text-gray-700 whitespace-nowrap uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Water amount
                                </th>
                                <th scope="col" className="px-6 py-3 border-l">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {water?.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td className='px-6 py-2'>
                                            {item?.amount} Cups
                                        </td>
                                        <td className='px-6 py-2 border-l'>
                                            {convetDate(item?.createdAt)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                    {(notesFoodData && notesFoodData?.length) ? <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-5">
                        <thead className="text-xs text-gray-700 whitespace-nowrap uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    note
                                </th>
                                <th scope="col" className="px-6 py-3 border-l">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notesFoodData?.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td className='px-6 py-2'>
                                            {item?.note} Cups
                                        </td>
                                        <td className='px-6 py-2 border-l'>
                                            {convetDate(item?.createdAt)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> : ""}
                </div>
            </div>
            <div className="flex">
                <div className="w-full px-5 space-y-3 border py-5">
                    <h3 className="text-[#00548F] font-semibold text-xl">Water consumption</h3>
                    <div className="flex gap-3">
                        <div>
                            <h6 className='text-lg font-medium'>Today&lsquo;s Water Total</h6>
                            <span>
                                Aim to drink at least 8 cups of water today. You can quick add common sizes or enter a custom amount.
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            {amount ? <span className=" font-bold whitespace-nowrap">
                                {amount} cups
                            </span> : ""}
                            <div>
                                <div className="w-14 overflow-hidden">
                                    <div style={{ marginLeft: amount ? `-${(amount == 1 ? 10 : amount > 4 ? 34 : ((amount - amount / 6)) * 10)}rem` : "0px" }} className="w-[600px] relative">
                                        <img className=' w-full h-full object-contain' src={glass} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h6 className='font-medium'>Quick Add</h6>
                        <div className='space-x-3'>
                            <button onClick={() => setAmount(1)} className='text-blue-700 font-medium border px-2 rounded-md py-1'>1 cup</button>
                            <button onClick={() => setAmount(2)} className='text-blue-700 font-medium border px-2 rounded-md py-1'>2 cup</button>
                            <button onClick={() => setAmount(5)} className='text-blue-700 font-medium border px-2 rounded-md py-1'>5 cup</button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h6 className='font-medium'>Add Custom</h6>
                        <div className="flex gap-5">
                            <input
                                type="number"
                                value={amount}
                                max={10}
                                min={1}
                                className="border border-gray-300 p-2 w-32 outline-none"
                                onChange={(e) => { setAmount(e.target.value > 10 ? 10 : e.target.value) }}
                            />
                            {amount > 1 ? <button onClick={addWater} className="w-full flex justify-center bg-blue-500 text-white-White font-medium py-2 rounded-md">
                                {waterLoading ? <Loader className={'animate-spin'} /> : "Add Today"}
                            </button> : ""}
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 space-y-3 border py-5">
                    <h3 className="text-[#00548F] font-semibold text-xl">Today&apos;s Food Notes?</h3>
                    <textarea
                        value={note}
                        placeholder="I Eat some ........"
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full border border-gray-300 p-2 min-h-44 max-h-52">
                    </textarea>
                    {note ? <button onClick={addNote} className="w-full flex justify-center bg-blue-500 text-white-White font-medium py-2 rounded-md">
                        {noteLoading ? <Loader className={'animate-spin'} /> : "Save note"}
                    </button> : ""}
                </div>
            </div>
        </div>
    )
}

export default AddWater