import InputImgFile from '../../../components/InputImgFile'
import PropTypes from 'prop-types'
import { UseAppContext } from '../../../context/AppContext'
import BioInfo from './BioInfo';
import UpdateBio from './UpdateBio';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import BookingAppointment from './BookingAppointment';
import { ThreeDotsIcon } from '../../../components/icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const HeaderProfile = ({ userData }) => {
    const { user } = UseAppContext()
    const [open, setOpen] = useState(false)
    const [bio, setBio] = useState(null)
    const [openAppointment, setOpenAppointment] = useState(false)

    const fetchBioOfUser = useCallback(
        async () => {
            try {
                if (userData?._id) {
                    const { data } = await axios.get(`/api/bio/${userData?._id}`)
                    setBio(data.bio)
                }
            } catch (error) {
                console.error(error);
            }
        }, [userData]
    )
    useEffect(() => {
        if (!bio) {
            fetchBioOfUser()
        }
    }, [bio, fetchBioOfUser])

    const { data } = useQuery({
        queryKey: ['followerNumbers'],
        queryFn: async () => {
            const { data } = await axios.get(`/api/follow?userId=${userData?._id}`)
            return data.followNumber
        }
    })
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(data)
    }, [data])
    const addFollow = async () => {
        try {
            const { data } = await axios.post("/api/follow", { followerId: userData?._id, followerType: userData.role })
            setCount(data.follow ? count + 1 : count - 1)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex flex-col items-center px-5'>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 md:mt-10'>
                <div className="p-3 space-x-2">
                    <div className='flex items-center justify-between'>
                        <p className='font-medium'>{count} Following</p>
                        <button onClick={addFollow} className='font-medium text-blue-500'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 relative'>
                <div className='w-full grid grid-cols-12 p-5  space-y-5 md:space-y-0 md:gap-10'>
                    <div className='col-span-12 md:col-span-4'>
                        <InputImgFile imgUrl={userData?.picture} userId={userData?._id} />
                    </div>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='h-full flex flex-col gap-3 justify-between'>
                            <div className='space-y-5'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-xl md:text-2xl lg:text-4xl font-bold'>{userData?.name}</h3>
                                    <div className='lg:hidden'>
                                        {
                                            user?._id == userData?._id &&
                                            <button
                                                onClick={() => {
                                                    setOpen(!open)
                                                    document.body.style.overflow = "hidden"
                                                }}
                                                className='flex gap-[3px]'>
                                                <ThreeDotsIcon />
                                            </button>
                                        }
                                    </div>
                                </div>
                                <BioInfo bio={bio} specialization={userData?.specialization} />
                            </div>
                            {userData?._id != user?._id &&
                                <div className='flex gap-3'>
                                    {userData?.role == 'doctor' && <button
                                        key={'btn'}
                                        onClick={() => {
                                            setOpenAppointment(!openAppointment)
                                            document.body.style.overflow = "hidden"
                                        }}
                                        className='bg-blue-500 w-fit px-5 py-2 text-white-White rounded-full'>
                                        Book appointment
                                    </button>}
                                    <Link to={`/dashboard/messages?userId=${userData?._id}&role=${userData?.role}`}
                                        className='bg-black-black w-fit px-5 py-2 text-white-White rounded-full'>
                                        Message
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block absolute top-4 right-4'>
                    {
                        user?._id == userData?._id &&
                        <button
                            onClick={() => {
                                setOpen(!open)
                                document.body.style.overflow = "hidden"
                            }}>
                            <ThreeDotsIcon />
                        </button>
                    }
                </div>
            </div>
            {bio?.aboutme &&
                <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 md:mt-10 relative'>
                    <div className="p-3">
                        <span className="font-medium text-lg block">
                            About me:
                        </span>
                        <span className=''>
                            {bio?.aboutme}
                        </span>
                    </div>
                </div>
            }
            {open && <UpdateBio setOpen={setOpen} bio={bio} setBio={setBio} />}
            {openAppointment && <BookingAppointment setOpen={setOpenAppointment} doctorId={userData?.role == 'doctor' ? userData._id : ""} />}
        </div >
    )
}

HeaderProfile.propTypes = {
    userData: PropTypes.object
}

export default HeaderProfile