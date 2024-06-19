import { useCallback, useEffect, useRef, useState } from 'react'
import { CameraIcon } from './icons'
import { Spinner } from '../components/icons';
import ImgOrAva from './ImgOrAva';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UseAppContext } from '../context/AppContext';

const InputImgFile = () => {
    const [img, setImg] = useState('')
    const [imgFile, setImgFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const { user, setUser } = UseAppContext()
    const inputFileRef = useRef();
    const btnRef = useRef();
    const [open, setOpen] = useState(false)

    const uploadImg = useCallback(
        async () => {
            try {
                setOpen(false)
                document.body.style.overflow = 'auto'
                setLoading(true)
                const formData = new FormData()
                formData.append('picture', imgFile);
                const { data } = await axios.put(`/api/${user.role}`, formData)
                setUser((prev) => ({ ...prev, picture: data.user.picture }))
                setLoading(false)
                URL.revokeObjectURL(img)
                setImg("")
                setImgFile(null)
            } catch (error) {
                toast.error(error?.response?.data?.message || 'There is an Error')
                setLoading(false)
                console.error(error);
            }
        }, [img, imgFile, setUser, user.role]
    )

    useEffect(() => {
        if (img) {
            uploadImg()
        }
    }, [img])

    useEffect(() => {
        const btn = btnRef.current;
        const input = inputFileRef.current;
        const clickInputFile = () => {
            input.click();
        }
        btn.addEventListener('click', clickInputFile);
        return () => {
            btn.removeEventListener('click', clickInputFile)
        }
    }, [])

    return (
        <div>
            <div className="relative flex justify-center items-center group duration-200">
                <ImgOrAva
                    className={'w-40 h-40 text-2xl'}
                    img={img ? img : user.picture}
                    name={user.name}
                    color={'bg-blue-400'}
                />
                {loading ?
                    <div className='absolute w-full h-full rounded-full flex justify-center items-center'>
                        <Spinner className={'animate-spin stroke-white-White fill-transparent w-10 h-10'} />
                    </div>
                    :
                    <div className={"absolute invisible group-hover:visible w-full h-full rounded-full bg-gray-800/20"}>
                        <button onClick={() => {
                            setOpen(true)
                            document.body.style.overflow = 'hidden'
                        }} className='w-full h-full flex items-center justify-center'>
                            <CameraIcon className={'w-10 h-10'} />
                        </button>
                        <input ref={inputFileRef} type="file" className='hidden'
                            onChange={(e) => {
                                console.log('hello');
                                const file = e.target.files[0];
                                setImg(URL.createObjectURL(file))
                                setImgFile(file)
                            }} />
                    </div>
                }
            </div>
            <div className={`fixed w-full h-full top-0 left-0 bg-gray-900/30 ${open ? 'flex' : "hidden"} items-center justify-center px-5 `}>
                <div onClick={() => {
                    setOpen(false)
                    document.body.style.overflow = 'auto'
                }} className='absolute w-full h-full' />
                <div className='bg-white-White w-full sm:w-96 md:w-[450px] rounded-md z-50'>
                    <button ref={btnRef} className='py-4 w-full border-b-2'>
                        Upload new Image
                    </button>
                    <button className='py-4 w-full text-red-600 border-b-2'>
                        Delete current Image
                    </button>
                    <button onClick={() => {
                        setOpen(false)
                        document.body.style.overflow = 'auto'
                    }} className='py-4 w-full'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputImgFile