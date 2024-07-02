import { PlusIcon } from 'lucide-react'
import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form'

const PostImg = () => {
    const { setValue } = useFormContext()
    const [img, setImg] = useState('')
    const inputFileRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        const btn = btnRef.current;
        const input = inputFileRef.current;
        const clickInputFile = (e) => {
            e.preventDefault()
            input.click();
        }
        btn?.addEventListener('click', clickInputFile);
        return () => {
            btn?.removeEventListener('click', clickInputFile)
        }
    }, [])
    return (
        <div>
            {img ? <img src={img} className="w-full rounded-md object-cover max-h-[450px]" />
                :
                <button ref={btnRef} className="h-96 w-full bg-gray-200 rounded-md flex justify-center items-center">
                    <PlusIcon />
                </button>}
            <input
                ref={inputFileRef}
                // {...register('img')}
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        setImg(URL.createObjectURL(file));
                        setValue("img", file)
                    }
                }}
                type="file"
                className="hidden"
            />
        </div>
    )
}
PostImg.propTypes = {
    setSelectImg: PropTypes.func
}
export default PostImg