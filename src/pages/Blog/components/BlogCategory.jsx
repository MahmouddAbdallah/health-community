import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BlogCategory = () => {
    const [categories, setCategories] = useState()
    const fetchCategoriesData = async () => {
        try {
            const { data } = await axios.get('/api/blog/category?fields=img,name')
            setCategories(data.categories)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!categories) {
            fetchCategoriesData()
        }
    }, [categories])
    return (
        <div className="pcontainer py-20 space-y-10 bg-black-black/5">
            <h4 className="md:text-2xl lg:text-3xl font-medium">Categories</h4>
            <div className="flex">
                {
                    categories?.map(item => {
                        return (
                            <Link to={`/blog/category/${item._id}`} className="block" key={item._id}>
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-black-black/30">
                                        <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                                    </div>
                                    <div>
                                        <h2 className="font-medium">{item.name}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogCategory