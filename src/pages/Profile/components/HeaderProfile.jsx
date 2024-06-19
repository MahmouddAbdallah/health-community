import InputImgFile from '../../../components/InputImgFile'
import PropTypes from 'prop-types'
import { UseAppContext } from '../../../context/AppContext'
import BioInfo from './BioInfo';
import UpdateBio from './UpdateBio';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const HeaderProfile = ({ userData }) => {
    const { user } = UseAppContext()
    const [open, setOpen] = useState(false)
    const [bio, setBio] = useState(null)

    const fetchBioOfUser = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/bio/${userData?._id}`)
                setBio(data.bio)
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

    return (
        <div className='flex justify-center px-5'>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 md:mt-10 relative'>
                <div className='w-full grid grid-cols-12 p-5  space-y-5 md:space-y-0 md:gap-10'>
                    <div className='col-span-12 md:col-span-4'>
                        <InputImgFile imgUrl={userData?.picture} />
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
                                                {Array(3).fill().map(_ =>
                                                    <div key={_} className='w-[6px] h-[6px] bg-black-black/80 rounded-full' />
                                                )}
                                            </button>
                                        }
                                    </div>
                                </div>
                                <BioInfo bio={bio} specialization={userData?.specialization} />
                            </div>
                            <button className='bg-blue-500 w-fit px-5 py-2 text-white-White rounded-full'>
                                Book appointment
                            </button>
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
                            }}
                            className='flex gap-[3px]'>
                            {Array(3).fill().map(_ =>
                                <div key={_} className='w-[6px] h-[6px] bg-black-black/80 rounded-full' />
                            )}
                        </button>
                    }
                </div>
            </div>
            {open && <UpdateBio setOpen={setOpen} bio={bio} setBio={setBio} />}
        </div >
    )
}

HeaderProfile.propTypes = {
    userData: PropTypes.object
}

export default HeaderProfile