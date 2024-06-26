import { PlusIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx'
import PropTypes from 'prop-types'

const UploadImg = ({ setImageSelect }) => {
    const [images, setImages] = useState([]);
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
    return (
        <div className="flex justify-center">
            <div className={clsx(
                { 'hidden': images.length }
            )}>
                <>
                    <button ref={btnRef} className='flex justify-center items-center h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-lg bg-black-black/5'>
                        <PlusIcon />
                    </button>
                    <input ref={inputFileRef} multiple className='hidden' type="file" onChange={handleImagesFile} />
                </>
            </div>
            <div className={clsx(
                "flex w-[400px]",
                { 'hidden': !images.length }
            )}>
                <div className="relative flex justify-center h-[400px]">
                    {images.map((item, i) => {
                        return (
                            <div
                                key={item}
                                style={{
                                    left: i * 25,
                                    bottom: i * 5
                                }}
                                className="absolute "
                            >
                                <div className="relative group">
                                    <div
                                        onClick={() => {
                                            setImages((prev) => {
                                                const newArr = prev.filter(ele => ele != item)
                                                newArr.push(item)
                                                return newArr
                                            });
                                        }}
                                    >
                                        <div className=' h-[350px] sm:h-[420px] w-[350px] sm:w-[420px] rounded-lg relative ' >
                                            <img src={item} className='w-full h-full object-contain' alt="" />
                                        </div>
                                    </div>
                                    {i == (images?.length - 1) &&
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
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

UploadImg.propTypes = {
    setImageSelect: PropTypes.func
}

export default UploadImg