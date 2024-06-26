import { useState } from 'react';
import UploadImg from '../../../components/UploadImg'
import { useForm, FormProvider } from 'react-hook-form';
import { PlusIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import ErrorMsg from '../../../components/ErrorMsg';
import { Spinner } from '../../../components/icons';
import StoreCategorySelect from '../components/StoreCategorySelect'

const Store = () => {
    const [imageSelect, setImageSelect] = useState([]);
    const [warning, setWarning] = useState(1);
    const [ingredient, setIngredient] = useState(1);
    const [loading, setLoading] = useState(false)
    const productForm = useForm();
    const { register, handleSubmit, formState: { errors } } = productForm;

    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true)
            const formData = new FormData();
            imageSelect.forEach(file => {
                formData.append('imgs', file);
            })
            data.ingredient.forEach(ing => {
                formData.append('ingredient', ing);
            })
            data.warning.forEach(war => {
                formData.append('warning', war);
            })
            formData.append('title', data.title);
            formData.append('price', data.price);
            formData.append('description', data.description);
            formData.append('rating', data.rating);
            formData.append('quantity', data.quantity);
            formData.append('useTo', data.useTo);
            formData.append('category', data.category);

            const res = await axios.post('/api/store/product', formData)
            toast.success(res.data.message)
            window.location.reload();
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <div className='pcontainer py-20 w-full overflow-x-auto'>
            <UploadImg setImageSelect={setImageSelect} />
            <div className='flex justify-center'>
                <FormProvider {...productForm}>
                    <form onSubmit={onSubmit} className='w-[350px] sm:w-[450px] py-5'>
                        <div className="space-y-4">
                            <div className='w-full'>
                                <input
                                    {...register('title', { required: 'This field is required' })}
                                    placeholder='Title'
                                    className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                    type="text"
                                />
                                <ErrorMsg message={errors?.title?.message} />
                            </div>
                            <div className='w-full'>
                                <textarea
                                    {...register('description', { required: 'This field is required' })}
                                    placeholder='Description'
                                    className='w-full py-2 px-2 min-h-32 max-h-44 rounded-md outline-none border focus:border-blue-500'
                                    type="text"
                                />
                                <ErrorMsg message={errors?.description?.message} />
                            </div>
                            <div className='w-full'>
                                <input
                                    {...register('price', { required: 'This field is required' })}
                                    placeholder='Price'
                                    className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                    type="number"
                                />
                                <ErrorMsg message={errors?.price?.message} />
                            </div>
                            <StoreCategorySelect />
                            <input
                                {...register('rating',)}
                                placeholder='Rating'
                                className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                type="number"
                            />
                            <input
                                {...register('quantity',)}
                                placeholder='Quantity'
                                className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                type="number"
                            />
                            <div className='w-full'>
                                <textarea
                                    {...register('useTo', { required: 'This field is required' })}
                                    placeholder='Use to'
                                    className='w-full py-2 px-2 min-h-32 max-h-44 rounded-md outline-none border focus:border-blue-500'
                                    type="text"
                                />
                                <ErrorMsg message={errors?.useTo?.message} />
                            </div>
                            <div className='space-y-2'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-medium'>
                                        Warning
                                    </h3>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setWarning(warning + 1)
                                    }}>
                                        <PlusIcon className='size-5' />
                                    </button>
                                </div>
                                <div className='space-y-3'>
                                    {
                                        Array(warning).fill().map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-2'
                                                >
                                                    <div className='w-2 h-2 rounded-full bg-black-black/50' />
                                                    <input
                                                        {...register(`warning.${index}`)}
                                                        placeholder={'warning number ' + (index + 1)}
                                                        className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                                        type="text"
                                                    />
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='font-medium'>
                                        Ingredient
                                    </h3>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setIngredient(ingredient + 1)
                                    }}>
                                        <PlusIcon className='size-5' />
                                    </button>
                                </div>
                                <div className='space-y-3'>
                                    {
                                        Array(ingredient).fill().map(
                                            (_, index) => (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-2'
                                                >
                                                    <div className='w-2 h-2 rounded-full bg-black-black/50' />
                                                    <input
                                                        {...register(`ingredient.${index}`)}
                                                        placeholder={'Ingredient number ' + (index + 1)}
                                                        className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                                                        type="text"
                                                    />
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <button
                            disabled={loading}
                            className='w-full bg-blue-500 text-white-White hover:bg-blue-600 disabled:bg-blue-300 mt-3 py-2 rounded-md flex justify-center'>
                            {loading ? <Spinner className={'animate-spin'} /> : "Create"}
                        </button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default Store

