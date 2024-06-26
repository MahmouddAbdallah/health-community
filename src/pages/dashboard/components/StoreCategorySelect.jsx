import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { useFormContext } from 'react-hook-form'
import ErrorMsg from '../../../components/ErrorMsg'

const StoreCategorySelect = () => {
    const [categories, setCategories] = useState([])
    const { register, formState: { errors } } = useFormContext()
    const fetchCategories = useCallback(
        async () => {
            try {
                const { data } = await axios.get('/api/store/category?fields=name')
                setCategories(data.categories)
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }, []
    )
    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])
    return (
        <div className='w-full'>
            <select
                {...register('category', { required: 'This field is required' })}
                className='w-full py-2 px-2 rounded-md outline-none border focus:border-blue-500'
                type="number"
            >
                <option value="">Category</option>
                {categories.map(item =>
                    <option key={item._id} value={item._id}>{item.name}</option>
                )}
            </select>
            <ErrorMsg message={errors?.category?.message} />
        </div>
    )
}

export default StoreCategorySelect