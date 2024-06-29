import { useState, useEffect, useCallback } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


const Category = () => {
    const [categories, setCategories] = useState(null)
    const { id } = useParams()
    console.log(id);
    const fetchCategories = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/store/product/${id}/category?fields=-__v`)
                setCategories(data)
            } catch (error) {
                console.error(error);
            }
        }, [id]
    )
    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])
    console.log(categories);
    return (
        <div>Category</div>
    )
}

export default Category