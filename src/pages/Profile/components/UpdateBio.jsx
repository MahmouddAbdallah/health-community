import PropTypes from 'prop-types'
import useCloseOnOutsideClick from '../../../hook/useCloseOnOutsideClick'
import { useForm } from 'react-hook-form'
import { FacebookIcon, InstaIcon, Spinner, TwitterIcon } from '../../../components/icons'
import { Linkedin, XIcon } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const UpdateBio = ({ setOpen, bio, setBio }) => {
    const { register, handleSubmit } = useForm()
    const [edit, setEdit] = useState(true)
    const [loading, setLoading] = useState(false)

    const close = () => {
        setOpen(false)
        document.body.style.overflow = 'auto'
    }
    const eleRef = useCloseOnOutsideClick(close)
    const platforms = [
        {
            icon: <div className='absolute left-3 w-5 h-5 flex items-center justify-center bg-gray-400 peer-focus:bg-blue-600 rounded-full'>
                <FacebookIcon className={'fill-white-White w-3 h-3'} />
            </div>,
            name: "facebook",
            value: "socialMedia.facebook",
        },
        {
            icon: <div className='absolute left-3 w-5 h-5 flex items-center justify-center bg-gray-400 peer-focus:bg-pink-600 rounded-full'>
                <InstaIcon className={'fill-white-White w-3 h-3'} />
            </div>,
            name: "instagram",
            value: "socialMedia.instagram",
        },
        {
            icon: <div className='absolute left-3 w-5 h-5 flex items-center justify-center bg-gray-400 peer-focus:bg-black-black rounded-full'>
                <TwitterIcon className={'fill-white-White stroke-white-White w-3 h-3'} />
            </div>,
            name: "x",
            value: "socialMedia.x",
        },
        {
            icon: <div className='absolute left-3 w-5 h-5 flex items-center justify-center bg-gray-400 peer-focus:bg-blue-400 rounded-full'>
                <Linkedin className={'fill-white-White w-3 h-3'} />
            </div>,
            name: "linked in",
            value: "socialMedia.linked in",
        },
    ]
    const socialMedia = bio?.socialMedia;
    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            let socialMedia = [];
            Object.keys(formData.socialMedia).forEach(ele => {
                if (formData.socialMedia[ele]) {
                    socialMedia.push({
                        platform: ele,
                        link: formData.socialMedia[ele]
                    })
                }
            })
            const { data } = await axios.put('/api/bio', {
                experience: formData.experience,
                location: formData.location,
                socialMedia,
                aboutme: formData.aboutme
            })
            toast.success(data.message)
            setBio(data.bio)
            setLoading(false)
            close()
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-black-black/50 flex justify-center items-center px-5'>
            <div ref={eleRef} className='bg-white-White rounded-xl w-full sm:w-96 md:w-[420px] lg:w-[500px]'>
                <div className='flex items-center justify-between px-2 py-2 border-b'>
                    <span className="block">
                        Bio
                    </span>
                    <button onClick={close}>
                        <XIcon className='w-5 h-5' />
                    </button>
                </div>
                <form onSubmit={onSubmit} className='space-y-2 py-3 px-2'>
                    <label className='w-full block space-y-2'>
                        <span className='font-medium'>Experience:</span>
                        <textarea
                            disabled={edit}
                            className='w-full border focus:border-blue-500 px-2 py-1 rounded-md outline-none max-h-44 '
                            {...register(
                                'experience', {
                                value: bio?.experience,
                            }
                            )}
                        />
                    </label>
                    <label className='w-full block space-y-2'>
                        <span className='font-medium'>Location:</span>
                        <textarea
                            disabled={edit}
                            className='w-full border focus:border-blue-500 px-2 py-1 rounded-md outline-none max-h-44 '
                            {...register(
                                'location', {
                                value: bio?.location,
                            }
                            )}
                        />
                    </label>
                    <label className='w-full block space-y-2'>
                        <span className='font-medium'>About me:</span>
                        <textarea
                            disabled={edit}
                            className='w-full border focus:border-blue-500 px-2 py-1 rounded-md outline-none max-h-44 '
                            {...register(
                                'aboutme', {
                                value: bio?.aboutme,
                            }
                            )}
                        />
                    </label>
                    <div className='space-y-2'>
                        <span className='font-medium block'>Social media:</span>
                        <div className='space-y-2'>
                            {
                                platforms.map(item => {
                                    return (
                                        <div key={item.name} className='relative flex items-center'>
                                            <input
                                                disabled={edit}
                                                type="text"
                                                placeholder={item.name}
                                                {...register(
                                                    item.value,
                                                    {
                                                        value: socialMedia?.find(ele => ele.platform == item.name)?.link,
                                                    }
                                                )}
                                                className='w-full border focus:border-blue-500 pl-10 pr-2 py-1 rounded-md outline-none peer'
                                            />
                                            {item.icon}
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="pt-2">
                        {
                            edit ?
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setEdit(!edit)
                                }} className='w-full bg-blue-400 text-white-White font-medium py-2 rounded-md'>
                                    Edit
                                </button>
                                :
                                <button
                                    disabled={loading}
                                    className='w-full bg-blue-500 disabled:bg-blue-300 text-white-White font-medium py-2 rounded-md flex justify-center'>
                                    {loading ? <Spinner className={'animate-spin'} /> : "Save"}
                                </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

UpdateBio.propTypes = {
    setOpen: PropTypes.any,
    bio: PropTypes.any,
    setBio: PropTypes.func
}

export default UpdateBio