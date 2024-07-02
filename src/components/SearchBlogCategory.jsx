import { useFormContext } from 'react-hook-form'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ErrorMsg from './ErrorMsg';
import PropTypes from 'prop-types'

const SearchBlogCategory = ({ categoryId }) => {
    const { formState: { errors }, register } = useFormContext()
    const { data } = useQuery({
        queryKey: 'blogCategory',
        queryFn: async () => {
            const { data } = await axios.get('/api/blog/category')
            return data.categories
        }
    })
    return (
        <div className="w-full">
            <select
                {...register('categoryId', {
                    required: "category is requred",
                    value: categoryId
                })}
                className='w-full py-2 px-2 border focus:border-blue-500 outline-none rounded-md'
            >
                <option value="">select category</option>
                {data?.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
            </select>
            <ErrorMsg message={errors?.categoryId?.message} />
        </div>
    )
}

SearchBlogCategory.propTypes = {
    categoryId: PropTypes.string
}

export default SearchBlogCategory