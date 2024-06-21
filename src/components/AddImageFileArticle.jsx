import { PlusIcon } from 'lucide-react'
import { useRef, useEffect, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form'

const AddImageFileArticle = () => {
  const { register, } = useFormContext()
  const [img, setImg] = useState('')
  const inputFileRef = useRef();
  const btnRef = useRef();

  const { ref, ...rest } = register('img', {
    onChange: (e) => {
      const file = e.target.files[0];
      if (file) {
        setImg(URL.createObjectURL(file));
      }
    }
  })
  useImperativeHandle(ref, () => inputFileRef.current)

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
      {img ? <img src={img} className="w-full rounded-md object-cover" />
        :
        <button ref={btnRef} className="h-96 w-full bg-gray-200 rounded-md flex justify-center items-center">
          <PlusIcon />
        </button>}
      <input
        type="file"
        className="hidden"
        {...rest}
        ref={inputFileRef}
      />
    </div>
  )
}
AddImageFileArticle.propTypes = {
  setSelectImg: PropTypes.func
}
export default AddImageFileArticle