import axios from 'axios';
import { PlusIcon, XIcon } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types'
import { Spinner } from '../../../components/icons';
import ShowCertification from './ShowCertification';
import { useSearchParams } from 'react-router-dom'


const Certification = ({ userData }) => {
    const [images, setImages] = useState([]);
    const [imageSelect, setImageSelect] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cer, setCer] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const indexImg = searchParams.get('index')

    const inputFileRef = useRef();
    const btnRef = useRef()

    useEffect(() => {
        const btn = btnRef.current;
        const input = inputFileRef.current;
        const clickInputFile = () => {
            input.click();
        }
        btn?.addEventListener('click', clickInputFile);
        return () => {
            btn?.removeEventListener('click', clickInputFile)
        }
    }, [])

    const handleImagesFile = (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i])
            reader.onload = (event) => {
                setImages((prev) => [...prev, event.target.result]);
                setImageSelect((prev) => [...prev, files[i]])
            }
        }
    }
    const uploadCertifications = async () => {
        try {
            setLoading(true)
            const formData = new FormData();
            imageSelect.forEach((file) => {
                formData.append("imgs", file)
            })
            const { data } = await axios.put(`/api/certification`, formData);
            setCer(data.certification.imgs)
            setImages([])
            setLoading(false)
            toast.success(data.message);
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    }
    const fetchCertification = useCallback(
        async () => {
            try {
                if (!userData?._id) return ""
                const { data } = await axios.get(`/api/certification/${userData?._id}`)
                setCer(data.certification.imgs)
            } catch (error) {
                console.error(error);
            }
        }, [userData]
    )
    useEffect(() => {
        if (!cer.length) {
            fetchCertification()
        }
    }, [fetchCertification])

    return (
        <div className='flex flex-col items-center px-5'>
            <div className='w-full md:w-[768px] lg:w-[900px] xl:w-[1000px] rounded-lg border-2 mt-5 md:mt-10'>
                <div className="p-3 space-y-2">
                    <div className="flex justify-between items-center">
                        <p className='font-medium'>Certification</p>
                        {images.length ? <button disabled={loading} onClick={uploadCertifications} className='text-blue-500'>
                            {loading ? <Spinner className={'animate-spin'} /> : "Upload"}
                        </button> : ""}
                    </div>
                    <div className='flex gap-2'>
                        {(images.length || cer?.length) ? "" :
                            <button ref={btnRef} className='flex justify-center items-center h-52 w-52 rounded-lg bg-black-black/5'>
                                <PlusIcon />
                                <input ref={inputFileRef} multiple className='hidden' type="file" onChange={handleImagesFile} />
                            </button>
                        }
                        {
                            cer?.map((item, i) =>
                                <button onClick={() => {
                                    setSearchParams(`index=${i}`)
                                    document.body.style.overflow = 'hidden'
                                }} key={item} className='h-52 w-52 rounded-lg' >
                                    <img src={item} className='w-full h-full object-cover border' alt="" />
                                </button>
                            )
                        }
                        {images.map((item, i) => {
                            return (
                                <div key={item} className='h-52 w-52 rounded-lg relative group' >
                                    <img src={item} className='w-full h-full object-cover border' alt="" />
                                    <button
                                        onClick={() => {
                                            setImages((prev) => {
                                                const newArr = prev.filter((_, index) => index !== i);
                                                return newArr;
                                            });
                                            setImageSelect((prev) => {
                                                const newArr = prev?.filter((_, index) => index !== i);
                                                return newArr;
                                            });
                                        }}
                                        className='absolute top-2 right-2 hidden group-hover:block'>
                                        <XIcon />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {(indexImg || indexImg == 0) &&
                <ShowCertification indexImg={indexImg} imgs={cer} />
            }
        </div >
    )
}
Certification.propTypes = {
    userData: PropTypes.object
}
export default Certification