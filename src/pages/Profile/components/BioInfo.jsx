import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
// import toast from 'react-hot-toast'
import { ExperienceIcon } from '../../../components/icons'

const BioInfo = ({ userId }) => {
    const [bio, setBio] = useState(null)

    const fetchBioOfUser = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/bio/${userId}`)
                setBio(data.bio)
            } catch (error) {
                // toast.error(error?.response?.data?.message || 'There is an Error')
                // setLoading(false)
                console.error(error);
            }
        }, [userId]
    )
    useEffect(() => {
        if (!bio) {
            fetchBioOfUser()
        }
    }, [bio, fetchBioOfUser])

    return (
        <div className='mt-2'>
            <div className='flex items-center gap-3'>
                <ExperienceIcon className={'w-7 h-7 fill-black-black'} />
                {bio?.experience}
            </div>
        </div>
    )
}

BioInfo.propTypes = {
    userId: PropTypes.string
}

export default BioInfo