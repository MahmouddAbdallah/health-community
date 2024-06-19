import PropTypes from 'prop-types'
import { ExperienceIcon, FacebookIcon, InstaIcon, LocationIcon, TwitterIcon } from '../../../components/icons'
import { Link } from 'react-router-dom'
import { LinkedinIcon } from 'lucide-react'

const BioInfo = ({ specialization, bio }) => {

    const platforms = [
        {
            icon: <div className='w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full'>
                <FacebookIcon className={'fill-white-White w-5 h-5'} />
            </div>,
            name: "facebook",
        },
        {
            icon: <div className='w-10 h-10 flex items-center justify-center bg-pink-600 rounded-full'>
                <InstaIcon className={'fill-white-White w-5 h-5'} />
            </div>,
            name: "instagram",
        },
        {
            icon: <div className='w-10 h-10 flex items-center justify-center bg-black-black rounded-full'>
                <TwitterIcon className={'stroke-white-White fill-white-White w-5 h-5'} />
            </div>,
            name: "x",
        },
        {
            icon: <div className='w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full'>
                <LinkedinIcon className={'stroke-white-White fill-white-White w-5 h-5'} />
            </div>,
            name: "linked in",
        },
    ]
    return (
        <div className='mt-2'>
            <div className='space-y-2'>
                <div className='space-y-2'>
                    <div className='flex items-start gap-3'>
                        <ExperienceIcon className={'w-7 h-7 fill-black-black'} />
                        {bio?.experience}
                    </div>
                    <div className='flex items-start gap-3'>
                        <LocationIcon className={'w-7 h-7 fill-black-black stroke-none'} />
                        {bio?.location}
                    </div>
                </div>
                <div className='space-y-3'>
                    <div className='bg-blue-50 text-blue-500 w-fit px-5 text-sm font-medium py-2 rounded-full'>
                        {specialization}
                    </div>
                    <div className='flex gap-3'>
                        {bio?.socialMedia.map((item) => {
                            return (
                                <Link hrefLang='en' target='_blank' to={item.link.startsWith("www.") || item.link.startsWith('http') ? item.link : "https://www." + item?.link} key={item?._id} className='block'>
                                    {
                                        platforms.find((platform) => platform.name === item.platform)?.icon
                                    }
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

BioInfo.propTypes = {
    userId: PropTypes.string,
    specialization: PropTypes.string,
    bio: PropTypes.any
}

export default BioInfo